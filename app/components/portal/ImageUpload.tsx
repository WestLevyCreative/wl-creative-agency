import { useCallback, useRef, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Upload, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ImageUploadProps {
  onUploadComplete: (url: string) => void;
  userId: string;
  maxSizeMB?: number;
  accept?: string;
  defaultAspectRatio?: string;
  showAspectSelector?: boolean;
}

const ASPECT_RATIOS = {
  "1:1": 1 / 1,
  "4:5": 4 / 5,
  "5:7": 5 / 7,
  "4:6": 4 / 6,
  "16:9": 16 / 9,
  "free": 0, // Free aspect
};

export function ImageUpload({
  onUploadComplete,
  userId,
  maxSizeMB = 5,
  accept = "image/jpeg,image/png,image/webp,image/gif",
  defaultAspectRatio = "4:5",
  showAspectSelector = true
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [aspectRatio, setAspectRatio] = useState<string>(defaultAspectRatio);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const validateFile = (file: File): string | null => {
    // Check file type
    const validTypes = accept.split(',');
    const fileType = file.type;
    if (!validTypes.includes(fileType)) {
      return `Invalid file type. Allowed types: ${validTypes.join(', ')}`;
    }

    // Check file size (5MB = 5242880 bytes)
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return `File size must be less than ${maxSizeMB}MB`;
    }

    return null;
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const error = validateFile(file);
    if (error) {
      toast({
        title: "Invalid file",
        description: error,
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setCroppedAreaPixels(null);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const createImage = (url: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.src = url;
    });

  const getCroppedBlob = async () => {
    if (!preview || !croppedAreaPixels || !selectedFile) return selectedFile;
    const image = await createImage(preview);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return selectedFile;

    const { width, height, x, y } = croppedAreaPixels;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

    return await new Promise<File>((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(new File([blob], selectedFile.name, { type: selectedFile.type }));
          } else {
            resolve(selectedFile);
          }
        },
        selectedFile.type || "image/jpeg",
        0.92
      );
    });
  };

  const onCropComplete = useCallback((_: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);

    try {
      const fileToUpload = await getCroppedBlob();
      if (!fileToUpload) {
        throw new Error("Failed to process image");
      }
      const contentType = fileToUpload.type || selectedFile.type || "image/jpeg";

      // Create unique filename with timestamp
      const timestamp = Date.now();
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${userId}/${timestamp}.${fileExt}`;

      // Upload to Supabase Storage with proper metadata for RLS validation
      const { data, error } = await supabase.storage
        .from('agent-images')
        .upload(fileName, fileToUpload, {
          cacheControl: '3600',
          upsert: false,
          contentType,
        });

      if (error) {
        throw error;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('agent-images')
        .getPublicUrl(data.path);

      toast({
        title: "Upload successful",
        description: "Your image has been uploaded.",
      });

      onUploadComplete(publicUrl);

      // Reset state
      setSelectedFile(null);
      setPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error: unknown) {
      console.error('Upload error:', error);

      let errorMessage = "Failed to upload image. Please try again.";

      if (error instanceof Error) {
        // Provide specific guidance for common errors
        if (error.message.includes("403") || error.message.includes("Forbidden")) {
          errorMessage = "Permission denied. Please try logging out and back in.";
        } else if (error.message.includes("401") || error.message.includes("Unauthorized")) {
          errorMessage = "Your session has expired. Please log in again.";
        } else if (error.message.includes("413") || error.message.includes("Payload Too Large")) {
          errorMessage = `File is too large. Maximum size is ${maxSizeMB}MB.`;
        } else if (error.message.includes("storage")) {
          errorMessage = "Storage error. Please contact support if this persists.";
        } else {
          errorMessage = error.message;
        }
      }

      toast({
        title: "Upload failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleClearPreview = () => {
    setSelectedFile(null);
    setPreview(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const error = validateFile(file);
    if (error) {
      toast({
        title: "Invalid file",
        description: error,
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setCroppedAreaPixels(null);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4">
      {/* Aspect Ratio Selector */}
      {showAspectSelector && preview && (
        <div className="flex items-center gap-3">
          <label className="text-sm text-muted-foreground">Aspect Ratio</label>
          <Select value={aspectRatio} onValueChange={setAspectRatio}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1:1">1:1 Square</SelectItem>
              <SelectItem value="4:5">4:5 Portrait</SelectItem>
              <SelectItem value="5:7">5:7 Portrait</SelectItem>
              <SelectItem value="4:6">4:6 Portrait</SelectItem>
              <SelectItem value="16:9">16:9 Landscape</SelectItem>
              <SelectItem value="free">Free</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Drop Zone */}
      {!preview ? (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-foreground font-medium mb-1">
            Click to upload or drag and drop
          </p>
          <p className="text-sm text-muted-foreground">
            JPEG, PNG, WebP or GIF (max {maxSizeMB}MB)
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative space-y-3">
          <div className="relative w-full h-72 rounded-xl border border-border overflow-hidden bg-black">
            <Cropper
              image={preview}
              crop={crop}
              zoom={zoom}
              aspect={ASPECT_RATIOS[aspectRatio as keyof typeof ASPECT_RATIOS]}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-muted-foreground">Zoom</label>
            <input
              type="range"
              min={1}
              max={3}
              step={0.05}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setZoom(1)}
              disabled={uploading}
              aria-label="Reset zoom"
            >
              1x
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={handleClearPreview}
              disabled={uploading}
              aria-label="Clear selection"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Upload Button */}
      {preview && (
        <Button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full bg-primary text-primary-foreground"
        >
          {uploading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4 mr-2" />
              Upload Image
            </>
          )}
        </Button>
      )}
    </div>
  );
}

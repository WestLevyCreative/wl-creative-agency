import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Profile | Agent Portal",
  description: "Manage your profile details.",
};

export default function PortalProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-6">
        <SectionHeading
          eyebrow="Agent Portal"
          title="Profile"
          description="Update your profile, credentials, and public details."
        />

        <Card className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="First name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Last name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" placeholder="Title / Role" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Short professional bio" rows={4} />
          </div>

          <div className="flex gap-3">
            <Button type="button">Save changes</Button>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}

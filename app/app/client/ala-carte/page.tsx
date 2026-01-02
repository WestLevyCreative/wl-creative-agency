import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "À La Carte Services | Client Portal",
  description: "Purchase one-off services and add-ons.",
};

const services = [
  { title: "Press Release + Distribution", price: "$1,500", description: "Press-ready release with targeted distribution." },
  { title: "Podcast Booking Sprint", price: "$2,500", description: "Secure 4–6 guest slots on aligned shows." },
  { title: "Media Kit Refresh", price: "$1,200", description: "Updated one-sheet, bios, and talking points." },
];

export default function AlaCartePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-6">
        <SectionHeading
          eyebrow="Client Portal"
          title="À La Carte"
          description="One-off services and add-ons."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service) => (
            <Card key={service.title} className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <span className="text-sm font-medium text-primary">{service.price}</span>
              </div>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <Button variant="outline" className="w-full">Request</Button>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

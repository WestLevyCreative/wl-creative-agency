import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Our Story", href: "/the-story" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
  ],
  quickLinks: [
    { name: "Rewards Program", href: "/rewards" },
    { name: "Job Board", href: "/careers" },
    { name: "Submit a Ticket", href: "/support" },
    { name: "Hire Us!", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Preferences", href: "/preferences" },
  ],
};

const locations = [
  "Milano, Italy",
  "Monte Carlo, Monaco",
  "Dallas, Texas",
  "Atlanta, Georgia",
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand Column */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logos/logo-on-dark.png"
              alt="West Levy Creative"
              width={180}
              height={48}
              className="h-12 w-auto transition-opacity duration-300 hover:opacity-80"
            />
          </Link>
          <p className="text-sm text-muted-foreground mb-6 max-w-xs">
            We build visibility engines for brands who move culture forward.
          </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+13074199230"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +1 (307) 419-9230
              </a>
              <a
                href="mailto:hello@westlevy.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                hello@westlevy.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Global Presence
            </h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} West Levy Creative Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

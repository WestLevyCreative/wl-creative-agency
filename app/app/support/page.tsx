import { SectionHeading } from "@/components/SectionHeading";
import { TicketForm } from "@/components/support/TicketForm";
import {
  AlarmClock,
  BadgeCheck,
  Clock4,
  CreditCard,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Support | West Levy Creative",
  description: "Get help with partnerships, billing, or technical issues.",
};

const categories = [
  {
    title: "Technical",
    description: "Platform bugs, login issues, or integrations.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Account & Billing",
    description: "Invoices, payment methods, usage caps, or support plan.",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    title: "Feature Request",
    description: "Suggestions to improve the portal or reporting.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "General Question",
    description: "Anything else you need help with.",
    icon: <HelpCircle className="w-5 h-5" />,
  },
];

const contacts = [
  {
    title: "Email Support",
    value: "support@westlevy.com",
    href: "mailto:support@westlevy.com",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    title: "Phone Support",
    value: "+1 (307) 419-9230",
    href: "tel:+13074199230",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    title: "Business Hours",
    value: "Mon–Fri, 9:00 AM–6:00 PM EST",
    href: "mailto:support@westlevy.com",
    icon: <Clock4 className="w-5 h-5" />,
  },
];

const faqs = [
  {
    q: "What’s your typical response time?",
    a: "We aim to respond to all tickets within 24 hours on business days. Critical issues are prioritized.",
  },
  {
    q: "How do I check ticket status?",
    a: "You’ll receive email updates as your ticket progresses. We’ll notify you when it’s assigned, in progress, and resolved.",
  },
  {
    q: "Can I escalate an urgent issue?",
    a: "Yes. Choose High Priority when submitting your ticket or call us directly at +1 (307) 419-9230.",
  },
  {
    q: "Do you offer live chat support?",
    a: "Chat is available for select plans. For fastest help, submit a ticket with clear details and screenshots.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#05080c] text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1c1f] via-[#0d1b24] to-[#0d0e13]" />
        <div className="absolute inset-0 opacity-30">
          <div className="gradient-glow w-full h-full" />
        </div>
        <div className="container-custom relative pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="max-w-3xl text-center mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <BadgeCheck className="w-4 h-4 text-primary" />
              Support Center
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">We’re here to</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Help You <span className="text-gradient">Succeed</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Having an issue? Need guidance? Submit a ticket and we’ll respond within one business day.
              Agents and clients get tailored help and secure access.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom space-y-16 pb-20">
        {/* Categories */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="What can we help you with?"
            title="Select a category to get started"
            align="center"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card/70 backdrop-blur px-4 py-5 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ticket form */}
        <section className="rounded-3xl border border-border bg-card/80 backdrop-blur px-6 py-8 md:px-10 md:py-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Submit a support ticket</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Tell us what you need</h2>
            <p className="text-sm text-muted-foreground">
              Share details, links, or screenshots. The more context you provide, the faster we can help.
            </p>
          </div>
          <div className="mt-10">
            <TicketForm />
          </div>
          <div className="mt-6 text-xs text-muted-foreground text-center">
            Pro tip: include URLs, order numbers, or messages to speed up resolution.
          </div>
        </section>

        {/* Contact methods */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Other ways to reach us"
            title="We’re here when you need us"
            align="center"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                className="rounded-2xl border border-border bg-card/70 backdrop-blur p-5 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{contact.title}</p>
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Quick answers"
            align="center"
          />
          <div className="grid gap-3">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-border bg-card/70 px-5 py-4">
                <p className="font-semibold text-foreground">{item.q}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-[#18a2ac] via-[#1fb7a4] to-[#d6a64f]" />
        <div className="relative container-custom py-12 text-center text-[#062026]">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold">We’re here when you need us</p>
          <h3 className="mt-3 text-2xl font-bold">Your success is our priority</h3>
          <p className="mt-2 text-sm max-w-2xl mx-auto">
            Whether it’s a quick question or a complex issue, we’re committed to providing the support you deserve.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm">
            <div className="inline-flex items-center gap-2">
              <AlarmClock className="w-4 h-4" />
              Response within 24 hours
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Secure, role-based access
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

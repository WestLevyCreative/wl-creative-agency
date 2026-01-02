import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Cookie Policy | West Levy Creative",
  description: "How West Levy Creative Agency uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-padding container-custom space-y-10">
        <SectionHeading
          eyebrow="West Levy Creative Agency"
          title="Cookie Policy"
          description="How we use cookies and similar technologies, and how you can manage your preferences."
        />

        <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground prose-h3:text-foreground prose-strong:text-foreground">
          <p className="text-sm text-muted-foreground">Last updated: [DD Month YYYY]</p>

          <h3>1. What Are Cookies?</h3>
          <p>Cookies are small text files placed on your device when you visit a website. They help remember your preferences, improve site performance, and provide insights into how visitors use our site.</p>

          <h3>2. How We Use Cookies</h3>
          <p>We may use cookies and similar technologies to:</p>
          <ul>
            <li>Enable core site functionality (strictly necessary cookies)</li>
            <li>Measure performance and understand usage (analytics cookies)</li>
            <li>Improve marketing effectiveness where used and lawful (marketing cookies)</li>
          </ul>

          <h3>3. Types of Cookies</h3>
          <ul>
            <li><strong>Strictly Necessary:</strong> Required for the site to function (e.g., security, navigation).</li>
            <li><strong>Analytics/Performance:</strong> Help us understand site usage and improve performance.</li>
            <li><strong>Functionality:</strong> Remember choices (like language or region) to personalize your experience.</li>
            <li><strong>Marketing/Advertising:</strong> (If used) Help measure or improve the relevance of our outreach.</li>
          </ul>

          <h3>4. Third-Party Cookies</h3>
          <p>Some cookies may be set by third-party providers (e.g., analytics or embedded content). These providers have their own privacy and cookie practices.</p>

          <h3>5. Managing Your Preferences</h3>
          <ul>
            <li>Use our cookie banner (where provided) to accept or decline non-essential cookies.</li>
            <li>Adjust your browser settings to block or delete cookies.</li>
            <li>Opt-out tools from analytics or advertising providers where applicable.</li>
          </ul>
          <p>Note: Blocking certain cookies may affect site functionality or your experience.</p>

          <h3>6. Retention</h3>
          <p>Cookies persist for varying durations. Some are session-based (deleted when you close your browser); others persist for a defined period unless cleared.</p>

          <h3>7. Changes to This Policy</h3>
          <p>We may update this Cookie Policy from time to time. We will post the updated version and revise the “Last updated” date.</p>

          <h3>8. Contact</h3>
          <p>
            Questions about this policy? Contact us at{" "}
            <a href="mailto:privacy@westlevy.com">privacy@westlevy.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}

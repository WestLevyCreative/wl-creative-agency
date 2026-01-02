import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Terms of Service | West Levy Creative",
  description: "Terms governing use of westlevy.com and services provided by West Levy Creative Agency.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-padding container-custom space-y-10">
        <SectionHeading
          eyebrow="West Levy Creative Agency"
          title="Terms of Service"
          description="Please review these Terms before using our site or engaging our services."
        />

        <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground prose-h3:text-foreground prose-strong:text-foreground">
          <p className="text-sm text-muted-foreground">Last updated: [13 December 2025]</p>

          <h3>1. About West Levy</h3>
          <p>
            West Levy Creative Agency is a creative strategy, branding, media, and advisory firm providing professional services to clients worldwide.
          </p>

          <h3>2. Eligibility</h3>
          <p>You must be at least 18 years old and have the legal capacity to enter into binding agreements to use our website or services.</p>

          <h3>3. Services</h3>
          <p>West Levy provides customized creative, strategic, branding, media, and advisory services.</p>
          <p>Specific deliverables, timelines, fees, and scope are defined in written agreements, proposals, or statements of work (“SOW”). Nothing on this website constitutes a binding offer.</p>

          <h3>4. Client Obligations</h3>
          <ul>
            <li>Provide accurate, complete, and timely information</li>
            <li>Cooperate reasonably during project execution</li>
            <li>Ensure they have rights to any materials they provide</li>
            <li>Pay fees according to agreed terms</li>
          </ul>
          <p>Delays caused by incomplete or late client input may impact timelines and outcomes.</p>

          <h3>5. Fees and Payments</h3>
          <ul>
            <li>Fees are outlined in proposals, invoices, or contracts</li>
            <li>Payments must be made in the currency and timeframe specified</li>
            <li>Late payments may result in paused services or termination</li>
            <li>All fees are non-refundable unless expressly stated otherwise in writing</li>
          </ul>

          <h3>6. Intellectual Property</h3>
          <p><strong>6.1 West Levy IP</strong><br />All methodologies, frameworks, processes, templates, and pre-existing materials remain the intellectual property of West Levy unless otherwise agreed in writing.</p>
          <p><strong>6.2 Client Materials</strong><br />Clients retain ownership of materials they provide and grant West Levy a limited license to use them solely for service delivery.</p>
          <p><strong>6.3 Deliverables</strong><br />Ownership of final deliverables transfers only as specified in the applicable agreement and typically upon full payment.</p>

          <h3>7. Confidentiality</h3>
          <p>Both parties agree to keep confidential any non-public, proprietary, or sensitive information exchanged during the engagement, except where disclosure is required by law.</p>

          <h3>8. Disclaimers</h3>
          <ul>
            <li>Services are provided on a professional, best-effort basis</li>
            <li>West Levy does not guarantee specific outcomes, media placements, financial results, or performance metrics</li>
            <li>All strategic recommendations involve inherent risk</li>
          </ul>

          <h3>9. Limitation of Liability</h3>
          <p>To the maximum extent permitted by law:</p>
          <ul>
            <li>West Levy shall not be liable for indirect, incidental, or consequential damages</li>
            <li>Total liability shall not exceed the fees paid to West Levy for the specific services giving rise to the claim</li>
          </ul>

          <h3>10. Termination</h3>
          <p>Either party may terminate services according to the terms of the applicable agreement. Outstanding fees remain payable upon termination.</p>

          <h3>11. Third-Party Services</h3>
          <p>West Levy may recommend or coordinate with third-party platforms or providers. We are not responsible for their actions, performance, or policies.</p>

          <h3>12. Website Use</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website unlawfully</li>
            <li>Attempt unauthorized access</li>
            <li>Copy or misuse site content without permission</li>
          </ul>
          <p>All website content is protected by intellectual property laws.</p>

          <h3>13. Governing Law</h3>
          <p>
            Unless otherwise specified in a written agreement:<br />
            These Terms are governed by the laws of [Insert governing jurisdiction, e.g., State of Texas, USA / Italy / England & Wales]<br />
            Courts of that jurisdiction shall have exclusive jurisdiction.
          </p>

          <h3>14. Changes to Terms</h3>
          <p>We may update these Terms from time to time. Continued use of the website or services constitutes acceptance of the updated Terms.</p>

          <h3>15. Contact</h3>
          <p>
            West Levy Creative Agency<br />
            Email: <a href="mailto:legal@westlevy.com">legal@westlevy.com</a><br />
            Website: <a href="https://westlevy.com" target="_blank" rel="noreferrer">https://westlevy.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}

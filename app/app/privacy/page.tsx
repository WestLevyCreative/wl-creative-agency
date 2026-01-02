import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Privacy Policy | West Levy Creative",
  description: "How West Levy Creative Agency collects, uses, and protects personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-padding container-custom space-y-10">
        <SectionHeading
          eyebrow="West Levy Creative Agency"
          title="Privacy Policy"
          description="How we collect, use, share, and protect personal data when you interact with us."
        />

        <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground prose-h3:text-foreground prose-strong:text-foreground">
          <p className="text-sm text-muted-foreground">Last updated: [DD Month YYYY]</p>

          <h3>1. Data Controller</h3>
          <p>
            West Levy Creative Agency<br />
            [Legal entity name, if different]<br />
            Registered address: [Address]<br />
            Email: <a href="mailto:privacy@westlevy.com">privacy@westlevy.com</a><br />
            Phone: [Phone number]
          </p>
          <p>If we appoint a Data Protection Officer (DPO), we will publish their contact details here.</p>

          <h3>2. Scope</h3>
          <p>This Privacy Policy applies to:</p>
          <ul>
            <li>Visitors to westlevy.com and related web properties</li>
            <li>Prospective clients and business contacts</li>
            <li>Clients and client representatives</li>
            <li>Newsletter subscribers</li>
            <li>Applicants who submit recruitment inquiries or materials (if applicable)</li>
          </ul>

          <h3>3. Personal Data We Collect</h3>
          <p><strong>A. Data you provide</strong></p>
          <ul>
            <li>Identity and contact details (name, email, phone, company, role)</li>
            <li>Message content and attachments you submit via forms or email</li>
            <li>Billing and transaction data (invoices, payments, tax information where required)</li>
            <li>Information required to deliver services (e.g., brand materials, campaign data, stakeholder lists)</li>
            <li>Recruitment data (CV, portfolio, work history), if you apply or inquire about roles</li>
          </ul>
          <p><strong>B. Data collected automatically</strong></p>
          <ul>
            <li>Device and usage data (IP address, browser type, pages viewed, timestamps)</li>
            <li>Cookie and similar technology data (see Section 10)</li>
          </ul>
          <p><strong>C. Data from third parties</strong></p>
          <ul>
            <li>Social media platforms if you interact with our profiles</li>
            <li>Referrals from partners or professional contacts</li>
            <li>Payment processors confirming payment status</li>
          </ul>

          <h3>4. Purposes and Legal Bases</h3>
          <p><strong>A. To respond to inquiries and provide proposals</strong><br />Legal basis: Legitimate interests; and, where applicable, steps prior to entering a contract.</p>
          <p><strong>B. To provide services and manage the client relationship</strong><br />Legal basis: Contract performance.</p>
          <p><strong>C. Billing, accounting, and compliance obligations</strong><br />Legal basis: Legal obligation.</p>
          <p><strong>D. Marketing communications (newsletter, updates)</strong><br />Legal basis: Consent (where required) and/or legitimate interests depending on context and local rules.</p>
          <p><strong>E. Website analytics and improvement</strong><br />Legal basis: Consent for non-essential cookies (where required) and/or legitimate interests for strictly necessary operations.</p>
          <p><strong>F. Security, fraud prevention, and protecting legal rights</strong><br />Legal basis: Legitimate interests; legal obligation where applicable.</p>

          <h3>5. Sharing and Disclosure</h3>
          <p>We may share personal data with:</p>
          <ul>
            <li>Service providers (IT hosting, email, CRM, analytics, scheduling, e-signature)</li>
            <li>Payment processors and banking partners (to process payments)</li>
            <li>Professional advisers (legal, tax, audit) under confidentiality</li>
            <li>Authorities or regulators when required by law</li>
            <li>Clients, when necessary to perform a contract (e.g., sharing contact information of stakeholders provided by the client, under client instruction)</li>
          </ul>
          <p>We do not sell personal data.</p>

          <h3>6. International Data Transfers</h3>
          <p>
            Where personal data is transferred outside the European Economic Area (EEA), we use appropriate safeguards
            such as adequacy decisions or Standard Contractual Clauses, with supplementary measures where needed. You may request details by contacting us.
          </p>

          <h3>7. Data Retention</h3>
          <p>We keep personal data only as long as necessary for the purposes described above. Typical retention periods:</p>
          <ul>
            <li>Inquiry data: up to [12–24] months after last contact</li>
            <li>Client records and billing: [as required by applicable law, typically 10 years for accounting/tax in many jurisdictions]</li>
            <li>Marketing lists: until you unsubscribe or we remove inactive contacts in accordance with our review policy</li>
            <li>Logs and security records: [3–12] months unless needed for incident investigation</li>
          </ul>
          <p>We may retain data longer where required by law or to establish, exercise, or defend legal claims.</p>

          <h3>8. Your Rights (GDPR/UK GDPR Where Applicable)</h3>
          <p>Subject to conditions and exceptions, you may have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Rectify inaccurate data</li>
            <li>Erase data</li>
            <li>Restrict processing</li>
            <li>Object to processing (including certain marketing)</li>
            <li>Data portability (where applicable)</li>
            <li>Withdraw consent at any time (if consent is the legal basis)</li>
          </ul>
          <p>To exercise rights, contact: <a href="mailto:privacy@westlevy.com">privacy@westlevy.com</a>. We may verify your identity before responding. You also have the right to lodge a complaint with your local data protection authority.</p>

          <h3>9. Security</h3>
          <p>
            We implement appropriate technical and organizational measures to protect personal data, including access controls, encryption where appropriate, and vendor due diligence.
            No system is 100% secure, but we work to prevent unauthorized access, disclosure, or loss.
          </p>

          <h3>10. Cookies and Similar Technologies</h3>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Enable core site functionality (strictly necessary)</li>
            <li>Measure performance and understand usage (analytics)</li>
            <li>Improve marketing effectiveness (where used and lawful)</li>
          </ul>
          <p>Where required, non-essential cookies are set only after your consent. You can manage preferences via our cookie banner or browser settings.</p>

          <h3>11. Third-Party Links</h3>
          <p>Our website may link to third-party sites (e.g., social platforms). Their privacy practices are governed by their own policies.</p>

          <h3>12. Children</h3>
          <p>Our services are not directed to children under 16, and we do not knowingly collect personal data from children.</p>

          <h3>13. Changes to This Policy</h3>
          <p>We may update this Privacy Policy from time to time. We will post the updated version and revise the “Last updated” date.</p>

          <h3>14. Contact</h3>
          <p>
            Email: <a href="mailto:privacy@westlevy.com">privacy@westlevy.com</a><br />
            Address: [Address]
          </p>
        </div>
      </section>
    </main>
  );
}

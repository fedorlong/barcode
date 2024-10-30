import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Free Barcode Generator',
  description: 'Privacy Policy for Free Barcode Generator',
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>Currently, we do not collect personal information. However, we may collect non-personal information such as browser type, device type, and IP address for analytics and service improvement purposes.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
          <p>Any information we collect is used to improve our service, analyze usage patterns, and enhance user experience. We do not sell or share any information with third parties.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Cookies and Similar Technologies</h2>
          <p>We may use cookies or similar technologies to enhance your experience on our website. You can adjust your browser settings to refuse cookies, but this may limit some functionality of our service.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>We implement reasonable security measures to protect against unauthorized access or alteration of any information we might collect in the future.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Future Updates</h2>
          <p>If we introduce features that involve collecting personal information (such as user accounts), we will update this policy accordingly and may require your consent for such collection.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
          {/* <p>If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].</p> */}
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
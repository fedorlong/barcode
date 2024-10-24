/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export const metadata = {
  title: 'Terms of Use - Barcode Genie',
  description: 'Terms of Use for Barcode Genie',
};

const TermsOfUse: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>Welcome to Barcode Genie. By accessing or using our website, you agree to be bound by these terms. If you do not agree to these terms, please do not use our service.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Description of Service</h2>
          <p>Barcode Genie provides an online barcode generation service. We reserve the right to modify, suspend, or discontinue the service at any time without notice.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
          <p>You agree to use our service only for lawful purposes and in compliance with all applicable laws and regulations. You are responsible for all barcode content generated using our service.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
          <p>All content, design, and functionality within our website and service are the property of Barcode Genie and are protected by copyright and other intellectual property laws.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Disclaimer</h2>
          <p>Our service is provided "as is" without any warranties, express or implied. We are not responsible for any loss or damage resulting from the use of our service.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Modifications to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Modified terms will be effective immediately upon posting on our website. Your continued use of our service constitutes acceptance of the modified terms.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
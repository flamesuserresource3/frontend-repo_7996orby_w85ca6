import React from 'react';

const FooterSection = ({ showBranding = true }) => {
  return (
    <footer className="w-full bg-gray-50 py-8">
      <div className="container mx-auto px-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} The Wedding. All rights reserved.</p>
        {showBranding && (
          <p className="mt-2 text-xs text-gray-500">Powered by YourBrand</p>
        )}
      </div>
    </footer>
  );
};

export default FooterSection;

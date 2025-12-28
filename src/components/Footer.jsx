import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F7F5EE] text-gray-700">
      <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif text-gray-900">
            BOOK<span className="font-normal">STORE</span>
          </h2>

          <p className="mt-6 leading-relaxed text-gray-600 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            sed ptibus liberolecus nonet psryroin. Amet sed lorem posuere sit
            iaculis amet, ac urna. Adipiscing fames semper erat ac in
            suspendisse iaculis.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-xl text-gray-900 mb-6">About Us</h3>
          <ul className="space-y-4">
            <li>vision</li>
            <li>articles</li>
            <li>careers</li>
            <li>service terms</li>
            <li>donate</li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl text-gray-900 mb-6">Discover</h3>
          <ul className="space-y-4">
            <li>Home</li>
            <li>Books</li>
            <li>Authors</li>
            <li>Subjects</li>
            <li>Advanced Search</li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl text-gray-900 mb-6">My Account</h3>
          <ul className="space-y-4">
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl text-gray-900 mb-6">Help</h3>
          <ul className="space-y-4">
            <li>Help center</li>
            <li>Report a problem</li>
            <li>Suggesting edits</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 All rights reserved.</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Reddit</span>
            <span>X</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

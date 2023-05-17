import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiStore2Line } from 'react-icons/ri';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaShoppingBag , FaShoppingCart } from 'react-icons/fa';

const CommerceService = () => {
  return (
    <div className="bg-gray-100 py-8 rounded-lg container mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Our Services</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-4 sm:px-8 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <RiStore2Line className="text-blue-500 text-4xl mx-auto" />
              <h2 className="text-center text-xl font-semibold mt-4">Configure Your Store</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <FaShoppingBag className="text-pink-500 text-4xl mx-auto" />
              <h2 className="text-center text-xl font-semibold mt-4">List Your Products</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <FaMoneyBillAlt className="text-blue-400 text-4xl mx-auto" />
              <h2 className="text-center text-xl font-semibold mt-4">Generate Earns</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <FaShoppingCart className="text-red-500 text-4xl mx-auto" />
              <h2 className="text-center text-xl font-semibold mt-4">Track Your Purchases</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommerceService;

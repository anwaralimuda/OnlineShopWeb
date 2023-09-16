'use client'
import { useEffect, useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';


const BuyPage = () => {
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    address: '',
    // Add more fields as needed
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Perform the necessary logic for processing the purchase
    // For example, send the billingInfo to the server for payment processing
    console.log('Billing Info:', billingInfo);
    // Redirect or show a success message
  };

  return (
    <div>
      <Navbar />

      <div className="container py-8 mx-auto">
        <h1 className="my-8 font-sans text-2xl font-semibold text-center">Buy Page</h1>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={billingInfo.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={billingInfo.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block mb-2 font-semibold">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={billingInfo.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Add more fields for billing information as needed */}
            
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyPage;

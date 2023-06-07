'use client'
import { useEffect, useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Image from 'next/image';

const ClothingPage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Cheny Drwastring Dress',
      price: 349.000,
      image: '/clo1.jpg',
    },
    {
      id: 2,
      name: 'Beth Stripes Loose Shirt',
      price: 329.000,
      image: '/clo2.jpg',
    },
    {
      id: 3,
      name: 'Che Lace Outer Mauve',
      price: 359.000,
      image: '/clo3.jpg',
    },
    {
      id: 4,
      name: 'Bonnie Pocket H-Line Shirt Dres Dark Blue',
      price: 399.000,
      image: '/clo4.jpg',
    },
    {
      id: 5,
      name: 'Barbara Stripes  Long Top Black',
      price: 329.000,
      image: '/clo5.jpg',
    },
    {
      id: 6,
      name: 'Sofia Mera Basic Blazer Black',
      price: 299.000,
      image: '/clo6.jpg',
    },
    {
      id: 7,
      name: 'Cherlent Crop Shirt White',
      price: 329.000,
      image: '/clo7.jpg',
    },
    {
      id: 8,
      name: 'Sofia Metta Cullotes Pants Broken White',
      price: 299.000,
      image: '/clo8.jpg',
    },
    {
      id: 9,
      name: 'Becca Asymmetric Tweed Top Brown',
      price: 329.000,
      image: '/clo9.jpg',
    },
    {
      id: 10,
      name: 'Benne Boxy Top Brown',
      price: 299.000,
      image: '/clo10.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
     <Navbar/>

      <div className="container py-8 mx-auto">
        <h1 className="my-8 font-sans text-2xl font-semibold text-center">Clothing</h1>

        {/* Clothing products */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {/* Product cards */}
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white rounded-lg shadow">
              <Image src={product.image} width={100} height={100} alt={product.name} className="object-contain w-full h-48 mb-4" />
              <h2 className="mb-2 text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">Rp{product.price.toFixed(2)}</p>
              <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                Buy
              </button>
              <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                Add To Chart
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800">
       <Footer/>
      </footer>
    </div>
  );
};

export default ClothingPage;

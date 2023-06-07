'use client'
import { useEffect, useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Image from 'next/image';

const Bags = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Rachita Sling Bag Cream',
      price: 359.000,
      image: '/bags1.jpg',
    },
    {
      id: 2,
      name: 'Sofia Reva Quilted Shoulder Bag Black',
      price: 219.000,
      image: '/bags2.jpg',
    },
    {
      id: 3,
      name: 'Sofia Tammie Quilted Shoulder Bag Dusty Pink',
      price: 249.000,
      image: '/bags3.jpg',
    },
    {
      id: 4,
      name: 'Sofia Melissa Quilted Shoulder Bag Maroon',
      price: 499.000,
      image: '/bags4.jpg',
    },
    {
      id: 5,
      name: 'Orlie Quilted Shoulder Bag Black',
      price: 549.000,
      image: '/bags5.jpg',
    },
    {
      id: 6,
      name: 'Jordan Sling Bag Olive',
      price: 199.000,
      image: '/bags6.jpg',
    },
    {
      id: 7,
      name: 'Panna Octa Sling Bag Black',
      price: 399.000,
      image: '/bags7.jpg',
    },
    {
      id: 8,
      name: 'Sofia Phoenix Quilted Slingbags Brown',
      price: 349.000,
      image: '/bags8.jpg',
    },
    {
      id: 9,
      name: 'Tiya Quilted Shoulder Bag Black',
      price: 429.000,
      image: '/bags9.jpg',
    },
    {
      id: 10,
      name: 'Olivia Fara Quilted Shoulder Bag Black',
      price: 469.000,
      image: '/bags10.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
    <Navbar/>
    
      <div className="container py-8 mx-auto">
        <h1 className="my-8 font-sans text-2xl font-semibold text-center">Bags</h1>

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

export default Bags;

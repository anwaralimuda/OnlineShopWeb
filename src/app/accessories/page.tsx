'use client'
import { useEffect, useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Image from 'next/image';
import {FiShoppingCart} from "react-icons/fi"

const Accessories = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Sofia Jemima Marble Gray',
      price: 139.000,
      image: '/as1.jpg',
    },
    {
      id: 2,
      name: 'Hunsha Octarina Crescent Earrings Brown',
      price: 49.000,
      image: '/as2.jpg',
    },
    {
      id: 3,
      name: 'Padma Square In Pink',
      price: 149.000,
      image: '/as3.jpg',
    },
    {
      id: 4,
      name: 'Laelia Square In Beige',
      price: 299.000,
      image: '/as4.jpg',
    },
    {
      id: 5,
      name: 'Berrybenka Reausable Cup Elastic Mask Lace Dark Brown',
      price: 20.000,
      image: '/as5.jpg',
    },
    {
      id: 6,
      name: 'Sofia Caena Round Navy',
      price: 349.000,
      image: '/as6.jpg',
    },
    {
      id: 7,
      name: 'Sofia Calestra Oval Black',
      price: 269.000,
      image: '/as7.jpg',
    },
    {
      id: 8,
      name: 'Sofia Jennie Polkadot Black',
      price: 249.000,
      image: '/as8.jpg',
    },
    {
      id: 9,
      name: 'Humma Octarina   Chain Earrings Brown',
      price: 89.000,
      image: '/as9.jpg',
    },
    {
      id: 10,
      name: 'Happin Martha Earrings White',
      price: 89.000,
      image: '/as10.jpg',
    },
    {
      id: 11,
      name: 'Sofia Cerra Stainlees Gold',
      price: 269.000,
      image: '/as11.jpg',
    },
    {
      id: 12,
      name: 'Sofia Cleysia Digital Gold',
      price: 269.000,
      image: '/as12.jpg',
    },
    {
      id: 13,
      name: 'Sofia Carmen Basic Peach',
      price: 249.000,
      image: '/as13.jpg',
    },
    {
      id: 14,
      name: 'Sofia Canna Basic Silver',
      price: 289.000,
      image: '/as14.jpg',
    },
    {
      id: 15,
      name: 'Huyi Martha Earrings Green',
      price: 99.000,
      image: '/as15.jpg',
    },
    {
      id: 16,
      name: 'Sonaun Octarina Square Stud Earrings Red',
      price: 59.000,
      image: '/as16.jpg',
    },
    {
      id: 17,
      name: 'Sorena Octarina Round Squaretud Earrings Black',
      price: 59.000,
      image: '/as17.jpg',
    },
    {
      id: 18,
      name: 'Hueydi Decyta Dangle Earrings Gold',
      price: 99.000,
      image: '/as18.jpg',
    },
    // Add more products as needed
  ];

  

  return (
    <div>
     <Navbar/>

      <div className="container py-8 mx-auto">
        <h1 className="my-8 font-sans text-2xl font-semibold text-center">Accessories</h1>

        {/* Clothing products */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {/* Product cards */}
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white rounded-lg shadow">
              <Image src={product.image} width={100} height={100} alt={product.name} className="object-contain w-full h-48 mb-4" />
              <h2 className="mb-2 text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">Rp{product.price.toFixed(3)}</p>
              <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                Buy
              </button>
              <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                Add To Cart
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

export default Accessories;

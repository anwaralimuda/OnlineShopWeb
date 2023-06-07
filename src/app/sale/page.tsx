'use client'
import { useEffect, useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Image from 'next/image';

const Sale = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Sofia Maeca Slingback',
      price:  99.000,
      image: '/sale1.jpg',
    },
    {
      id: 2,
      name: 'Sofia Mella Ballerina Multti Color 2',
      price: 139.000,
      image: '/sale2.jpg',
    },
    {
      id: 3,
      name: 'Sofia Melda Jelly Sandal Black',
      price: 129.000,
      image: '/sale3.jpg',
    },
    {
      id: 4,
      name: 'Brea Tunic White',
      price: 359.000,
      image: '/sale4.jpg',
    },
    {
      id: 5,
      name: 'Cherry Wide Pants Cream',
      price: 279.000,
      image: '/sale5.jpg',
    },
    {
      id: 6,
      name: 'Brighton Motif Shirt Dress Black',
      price: 249.000,
      image: '/sale6.jpg',
    },
    {
      id: 7,
      name: 'Sofia Meysia Wide Pants Light Grey',
      price: 134.000,
      image: '/sale7.jpg',
    },
    {
      id: 8,
      name: 'Briella Checkered Oversized Jacket Cream',
      price: 279.000,
      image: '/sale8.jpg',
    },
    {
      id: 9,
      name: 'Bianca Chiffon Motif Shirt White',
      price: 199.000,
      image: '/sale9.jpg',
    },
    {
      id: 10,
      name: 'Bailey Checkered Tie Kimono Brown',
      price: 259.000,
      image: '/sale10.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
    <Navbar/>
    
      <div className="container py-8 mx-auto">
        <h1 className="my-8 font-sans text-2xl font-semibold text-center">Sale</h1>

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

export default Sale;

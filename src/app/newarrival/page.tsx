'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Image from 'next/image';


const NewArrival = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'candice Motif Kimono',
      price: 500.000,
      image: '/NA1.jpg',
    },
    {
      id: 2,
      name: 'Sofia Maria Collar Pants',
      price: 200.000,
      image: '/NA2.jpg',
    },
    {
      id: 3,
      name: 'Sofia Cailey Square',
      price: 400.000,
      image: '/NA3.jpg',
    },
    {
      id: 4,
      name: 'Sofia Calestra Oval Black',
      price: 269.000,
      image: '/NA4.jpg',
    },
    {
      id: 5,
      name: 'Sofia Cerra Stainless Gold',
      price: 269.000,
      image: '/NA5.jpg',
    },
    {
      id: 6,
      name: 'Sofia Melly Jelly Sandal Black',
      price: 229.000,
      image: '/NA6.jpg',
    },
    {
      id: 7,
      name: 'Sofia Cailey Square Black',
      price: 289.000,
      image: '/NA7.jpg',
    },
    {
      id: 8,
      name: 'Brie Scuba Cullote Broken White',
      price: 299.000,
      image: '/NA8.jpg',
    },
    {
      id: 9,
      name: 'Sofia Jhene Sneaker Grey',
      price: 449.000,
      image: '/NA9.jpg',
    },
    {
      id: 10,
      name: 'Hiro Knit Vest Multicolor',
      price: 369.000,
      image: '/NA10.jpg',
    },
    {
      id: 11,
      name: 'Sofia Micca Ballerina Flat Black',
      price: 369.000,
      image: '/NA11.jpg',
    },
    {
      id: 12,
      name: 'Sofia Fana Bow Flat Black',
      price: 299.000,
      image: '/NA12.jpg',
    },
    {
      id: 13,
      name: ' Sofia Micca Ballerina Flat Pink',
      price: 369.000,
      image: '/NA13.jpg',
    },
    {
      id: 14,
      name: 'Sofia Cerra Stainless Silver',
      price: 269.000,
      image: '/NA14.jpg',
    },
    {
      id: 15,
      name: 'Hiro Knit Vest Multicolor',
      price: 369.000,
      image: '/NA15.jpg',
    },
    {
      id: 16,
      name: 'Hiro Knit Vest Multicolor',
      price: 369.000,
      image: '/NA16.jpg',
    },
    {
      id: 17,
      name: 'Hiro Knit Vest Multicolor',
      price: 369.000,
      image: '/NA17.jpg',
    },
    {
      id: 18,
      name: 'Hiro Knit Vest Multicolor',
      price: 369.000,
      image: '/NA18.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar/>
      <div className="container py-8 mx-auto">
        <h1 className="my-8 font-sans text-2xl font-semibold text-center">New Arrival</h1>

        {/* Clothing products */}
        <div className="grid gap-4 grid-cols- md:grid-cols-3 lg:grid-cols-6">
          {/* Product cards */}
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white rounded-lg shadow">
              <Image src={product.image} width={100} height={100} alt={product.name} className="object-cover w-full mb-4 h-30" />
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

export default NewArrival;

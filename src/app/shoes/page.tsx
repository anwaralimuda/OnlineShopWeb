'use client'
import { useEffect, useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Image from 'next/image';

const Shoes = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Sofia Micca Ballerina',
      price: 369.000,
      image: '/shoes1.jpg',
    },
    {
      id: 2,
      name: 'Sofia Molly Jolly Sandal',
      price: 229.000,
      image: '/shoes2.jpg',
    },
    {
      id: 3,
      name: 'Sofia Jaelyn Sneaker',
      price: 449.000,
      image: '/shoes3.jpg',
    },
    {
      id: 4,
      name: 'Sofia Merra Ballerina Multi Color 2 ',
      price: 369.000,
      image: '/shoes4.jpg',
    },
    {
      id: 5,
      name: 'Sofia Mia Mules Flat Black',
      price: 349.000,
      image: '/shoes5.jpg',
    },
    {
      id: 6,
      name: 'Sofia Selena Flatform Sneaker White',
      price: 379.000,
      image: '/shoes6.jpg',
    },
    {
      id: 7,
      name: 'Sofia Melly Jelly Sandal Black',
      price: 229.000,
      image: '/shoes7.jpg',
    },
    {
      id: 8,
      name: 'Sofia Irie Basic Sandal Black ',
      price: 169.000,
      image: '/shoes8.jpg',
    },
    {
      id: 9,
      name: 'Sofia Manaka Flat Black',
      price: 299.000,
      image: '/shoes9.jpg',
    },
    {
      id: 10,
      name: 'Sofia Glosy Sandal Heels Black',
      price: 399.000,
      image: '/shoes10.jpg',
    },
    {
      id: 11,
      name: 'Sofia Amazara Beau Sandal Beige',
      price: 229.000,
      image: '/shoes11.jpg',
    },
    {
      id: 12,
      name: 'Sofia Ibira Sandal Wide Strap Pink',
      price: 249.000,
      image: '/shoes12.jpg',
    },
    {
      id: 13,
      name: 'Sofia Yumma Low Ankle Sneaker Multi Color 1',
      price: 399.000,
      image: '/shoes13.jpg',
    },
    {
      id: 14,
      name: 'Sofia Ivanka Heels Strappy Beige',
      price: 299.000,
      image: '/shoes14.jpg',
    },
    {
      id: 15,
      name: 'Sofia Serena Eva Sandal Olive',
      price: 249.000,
      image: '/shoes15.jpg',
    },
    {
      id: 16,
      name: 'Sofia Mita Ballerina Flat Black',
      price: 349.000,
      image: '/shoes16.jpg',
    },
    {
      id: 17,
      name: 'Sofia Fenna Oxford Loafer Black',
      price: 399.000,
      image: '/shoes17.jpg',
    },
    {
      id: 18,
      name: 'Sofia Aera Pointy Heels Black',
      price: 369.000,
      image: '/shoes18.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar/>

      <div className="container py-8 mx-auto">
        <h1 className="my-8 font-sans text-2xl font-semibold text-center">Shoes</h1>

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

export default Shoes;

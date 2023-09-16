'use client'
import { useEffect, useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Image from 'next/image';

const Men = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Men Daryl Suede Sneakers Black',
      price:  449.000,
      image: '/men1.jpg',
    },
    {
      id: 2,
      name: 'Men Coach Lonewolf Black',
      price: 449.000,
      image: '/men2.jpg',
    },
    {
      id: 3,
      name: 'Men Jaeden Watches Olive',
      price: 249.000,
      image: '/men3.jpg',
    },
    {
      id: 4,
      name: 'Men Sonic Shoes Suede Beige',
      price: 599.000,
      image: '/men4.jpg',
    },
    {
      id: 5,
      name: 'Jerome Roll Over Back Pack Black',
      price: 279.000,
      image: '/men5.jpg',
    },
    {
      id: 6,
      name: 'Men Daryl S  Sneakers White ',
      price: 429.000,
      image: '/men6.jpg',
    },
    {
      id: 7,
      name: 'Men Judy Backpack Navy',
      price: 279.000,
      image: '/men7.jpg',
    },
    {
      id: 8,
      name: 'Men Dikara Walking Sandals Grey Gum ',
      price: 429.000,
      image: '/men8.jpg',
    },
    {
      id: 9,
      name: 'Men T-shirt Boom Boom Ciao Black ',
      price: 199.000,
      image: '/men9.jpg',
    },
    {
      id: 10,
      name: 'Men Dion Sandals Black ',
      price: 429.000,
      image: '/men10.jpg',
    },
    {
      id: 11,
      name: 'Men Jovi Watches Grey ',
      price: 299.000,
      image: '/men11.jpg',
    },
    {
      id: 12,
      name: 'Clint Black Bag',
      price: 279.000,
      image: '/men12.jpg',
    },
    {
      id: 13,
      name: 'Men Daniel Sandal Olive',
      price: 429.000,
      image: '/men13.jpg',
    },
    {
      id: 14,
      name: 'Jeffrey Sling Bag Black ',
      price: 199.000,
      image: '/men14.jpg',
    },
    {
      id: 15,
      name: 'Men Coach Jacket Riders INC Black ',
      price: 449.000,
      image: '/men15.jpg',
    },
    {
      id: 16,
      name: 'Men Mate Sling Bag Black ',
      price: 199.000,
      image: '/men16.jpg',
    },
    {
      id: 17,
      name: 'Jhon Chino Slim Straight Fit Cream ',
      price: 369.000,
      image: '/men17.jpg',
    },
    {
      id: 18,
      name: 'Joey Flannel Shirt Blue ',
      price: 299.000,
      image: '/men18.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar/>

      <div className="container py-8 mx-auto">
        <h1 className="my-8 font-sans text-2xl font-semibold text-center">Men</h1>

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

export default Men;

/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Image from 'next/image';
import Link from 'next/link';

const Halamanutama = () => {
  const categories = [
    {
      id: 1,
      name: 'Clothing',
      image: '/clothes.jpg',
    },
    {
      id: 2,
      name: 'Bags',
      image: '/bags.jpg',
    },
    {
      id: 3,
      name: 'Shoes',
      image: '/shoes.jpg',
    },
    {
      id: 4,
      name: 'Accessories',
      image: '/accessories.jpg',
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="container py-8 mx-auto">
        <h1 className="mb-6 text-2xl font-bold text-center"></h1>

        {/* Clothing categories */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Category cards */}
          {categories.map((category) => (
            <div key={category.id} className="p-4 bg-white rounded-lg shadow">
              <Image src={category.image} width={200} height={200} alt={category.name} className="object-cover mb-6 min-w-max h-30" 
              />
              <h2 className="mb-2 text-lg font-semibold">{category.name}</h2>
              <Link href={`${category.name.toLowerCase()}`}>
              <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                View Products
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Halamanutama;

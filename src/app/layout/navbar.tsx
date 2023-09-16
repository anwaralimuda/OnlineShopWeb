import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isNavbarScrolled = window.scrollY > 0;
      setIsScrolled(isNavbarScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 w-full py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-4 lg:px-6x">
          <div className="flex items-center justify-between h-8 text-center">
            <div className="flex items-center">
              <a
                href="halamanutama"
                className="flex items-center flex-shrink-0 text-black rounded-full"
              >
                <Image
                  width={200}
                  height={200}
                  src="/berrybenka.png" 
                  alt="BERRYBENKA"
                />
              </a>
            </div>
            <div className="flex justify-between">
              <div className="flex items-baseline ml-5 space-x-4">
                <Link
                  href={'/newarrival'}
                  className="px-3 py-2 text-sm font-medium rounded-md text-slate-800 hover:text-black "
                >
                  NEW ARRIVAL
                </Link>
                <Link
                  href={'/clothing'}
                  className="px-3 py-2 text-sm font-medium rounded-md text-slate-800 hover:text-black "
                >
                  CLOTHING
                </Link>
                <Link
                  href={'/shoes'}
                  className="px-3 py-2 text-sm font-medium rounded-md text-slate-800 hover:text-black "
                >
                  SHOES
                </Link>
                <Link
                  href={'/bags'}
                  className="px-3 py-2 text-sm font-medium rounded-md text-slate-800 hover:text-black "
                >
                  BAGS
                </Link>
                <Link
                  href={'/accessories'}
                  className="px-3 py-2 text-sm font-medium rounded-md text-slate-800 hover:text-black "
                >
                  ACCESSORIES
                </Link>
                <Link
                href={'/sale'}
                className="px-3 py-2 text-sm font-medium rounded-md text-slate-800 hover:text-black "
              >
                SALE
                </Link>
                <Link
                href={'/men'}
                className="px-3 py-2 text-sm font-medium rounded-md text-slate-800 hover:text-black "
              >
               MEN
               </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium rounded-md text-slate-800 hover:text-black "
            >
              Home
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium rounded-md text-slate-800 hover:text-black "
            >
              About
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium rounded-md text-slate-800 hover:text-black "
            >
              Services
            </Link>
            <div className="block px-3 py-2 text-base font-medium rounded-md text-slate-800 hover:text-black ">
              Contact
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
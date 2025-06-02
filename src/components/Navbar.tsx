"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="relative h-10 w-28">
                  <Image 
                    src="/logo.jpg" 
                    alt="PLR Orleans Logo" 
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-[#cc0000] text-sm font-medium transition-colors">
                Accueil
              </Link>
              <Link href="/produits" className="text-gray-600 hover:text-[#cc0000] text-sm font-medium transition-colors">
                Produits
              </Link>
              <Link href="/tarifs" className="text-gray-600 hover:text-[#cc0000] text-sm font-medium transition-colors">
                Tarifs
              </Link>
              <Link href="/nous-contacter" className="text-gray-600 hover:text-[#cc0000] text-sm font-medium transition-colors">
                Nous contacter
              </Link>
              <Link href="/conditions-generales" className="text-gray-600 hover:text-[#cc0000] text-sm font-medium transition-colors">
                Conditions Générales
              </Link>
            </div>
            
            {/* Phone number and reservation button - desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:0638679082" 
                className="inline-flex items-center text-[#cc0000] text-sm font-medium hover:text-[#a00000] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 38 67 90 82
              </a>
              
              <Link 
                href="/reservation" 
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#cc0000] hover:bg-[#a00000] transition-colors shadow-sm"
              >
                Réserver Maintenant
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-[#cc0000] hover:bg-gray-100 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Ouvrir le menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#cc0000] hover:bg-gray-50 rounded-md">
              Accueil
            </Link>
            <Link href="/produits" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#cc0000] hover:bg-gray-50 rounded-md">
              Produits
            </Link>
            <Link href="/tarifs" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#cc0000] hover:bg-gray-50 rounded-md">
              Tarifs
            </Link>
            <Link href="/nous-contacter" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#cc0000] hover:bg-gray-50 rounded-md">
              Nous contacter
            </Link>
            <Link href="/conditions-generales" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#cc0000] hover:bg-gray-50 rounded-md">
              Conditions Générales
            </Link>
            <div className="border-t border-gray-100 pt-2 mt-2">
              <a href="tel:0638679082" className="flex items-center px-3 py-2 text-base font-medium text-[#cc0000]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 38 67 90 82
              </a>
              
              <div className="px-3 py-3">
                <Link 
                  href="/reservation" 
                  className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#cc0000] hover:bg-[#a00000] transition-colors shadow-sm"
                >
                  Réserver Maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

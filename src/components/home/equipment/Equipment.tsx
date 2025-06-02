"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Equipment() {
  const equipmentCategories = [
    {
      name: 'Véhicules',
      icon: (
        <div className="h-4 w-4 rounded-full bg-[#cc0000]"></div>
      ),
      image: '/images/vehicule9.jpg',
      description: 'Idéal pour vos déplacements en groupe',
      items: [
        { name: 'Véhicule 9 places', url: '/produits/9-places/' }
      ]
    },
    {
      name: 'Plateaux',
      icon: (
        <div className="h-4 w-4 rounded-full bg-[#cc0000]"></div>
      ),
      image: '/images/remorque-transport-voiture.jpg',
      description: 'Transport sécurisé pour vos véhicules',
      items: [
        { name: 'Plateau 1300 Kg', url: '/produits/plateau/plateau-1300-kg/' },
        { name: 'Plateau 2 T', url: '/produits/plateau/plateau-2-t/' },
        { name: 'Plateau 3,5 T', url: '/produits/plateau/plateau-3-5-t/' }
      ]
    },
    {
      name: 'Camions',
      icon: (
        <div className="h-4 w-4 rounded-full bg-[#cc0000]"></div>
      ),
      image: '/images/camion-tranport-voiture.jpg',
      description: 'Solutions professionnelles pour tous vos besoins',
      items: [
        { name: 'Camion porte voiture', url: '/produits/camion/camion-d%C3%A9pannage/' },
        { name: 'Camion déménagement 12 m³', url: '/produits/camion/camion-d%C3%A9m%C3%A9nagement-12m2/' },
        { name: 'Camion déménagement 17 m³', url: '/produits/camion/camion-d%C3%A9m%C3%A9nagement-17m2/' },
        { name: 'Camion déménagement 20 m³', url: '/produits/camion/camion-d%C3%A9m%C3%A9nagement-20m2/' },
        { name: 'Camion benne', url: '/produits/camion/camion-benne/' }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333333] mb-2">
            Nos équipements
          </h2>
          <div className="h-1 w-20 bg-[#cc0000] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de véhicules et équipements pour tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipmentCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <div className="h-5 w-5 rounded-full bg-[#cc0000]"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333]">{category.name}</h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {category.items.map((item) => (
                    <li key={item.name} className="border-b border-gray-100 pb-2">
                      <Link href={item.url} className="flex items-center text-gray-700 hover:text-[#cc0000] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#cc0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/produits#${category.name.toLowerCase()}`}
                  className="block w-full text-center py-2 px-4 bg-gray-100 text-[#cc0000] font-medium rounded-md hover:bg-gray-200 transition-colors"
                >
                  Voir tous les {category.name.toLowerCase()}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/produits" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#cc0000] hover:bg-[#a80000] transition-colors shadow-md hover:shadow-lg"
          >
            Explorer tous nos produits
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#333333] sm:text-4xl">
            Nos services de location
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Découvrez notre gamme complète de véhicules disponibles à la location
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Service 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#cc0000] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14h6" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-[#333333] text-center">Véhicules 9 places</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Idéal pour les voyages en groupe ou les déplacements familiaux.
              </p>
              <div className="mt-4 text-center">
                <Link href="/produits/9-places" className="text-[#cc0000] hover:text-[#a80000] font-medium">
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#cc0000] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-[#333333] text-center">Plateaux porte voiture</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Transport sécurisé de véhicules pour particuliers et professionnels.
              </p>
              <div className="mt-4 text-center">
                <Link href="/produits/plateau" className="text-[#cc0000] hover:text-[#a80000] font-medium">
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#cc0000] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20v-8m0 0L7 14m2-2l2 2" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-[#333333] text-center">Camions déménagement</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Différentes tailles disponibles pour tous vos besoins de déménagement.
              </p>
              <div className="mt-4 text-center">
                <Link href="/produits/camion/camion-déménagement-12m2" className="text-[#cc0000] hover:text-[#a80000] font-medium">
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#cc0000] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h8l4 6h4a1 1 0 001-1v-2a1 1 0 00-1-1h-1" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-[#333333] text-center">Camion benne</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Solution pratique pour l'évacuation de gravats et matériaux.
              </p>
              <div className="mt-4 text-center">
                <Link href="/produits/camion/camion-benne" className="text-[#cc0000] hover:text-[#a80000] font-medium">
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

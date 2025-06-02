import React from 'react';
import Link from 'next/link';

export default function Cta() {
  return (
    <section className="bg-[#cc0000]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Prêt à louer un véhicule ?</span>
          <span className="block text-white">Contactez-nous dès aujourd'hui.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/nous-contacter"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#cc0000] bg-white hover:bg-gray-50"
            >
              Demander un devis
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#a80000] hover:bg-[#950000]"
            >
              Voir nos tarifs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

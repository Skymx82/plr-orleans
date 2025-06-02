"use client";

import dynamic from 'next/dynamic';

// Import dynamique des composants pour éviter les problèmes de SSR avec Framer Motion
const Hero = dynamic(() => import('../components/home/hero/Hero'), { ssr: false });
const Services = dynamic(() => import('../components/home/services/Services'), { ssr: false });
const Cta = dynamic(() => import('../components/home/cta/Cta'), { ssr: false });
const Equipment = dynamic(() => import('../components/home/equipment/Equipment'), { ssr: false });
const Contact = dynamic(() => import('../components/home/contact/Contact'), { ssr: false });

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Services />
      <Cta />
      <Equipment />
      <Contact />
    </div>
  );
}

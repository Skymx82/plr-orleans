"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

// Images réelles du dossier avec titres professionnels
const images = [
  {
    src: '/images/vehicule9.jpg',
    alt: 'Véhicules 9 places',
    title: 'Véhicules 9 places',
    description: 'Idéal pour les voyages en groupe'
  },
  {
    src: '/images/remorque-transport-voiture.jpg',
    alt: 'Plateaux porte voiture',
    title: 'Plateaux porte voiture',
    description: 'Transport sécurisé de véhicules'
  },
  {
    src: '/images/remorque-transport-voiture2.jpg',
    alt: 'Plateaux porte voiture',
    title: 'Plateaux porte voiture',
    description: 'Solution fiable pour le transport'
  },
  {
    src: '/images/camion-tranport-voiture.jpg',
    alt: 'Camions porte voiture',
    title: 'Camions porte voiture',
    description: 'Pour le transport professionnel de véhicules'
  },
  {
    src: '/images/camion-tranport-voiture2.jpg',
    alt: 'Camions déménagement',
    title: 'Camions déménagement',
    description: 'Solution complète pour tous vos déménagements'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  // Effet pour faire défiler automatiquement les images sauf si survolé
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, [isHovered]);

  // Animation quand la section est visible
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variantes d'animation pour les images
  const imageVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
      filter: 'blur(8px)'
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] },
        filter: { duration: 0.8 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      filter: 'blur(8px)',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.5 },
        filter: { duration: 0.4 }
      }
    })
  };

  // Variantes pour les textes d'overlay
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: 'easeOut'
      }
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  // Variantes pour l'animation globale
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Gestion des flèches de navigation
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Effet de parallaxe au survol
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const element = ref.current as HTMLDivElement;
    const { left, top, width, height } = element.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    controls.start({
      x: x * 20, // Ajustez l'amplitude du mouvement
      y: y * 20,
      transition: { type: 'spring', stiffness: 150, damping: 20 }
    });
  };

  return (
    <section 
      className="relative bg-white overflow-hidden min-h-[90vh] flex items-center"
      ref={ref}
    >
      <motion.div 
        className="max-w-7xl mx-auto w-full relative z-10"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texte à gauche */}
          <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-0 z-10 relative">
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-[#333333] sm:text-5xl md:text-6xl"
              variants={textVariants}
              custom={0}
            >
              <motion.span 
                className="block xl:inline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Location de véhicules
              </motion.span>{' '}
              <motion.span 
                className="block text-[#cc0000] xl:inline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                pour tous vos besoins
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              variants={textVariants}
              custom={1}
            >
              PLR ORLEANS vous propose une large gamme de véhicules à la location : véhicules 9 places, plateaux porte voiture, camions déménagement et bien plus encore. Contactez-nous pour un devis personnalisé.
            </motion.p>
            
            <motion.div 
              className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              variants={textVariants}
              custom={2}
            >
              <div className="rounded-md shadow">
                <a
                  href="/produits"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#cc0000] hover:bg-[#a80000] md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
                >
                  Voir nos véhicules
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/nous-contacter"
                  className="w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md text-[#cc0000] bg-white hover:bg-gray-50 border-[#cc0000] md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
                >
                  Nous contacter
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Carrousel à droite */}
          <div 
            className="relative h-80 sm:h-96 md:h-[400px] lg:h-[480px] w-full overflow-hidden rounded-lg shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
            
            {/* Images */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
                style={{ zIndex: 1 }}
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover"
                  priority
                  unoptimized
                />
                
                {/* Texte d'overlay */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 z-50 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.h3 
                    className="text-3xl font-bold mb-2 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]"
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {images[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    className="text-xl font-medium text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]"
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {images[currentIndex].description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Effet de particules/lumière */}
            <motion.div 
              className="absolute inset-0 z-0 opacity-40 pointer-events-none"
              animate={controls}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]">
              </div>
            </motion.div>

            {/* Contrôles du carrousel */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#cc0000] w-6' : 'bg-white bg-opacity-70 hover:bg-opacity-100'}`}
                  aria-label={`Aller à l'image ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Flèches de navigation */}
            <motion.button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 focus:outline-none z-20 transition-all duration-300"
              aria-label="Image précédente"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 focus:outline-none z-20 transition-all duration-300"
              aria-label="Image suivante"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

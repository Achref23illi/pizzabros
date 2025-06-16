import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GooeyText } from './ui/gooey-text-morphing';
import DeliveryOptions from './DeliveryLogos';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1000], [0, -200]);
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsVideoLoaded(true);
    const handleError = () => setIsVideoLoaded(false);

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Video Background */}
      <motion.video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-110 sm:scale-100"
        style={{ y: videoY }}
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source 
          src="https://videos.pexels.com/video-files/7172269/7172269-uhd_2560_1440_25fps.mp4"
          type="video/mp4" 
        />
      </motion.video>

      {/* Dark Overlay - No gradients */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center py-20 lg:py-0"
        style={{ y: contentY }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              {/* Location Badge - No icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-block"
              >
                <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 text-orange-400 text-sm font-medium">
                  Montréal, Québec
                </div>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4 text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-5xl sm:text-6xl md:text-8xl font-display font-black text-white leading-none"
                >
                  PIZZA
                </motion.h1>

                {/* Gooey Text on BROS */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="h-16 sm:h-20 md:h-24"
                >
                  <GooeyText
                    texts={["BROS", "FRÈRES", "BROS", "FAMILLE"]}
                    morphTime={2}
                    cooldownTime={3}
                    className="h-full"
                    textClassName="text-5xl sm:text-6xl md:text-8xl font-display font-black text-orange-500"
                  />
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                La perfection du four à bois rencontre l'âme urbaine de Montréal. Chaque part raconte une histoire de passion, de tradition et de qualité sans compromis.
              </motion.p>

              {/* Delivery Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="pt-4"
              >
                <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Commandez maintenant via:</h3>
                <DeliveryOptions />
              </motion.div>
            </motion.div>

            {/* Right Column - Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="hidden lg:block space-y-6"
            >
              {/* Hours Card - No icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 group hover:bg-white/15 transition-all duration-300"
              >
                <div>
                  <h3 className="text-white font-semibold text-lg">Ouvert Quotidiennement</h3>
                  <p className="text-gray-400">11h00 - 23h00</p>
                </div>
              </motion.div>

              {/* Phone Card - No icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 group hover:bg-white/15 transition-all duration-300"
              >
                <div>
                  <h3 className="text-white font-semibold text-lg">Appelez-nous</h3>
                  <p className="text-gray-400">(514) 123-PIZZA</p>
                </div>
              </motion.div>

              {/* Rating Card - No icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 group hover:bg-white/15 transition-all duration-300"
              >
                <div>
                  <h3 className="text-white font-semibold text-lg">4.9 Étoiles</h3>
                  <p className="text-gray-400">D'après plus de 2 450 avis</p>
                </div>
              </motion.div>

              {/* Special Offer - No gradient */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-2xl p-6"
              >
                <div className="text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Spécial du Jour</h3>
                  <p className="text-orange-400 font-semibold">Livraison Gratuite pour Commandes 25$+</p>
                  <p className="text-gray-400 text-sm mt-1">Valide jusqu'à minuit</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Info Cards - Horizontal Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="lg:hidden mt-8 -mx-4 px-4"
          >
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
              {/* Hours Card */}
              <div className="flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[200px]">
                <h3 className="text-white font-semibold text-sm">Ouvert Quotidiennement</h3>
                <p className="text-gray-400 text-xs">11h00 - 23h00</p>
              </div>

              {/* Phone Card */}
              <div className="flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[200px]">
                <h3 className="text-white font-semibold text-sm">Appelez-nous</h3>
                <p className="text-gray-400 text-xs">(514) 123-PIZZA</p>
              </div>

              {/* Rating Card */}
              <div className="flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[200px]">
                <h3 className="text-white font-semibold text-sm">4.9 Étoiles</h3>
                <p className="text-gray-400 text-xs">Plus de 2 450 avis</p>
              </div>

              {/* Special Offer */}
              <div className="flex-shrink-0 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-xl p-4 min-w-[200px]">
                <h3 className="text-white font-bold text-sm">Spécial du Jour</h3>
                <p className="text-orange-400 font-semibold text-xs">Livraison Gratuite 25$+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - No icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/60 cursor-pointer group"
        >
          <span className="text-sm mb-2 group-hover:text-white transition-colors">Défilez pour plus</span>
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-40"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Loading Overlay */}
      {!isVideoLoaded && (
        <motion.div
          className="absolute inset-0 bg-black z-30 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isVideoLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.img
              src="/logo.png"
              alt="Pizza Bros Logo"
              className="h-20 w-auto mx-auto mb-4"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-white text-lg">Chargement de Pizza Bros...</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection; 
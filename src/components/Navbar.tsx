import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: '(514) 555-PIZZA', label: 'Appelez-nous' },
    { icon: MapPin, text: 'Centre-ville Montréal', label: 'Localisation' },
    { icon: Clock, text: 'Ouvert 24h/24', label: 'Heures' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-display text-xl font-bold">PB</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-xl font-bold text-white">Pizza Bros</h1>
                <p className="text-xs text-orange-400 font-body">Montreal</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative text-white font-medium font-body hover:text-orange-400 transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Contact Info (Desktop) */}
            <div className="hidden xl:flex items-center space-x-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <info.icon className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-body">{info.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="hidden lg:block btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commander
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-white hover:text-orange-400 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="container mx-auto px-6 py-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-4 mb-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="block text-white font-medium font-body hover:text-orange-400 transition-colors duration-300 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      className="flex items-center space-x-3 text-white/80"
                    >
                      <info.icon className="w-4 h-4 text-orange-400" />
                      <div>
                        <p className="text-sm font-body">{info.text}</p>
                        <p className="text-xs text-white/60">{info.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="w-full btn-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Commander
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 
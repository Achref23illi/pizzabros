import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localisation",
      content: "123 Rue Saint-Catherine, Montreal, QC H3B 1A7"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "(514) 555-PIZZA"
    },
    {
      icon: Mail,
      title: "Courriel",
      content: "hello@pizzabros.ca"
    },
    {
      icon: Clock,
      title: "Heures",
      content: "24h/24 - Toujours Ouvert"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "Menu", href: "#menu" },
    { name: "À Propos", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Carrières", href: "#" },
    { name: "Traiteur", href: "#" }
  ];

  return (
    <footer className="bg-black border-t border-zinc-800 relative">
      <div className="absolute inset-0 grid-pattern-sm opacity-5" />
      
      <div className="container mx-auto px-6 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-display text-xl font-bold">PB</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Pizza Bros</h3>
                <p className="text-orange-400 text-sm font-body">Montreal</p>
              </div>
            </div>
            
            <p className="text-gray-400 font-body leading-relaxed">
              La destination pizza urbaine de choix de Montréal. Ingrédients authentiques, saveurs innovantes et l'esprit de la ville dans chaque bouchée.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-zinc-900 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-heading text-lg font-semibold text-white">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-orange-400 font-body transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <h4 className="font-heading text-lg font-semibold text-white">Informations de Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <info.icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h5 className="font-body font-medium text-white text-sm mb-1">{info.title}</h5>
                    <p className="text-gray-400 text-sm font-body">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-zinc-800 pt-12 mb-12"
        >
          <div className="max-w-md">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Restez Informé</h4>
            <p className="text-gray-400 font-body mb-6">Recevez les dernières nouvelles, offres spéciales et nouveaux éléments du menu dans votre boîte de réception.</p>
            
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Entrez votre courriel"
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-6"
              >
                S'abonner
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm font-body">
            © {currentYear} Pizza Bros Montréal. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ color: "#ff6b35" }}
              className="text-gray-400 hover:text-orange-400 font-body transition-colors duration-300"
            >
              Politique de Confidentialité
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#ff6b35" }}
              className="text-gray-400 hover:text-orange-400 font-body transition-colors duration-300"
            >
              Conditions d'Utilisation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
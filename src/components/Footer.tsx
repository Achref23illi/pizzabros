import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const contactInfo = [
    {
      title: "Adresse",
      content: "123 Rue Saint-Laurent, Montréal, QC H2X 2T5"
    },
    {
      title: "Téléphone",
      content: "(514) 555-PIZZA"
    },
    {
      title: "Email",
      content: "info@pizzabros.ca"
    },
    {
      title: "Heures",
      content: "Lun-Dim: 11h00 - 23h00"
    }
  ];

  const socialLinks = [
    { name: "Instagram", href: "#", label: "Instagram" },
    { name: "Facebook", href: "#", label: "Facebook" },
    { name: "Twitter", href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "Menu", href: "#menu" },
    { name: "À Propos", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Carrières", href: "#careers" }
  ];

  const legalLinks = [
    { name: "Politique de Confidentialité", href: "#privacy" },
    { name: "Conditions d'Utilisation", href: "#terms" },
    { name: "Mentions Légales", href: "#legal" }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Pizza Bros Logo" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-display font-bold text-white">Pizza Bros</h3>
                <p className="text-xs text-gray-400">Montréal</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              La meilleure pizza artisanale de Montréal, préparée avec passion et des ingrédients frais.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <span className="text-white text-xs font-medium">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg">Légal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start space-x-3">
                  <div>
                    <p className="text-xs text-orange-400 font-medium">{info.title}</p>
                    <p className="text-gray-400 text-sm">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Pizza Bros Montréal. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm">
              Fait avec ❤️ à Montréal
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }} />
      </div>
    </footer>
  );
};

export default Footer; 
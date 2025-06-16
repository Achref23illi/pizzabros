import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const pizzaSizes = [
    { id: 'small', name: 'Petite', size: '10"', price: 12.99 },
    { id: 'medium', name: 'Moyenne', size: '12"', price: 16.99 },
    { id: 'large', name: 'Grande', size: '14"', price: 20.99 },
    { id: 'xlarge', name: 'Très Grande', size: '16"', price: 24.99 },
  ];

  const toppings = [
    { id: 'cheese', name: 'Fromage Extra', price: 2.50 },
    { id: 'pepperoni', name: 'Pepperoni', price: 3.00 },
    { id: 'mushrooms', name: 'Champignons', price: 2.00 },
    { id: 'onions', name: 'Oignons', price: 1.50 },
    { id: 'peppers', name: 'Poivrons', price: 2.00 },
    { id: 'olives', name: 'Olives', price: 2.00 },
  ];

  const calculateTotal = () => {
    const sizePrice = pizzaSizes.find(s => s.id === selectedSize)?.price || 0;
    return (sizePrice * quantity).toFixed(2);
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="absolute inset-0 flex items-center justify-center p-4 overflow-y-auto">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl h-[85vh] max-h-[800px] overflow-hidden rounded-2xl my-auto"
            >
            <div className="relative w-full h-full bg-black">
              {/* Video Background */}
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                autoPlay
                muted
                loop
                playsInline
              >
                <source 
                  src="https://videos.pexels.com/video-files/30627970/13111089_1440_2560_25fps.mp4"
                  type="video/mp4" 
                />
              </video>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    Commander en Ligne
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Pizza Selection */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Choisissez votre taille
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {pizzaSizes.map((size) => (
                            <button
                              key={size.id}
                              onClick={() => setSelectedSize(size.id)}
                              className={`p-4 rounded-xl border-2 transition-all ${
                                selectedSize === size.id
                                  ? 'border-orange-500 bg-orange-500/20'
                                  : 'border-white/20 hover:border-white/40'
                              }`}
                            >
                              <div className="text-white font-semibold">{size.name}</div>
                              <div className="text-gray-400 text-sm">{size.size}</div>
                              <div className="text-orange-400 font-bold mt-1">{size.price}$</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Garnitures supplémentaires
                        </h3>
                        <div className="space-y-2">
                          {toppings.map((topping) => (
                            <label
                              key={topping.id}
                              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <input
                                  type="checkbox"
                                  className="w-5 h-5 rounded text-orange-500 bg-white/10 border-white/30 focus:ring-orange-500"
                                />
                                <span className="text-white">{topping.name}</span>
                              </div>
                              <span className="text-orange-400 font-semibold">+{topping.price}$</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Order Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Détails de la commande
                        </h3>
                        
                        {/* Quantity */}
                        <div className="mb-6">
                          <label className="text-white font-medium mb-2 block">Quantité</label>
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
                            >
                              -
                            </button>
                            <span className="text-2xl font-bold text-white w-12 text-center">
                              {quantity}
                            </span>
                            <button
                              onClick={() => setQuantity(quantity + 1)}
                              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Special Instructions */}
                        <div className="mb-6">
                          <label className="text-white font-medium mb-2 block">
                            Instructions spéciales
                          </label>
                          <textarea
                            value={specialInstructions}
                            onChange={(e) => setSpecialInstructions(e.target.value)}
                            placeholder="Allergies, préférences de cuisson, etc."
                            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors resize-none h-24"
                          />
                        </div>

                        {/* Delivery Info */}
                        <div className="space-y-4 p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Sous-total</span>
                            <span className="text-white font-semibold">{calculateTotal()}$</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Livraison</span>
                            <span className="text-white font-semibold">Gratuite</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Taxes</span>
                            <span className="text-white font-semibold">
                              {(parseFloat(calculateTotal()) * 0.15).toFixed(2)}$
                            </span>
                          </div>
                          <div className="border-t border-white/10 pt-4">
                            <div className="flex items-center justify-between">
                              <span className="text-white font-semibold text-lg">Total</span>
                              <span className="text-2xl font-bold text-orange-500">
                                {(parseFloat(calculateTotal()) * 1.15).toFixed(2)}$
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={onClose}
                      className="flex-1 px-6 py-3 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                    >
                      Continuer à magasiner
                    </button>
                    <button className="flex-1 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all">
                      Passer la commande
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default OrderModal;
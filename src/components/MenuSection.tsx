import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';

const MenuSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  // 3D scroll animations
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);

  const menuItems = [
    {
      id: 1,
      name: "Margherita Classica",
      description: "San Marzano tomatoes, fresh mozzarella, fresh basil, extra virgin olive oil",
      price: "$18",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
      category: "Classic",
      badges: ["popular"],
      rating: 4.9,
      prepTime: "12 min",
      gradient: "from-red-500/30 to-green-500/30"
    },
    {
      id: 2,
      name: "Pepperoni Supreme",
      description: "Premium pepperoni, mozzarella, marinara sauce, oregano, spicy oil",
      price: "$22",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop",
      category: "Meat Lovers",
      badges: ["spicy"],
      rating: 4.8,
      prepTime: "14 min",
      gradient: "from-red-600/40 to-orange-500/40"
    },
    {
      id: 3,
      name: "Truffle Mushroom",
      description: "Wild mushrooms, truffle oil, fontina cheese, caramelized onions, arugula",
      price: "$26",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
      category: "Gourmet",
      badges: ["premium"],
      rating: 4.9,
      prepTime: "16 min",
      gradient: "from-purple-600/30 to-amber-500/30"
    },
    {
      id: 4,
      name: "Veggie Garden",
      description: "Roasted vegetables, goat cheese, pesto, pine nuts, sun-dried tomatoes",
      price: "$20",
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&h=600&fit=crop",
      category: "Vegetarian",
      badges: ["vegan", "healthy"],
      rating: 4.7,
      prepTime: "13 min",
      gradient: "from-green-500/40 to-emerald-400/40"
    },
    {
      id: 5,
      name: "BBQ Chicken",
      description: "Grilled chicken, BBQ sauce, red onions, cilantro, smoked mozzarella",
      price: "$24",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600",
      category: "Specialty",
      badges: ["popular"],
      rating: 4.8,
      prepTime: "15 min",
      gradient: "from-orange-600/40 to-red-500/40"
    },
    {
      id: 6,
      name: "Prosciutto Fig",
      description: "Prosciutto di Parma, fresh figs, gorgonzola, honey drizzle, arugula",
      price: "$28",
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800&h=600&fit=crop",
      category: "Premium",
      badges: ["premium", "seasonal"],
      rating: 4.9,
      prepTime: "14 min",
      gradient: "from-pink-500/30 to-purple-500/30"
    }
  ];

  // Initialize flipped states for all cards
  const [flippedCards, setFlippedCards] = useState<boolean[]>(Array(menuItems.length).fill(false));

  const toggleFlip = (index: number) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'spicy': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'vegan': 
      case 'healthy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'popular': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'premium': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'seasonal': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="menu" 
      className="py-32 bg-black relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"
          style={{ y: y, rotateX: rotateX }}
        />
        <motion.div 
          className="absolute inset-0 grid-pattern opacity-5"
          style={{ y: y }}
        />
      </div>

      {/* Floating Pizza Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-64 h-64 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${
              i % 3 === 0 ? 'from-orange-500/30 to-red-500/30' :
              i % 3 === 1 ? 'from-yellow-500/30 to-orange-500/30' :
              'from-red-500/30 to-pink-500/30'
            }`}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
         {/* 3D Section Header */}
         <motion.div
           initial={{ opacity: 0, z: -200, rotateX: 45 }}
           animate={isInView ? { opacity: 1, z: 0, rotateX: 0 } : {}}
           transition={{ duration: 1.2, ease: "easeOut" }}
           style={{ 
             transformStyle: 'preserve-3d',
             scale: scale,
             rotateX: rotateX
           }}
           className="text-center mb-24"
         >
           <motion.h2
             initial={{ opacity: 0, y: 50, z: -150 }}
             animate={isInView ? { opacity: 1, y: 0, z: 0 } : {}}
             transition={{ delay: 0.3, duration: 1 }}
             className="font-display text-5xl md:text-8xl font-black text-white mb-8"
             style={{ 
               transform: 'translateZ(100px)',
               textShadow: '0 0 30px rgba(255, 107, 53, 0.5), 0 10px 20px rgba(0, 0, 0, 0.8)'
             }}
           >
             PIZZA
             <span className="block text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
               UNIVERSE
             </span>
           </motion.h2>
          
           <motion.p
             initial={{ opacity: 0, y: 30, z: -100 }}
             animate={isInView ? { opacity: 1, y: 0, z: 0 } : {}}
             transition={{ delay: 0.7, duration: 0.8 }}
             className="text-2xl text-gray-300 max-w-3xl mx-auto font-body leading-relaxed"
             style={{ transform: 'translateZ(75px)' }}
           >
             Authentic wood-fired pizzas crafted with premium ingredients and traditional techniques.
           </motion.p>
        </motion.div>

        {/* 3D Interactive Pizza Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ 
                opacity: 0, 
                z: -500, 
                rotateY: 45,
                scale: 0.5
              }}
              animate={isInView ? { 
                opacity: 1, 
                z: 0, 
                rotateY: 0,
                scale: 1
              } : {}}
              transition={{ 
                delay: 0.8 + index * 0.2, 
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                bounce: 0.2
              }}
              whileHover={{ 
                scale: 1.05,
                z: 50,
                transition: { 
                  duration: 0.4,
                  ease: "easeOut"
                }
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center'
              }}
              className="group cursor-pointer"
              onClick={() => toggleFlip(index)}
            >
              <motion.div 
                className="relative h-full w-full"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Front of Card */}
                <motion.div 
                  className="absolute inset-0 h-full w-full bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Pizza Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-black/70 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/20 shadow-xl">
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full border border-white/20 shadow-xl">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 space-y-4">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {item.name}
                    </h3>
                    
                    <p className="text-gray-300 font-body leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="pt-2 text-center text-sm text-gray-400">
                      Click to see details
                    </div>
                  </div>
                </motion.div>
                
                {/* Back of Card */}
                <motion.div 
                  className="absolute inset-0 h-full w-full bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30`} />
                  
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
                    <h3 className="font-display text-3xl font-bold text-white mb-6">
                      {item.name}
                    </h3>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-black text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        {item.price}
                      </span>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <p className="text-gray-300 font-body leading-relaxed text-lg">
                        {item.description}
                      </p>
                      
                      <div className="flex justify-center space-x-4">
                        <div className="text-white">
                          <span className="block text-lg font-bold">{item.rating}</span>
                          <span className="text-sm text-gray-400">Rating</span>
                        </div>
                        
                        <div className="text-white">
                          <span className="block text-lg font-bold">{item.prepTime}</span>
                          <span className="text-sm text-gray-400">Prep Time</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3 mt-auto">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getBadgeColor(badge)}`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-6 text-center text-sm text-gray-400">
                      Click to flip back
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection; 
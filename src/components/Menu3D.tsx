import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'framer-motion';

const Menu3D = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  // Smooth spring animations for scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 3D parallax transforms
  const y = useTransform(smoothProgress, [0, 1], [300, -300]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1, 0.8]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [-45, 0, 45]);
  const z = useTransform(smoothProgress, [0, 0.5, 1], [-1000, 0, -500]);

  const pizzaItems = [
    {
      id: 1,
      name: "Margherita Suprême",
      description: "Mozzarella fraîche, tomates San Marzano, basilic, huile d'olive",
      price: "19,99$",
      image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradient: "from-red-500 to-orange-500",
      zIndex: 6
    },
    {
      id: 2,
      name: "Festin au Pepperoni",
      description: "Double pepperoni, mozzarella, sauce marinara épicée",
      price: "22,99$",
      image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradient: "from-orange-500 to-red-600",
      zIndex: 5
    },
    {
      id: 3,
      name: "Quatre Fromages",
      description: "Mozzarella, gorgonzola, parmesan, mélange de ricotta",
      price: "24,99$",
      image: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradient: "from-yellow-400 to-orange-500",
      zIndex: 4
    },
    {
      id: 4,
      name: "Délice Végétarien",
      description: "Poivrons, champignons, olives, oignons, tomates fraîches",
      price: "20,99$",
      image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradient: "from-green-500 to-emerald-600",
      zIndex: 3
    },
    {
      id: 5,
      name: "Poulet BBQ",
      description: "Poulet grillé, sauce BBQ, oignons rouges, coriandre",
      price: "23,99$",
      image: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradient: "from-amber-500 to-orange-600",
      zIndex: 2
    },
    {
      id: 6,
      name: "Paradis Hawaïen",
      description: "Jambon, ananas, mozzarella, sauce douce et acidulée",
      price: "21,99$",
      image: "https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradient: "from-yellow-400 to-pink-500",
      zIndex: 1
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      ref={containerRef}
      id="menu" 
      className="min-h-screen bg-black relative overflow-hidden py-20"
      style={{ perspective: '2000px' }}
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Pizza particle effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 3D Title */}
        <motion.div
          className="text-center mb-32"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(${z}px) rotateY(${rotateY}deg)`,
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-6xl md:text-8xl font-black text-white mb-6"
            style={{
              textShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 80px rgba(255,107,53,0.4)'
            }}
          >
            NOS PIZZAS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Fraîchement sorties du four, directement à votre table
          </motion.p>
        </motion.div>

        {/* 3D Pizza Cards Container */}
        <motion.div
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateY(${y}px) scale(${scale})`,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl mx-auto">
            {pizzaItems.map((pizza, index) => {
              const cardY = useTransform(
                smoothProgress,
                [0, 0.5, 1],
                [800 + (index * 100), 0, -400 - (index * 50)]
              );
              const cardRotateX = useTransform(
                smoothProgress,
                [0, 0.5, 1],
                [45, 0, -20]
              );
              const cardZ = useTransform(
                smoothProgress,
                [0, 0.3, 0.7, 1],
                [-2000 + (index * 200), -500, 0, -1000]
              );

              return (
                <motion.div
                  key={pizza.id}
                  className="relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `translateY(${cardY}px) translateZ(${cardZ}px) rotateX(${cardRotateX}deg)`,
                    zIndex: hoveredIndex === index ? 50 : pizza.zIndex,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ delay: 0.1 * index, duration: 1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{
                      scale: 1.3,
                      z: 300,
                      rotateY: 15,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Pizza Card */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${pizza.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
                      
                      {/* Pizza Image */}
                      <motion.div 
                        className="relative h-80 overflow-hidden"
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={pizza.image}
                          alt={pizza.name}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Floating Price Tag */}
                        <motion.div
                          className="absolute top-4 right-4 bg-black/90 backdrop-blur-xl px-6 py-3 rounded-full"
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, -10, 10, 0],
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <span className="text-2xl font-bold text-white">
                            {pizza.price}
                          </span>
                        </motion.div>
                      </motion.div>

                      {/* Content */}
                      <div className="relative bg-gradient-to-b from-zinc-900 to-black p-8 -mt-10 z-20">
                        <motion.h3 
                          className="font-display text-3xl font-bold text-white mb-3"
                          whileHover={{ scale: 1.05 }}
                        >
                          {pizza.name}
                        </motion.h3>
                        <p className="text-gray-400 font-body text-lg">
                          {pizza.description}
                        </p>
                        
                      </div>
                    </div>

                    {/* 3D Shadow Effect */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-3xl -z-10 blur-2xl transform translate-y-8 scale-95 opacity-60"
                      style={{
                        transform: `translateZ(-100px) translateY(40px) scale(0.9)`,
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Menu3D;
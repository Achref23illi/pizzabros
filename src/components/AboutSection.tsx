import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Award,
      number: "15+",
      title: "Années d'Excellence",
      description: "Au service de Montréal depuis 2008"
    },
    {
      icon: Users,
      number: "50K+",
      title: "Clients Satisfaits",
      description: "Communauté grandissante chaque jour"
    },
    {
      icon: Clock,
      number: "24/7",
      title: "Toujours Ouvert",
      description: "Pizza fraîche à tout moment"
    },
    {
      icon: MapPin,
      number: "5",
      title: "Emplacements",
      description: "Dans le grand Montréal"
    }
  ];

  const values = [
    {
      title: "Ingrédients Authentiques",
      description: "Nous nous approvisionnons en tomates San Marzano, mozzarella de bufflonne et viandes de première qualité auprès de fournisseurs de confiance.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop"
    },
    {
      title: "Tradition du Four à Bois",
      description: "Nos fours en brique atteignent 480°C, créant la carbonisation parfaite et les saveurs napolitaines authentiques à chaque bouchée.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop"
    },
    {
      title: "Innovation Urbaine",
      description: "Mélanger les techniques traditionnelles avec la scène culinaire diversifiée de Montréal pour créer des saveurs uniques et modernes.",
      image: "https://images.pexels.com/photos/4773769/pexels-photo-4773769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium"
            >
              Notre Histoire
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold text-white"
            >
              Né dans les
              <span className="text-gradient block">Rues de Montréal</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 text-gray-300 font-body leading-relaxed"
            >
              <p className="text-lg">
                Ce qui a commencé comme une petite pizzeria de quartier a évolué en destination pizza urbaine la plus aimée de Montréal. Nous avons passé plus de 15 ans à perfectionner notre art, combinant les techniques traditionnelles italiennes avec l'énergie vibrante de la culture de rue montréalaise.
              </p>
              
              <p>
                Chaque pizza raconte une histoire de passion, de communauté et de recherche acharnée de la perfection. De nos fours à bois à nos ingrédients d'origine locale, nous nous engageons à offrir une expérience authentique qui capture l'esprit de l'Italie d'autrefois et du Montréal moderne.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary">
                Visitez Notre Cuisine
              </button>
              <button className="btn-secondary">
                En Savoir Plus
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src="https://images.unsplash.com/photo-1571066811602-716837d681de?w=800&h=600&fit=crop"
                alt="Pizza Bros Kitchen"
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 card-glass p-6"
            >
              <div className="text-3xl font-display font-bold text-gradient mb-1">2008</div>
              <div className="text-sm text-gray-400">Fondé</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-8 -right-8 card-glass p-6"
            >
              <div className="text-3xl font-display font-bold text-gradient mb-1">#1</div>
              <div className="text-sm text-gray-400">à Montréal</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="card-glass text-center group hover-lift"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-display font-bold text-gradient mb-2">
                {achievement.number}
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm font-body">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-4"
          >
            Ce Qui Nous Rend Différents
          </motion.span>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Nos Valeurs Fondamentales
          </motion.h3>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
              className="group hover-lift"
            >
              <div className="card-glass overflow-hidden h-full">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <motion.img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 font-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
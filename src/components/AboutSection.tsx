import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const achievements = [
    {
      title: "Depuis 2008",
      description: "Servant la communauté montréalaise"
    },
    {
      title: "100K+",
      description: "Pizzas servies avec amour"
    },
    {
      title: "24/7",
      description: "Toujours là pour vos envies"
    },
    {
      title: "4 Locations",
      description: "À travers le Grand Montréal"
    }
  ];

  const values = [
    {
      title: "Qualité Artisanale",
      description: "Chaque pizza est préparée à la main avec des ingrédients frais et locaux"
    },
    {
      title: "Tradition & Innovation",
      description: "Recettes traditionnelles avec une touche moderne montréalaise"
    },
    {
      title: "Communauté",
      description: "Plus qu'une pizzeria, nous sommes une famille"
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-6">
            Notre Histoire
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Depuis 2008, Pizza Bros apporte l'authenticité de la pizza artisanale aux
            <span className="text-orange-500 block">Rues de Montréal</span>
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-white">
              De Frères à Légende Locale
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Tout a commencé avec deux frères, une passion pour la pizza authentique, et un rêve de partager leur amour de la bonne nourriture avec Montréal. Ce qui a débuté comme une petite pizzeria familiale est devenu une institution locale bien-aimée.
              </p>
              <p>
                Notre secret? Des ingrédients frais et locaux, des recettes traditionnelles transmises de génération en génération, et une touche d'innovation montréalaise. Chaque pizza raconte une histoire - de notre famille à la vôtre.
              </p>
              <p>
                Aujourd'hui, avec quatre emplacements à travers le Grand Montréal et une équipe de plus de 50 artisans passionnés de la pizza, nous continuons à servir la même qualité et le même amour qui ont fait notre renommée.
              </p>
            </div>
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Découvrir Notre Menu
            </motion.button>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chef préparant une pizza"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.pexels.com/photos/4001871/pexels-photo-4001871.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Four à pizza traditionnel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.pexels.com/photos/7886570/pexels-photo-7886570.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Pizza fraîchement préparée"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Ambiance pizzeria"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-display font-bold text-orange-500 mb-2">
                {achievement.title}
              </div>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-display font-bold text-white text-center mb-12">
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-zinc-900 border border-white/10 rounded-2xl p-8 text-center"
              >
                <h4 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection; 
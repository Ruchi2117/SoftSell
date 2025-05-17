import React from 'react';
import { SectionProps } from '@/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollObserver from './animations/ScrollObserver';

const HeroSection: React.FC<SectionProps> = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className={`relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden ${className}`}>
      {/* Animated background layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-x"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/20 to-transparent animate-gradient-pulse"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-gradient-radial"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
      />

      {/* Animated circles with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-white/20 to-blue-300/20 rounded-full blur-3xl animate-float"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-indigo-300/20 rounded-full blur-3xl animate-float rotating-gradient"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '150%']) }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-bl from-indigo-500/20 to-purple-300/20 rounded-full blur-3xl animate-float animated-gradient"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '80%']) }}
        />
      </motion.div>

      {/* Additional decorative gradients */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-3xl animated-gradient"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '120%']) }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-400/30 to-transparent rounded-full blur-3xl rotating-gradient"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '70%']) }}
      />

      <div className="relative max-w-4xl mx-auto z-10 py-8">
        <ScrollObserver animation="fade-up">
          <h2 className="text-4xl sm:text-7xl font-bold mb-4 text-white tracking-wider bg-clip-text drop-shadow-lg">
            SoftSell
          </h2>
          <h1 className="text-2xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Get Cash for Your Unused Software Licenses
          </h1>
        </ScrollObserver>

        <ScrollObserver animation="fade-up" delay={0.2}>
          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-white drop-shadow-lg">
            Whether you're downsizing, switching tools, or have extra licenses — turn your unused software into immediate cash. Fast, legal, and secure.
          </p>
        </ScrollObserver>

        <ScrollObserver animation="fade-up" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105 w-full sm:w-auto text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sell My Licenses
            </motion.button>
            <motion.button
              className="bg-white/90 hover:bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105 w-full sm:w-auto text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
            </motion.button>
          </div>
        </ScrollObserver>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <ScrollObserver animation="fade-up" delay={0.6}>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20">
              <h3 className="font-semibold text-white text-xl mb-3 drop-shadow-lg">Business Downsizing?</h3>
              <p className="text-white/90 text-base drop-shadow">Convert excess software licenses into immediate cash flow</p>
            </div>
          </ScrollObserver>

          <ScrollObserver animation="fade-up" delay={0.7}>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20">
              <h3 className="font-semibold text-white text-xl mb-3 drop-shadow-lg">Extra Office Licenses?</h3>
              <p className="text-white/90 text-base drop-shadow">Get top dollar for Microsoft Office and other enterprise software</p>
            </div>
          </ScrollObserver>

          <ScrollObserver animation="fade-up" delay={0.8}>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20">
              <h3 className="font-semibold text-white text-xl mb-3 drop-shadow-lg">Unused Tools?</h3>
              <p className="text-white/90 text-base drop-shadow">Sell licenses for tools and software you no longer need</p>
            </div>
          </ScrollObserver>
        </div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/0 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

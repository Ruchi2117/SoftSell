import React from 'react';
import { SectionProps } from '@/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollObserver from './animations/ScrollObserver';

const HowItWorks: React.FC<SectionProps> = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['5%', '0%']);

  return (
    <motion.section
      className={`relative min-h-[85vh] glass-container ${className}`}
      style={{ opacity, y }}
      id="how-it-works"
    >
      {/* Background animations */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial opacity-10 pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="section-content">
        <ScrollObserver animation="fade-up">
          <div className="relative inline-block mx-auto">
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 rounded-lg blur opacity-20 pointer-events-none"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.15, 0.2, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 relative animate-gradient-x">
              <span className="absolute inset-[-0.5px] blur-[2px] opacity-20 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-[pulse_3s_ease-in-out_infinite]">
                How It Works
              </span>
              How It Works
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-12 text-center max-w-3xl mx-auto">
            Our streamlined process helps you sell your software licenses safely and quickly, with payment in as little as 24 hours.
          </p>
        </ScrollObserver>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <ScrollObserver animation="fade-up" delay={0.2}>
            <motion.div
              className="glass-card group h-full p-6 rounded-xl relative overflow-hidden hover:-translate-y-1 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="text-4xl mb-4 bg-blue-100 dark:bg-blue-900/50 w-16 h-16 flex items-center justify-center rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">📤</div>
              </motion.div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white transition-all duration-300 group-hover:translate-x-1">1. Submit Your Licenses</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4 transition-all duration-300 group-hover:translate-x-1">Upload your license details through our secure form. We accept most major software licenses including:</p>
              <ul className="text-gray-600 dark:text-gray-400 text-base list-disc list-inside space-y-2">
                <li className="transition-all duration-300 group-hover:translate-x-2">Microsoft Office</li>
                <li className="transition-all duration-300 group-hover:translate-x-2">Adobe Creative Suite</li>
                <li className="transition-all duration-300 group-hover:translate-x-2">Enterprise Software</li>
                <li className="transition-all duration-300 group-hover:translate-x-2">Development Tools</li>
              </ul>
            </motion.div>
          </ScrollObserver>

          <ScrollObserver animation="fade-up" delay={0.3}>
            <motion.div
              className="glass-card group h-full p-6 rounded-xl relative overflow-hidden hover:-translate-y-1 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="text-4xl mb-4 bg-blue-100 dark:bg-blue-900/50 w-16 h-16 flex items-center justify-center rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">💰</div>
              </motion.div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white transition-all duration-300 group-hover:translate-x-1">2. Get Your Quote</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4 transition-all duration-300 group-hover:translate-x-1">Receive a competitive quote within hours. Our valuation considers:</p>
              <ul className="text-gray-600 dark:text-gray-400 text-base list-disc list-inside space-y-2">
                <li className="transition-all duration-300 group-hover:translate-x-2">Current market value</li>
                <li className="transition-all duration-300 group-hover:translate-x-2">License duration</li>
                <li className="transition-all duration-300 group-hover:translate-x-2">Software version</li>
                <li className="transition-all duration-300 group-hover:translate-x-2">Transfer conditions</li>
              </ul>
            </motion.div>
          </ScrollObserver>

          <ScrollObserver animation="fade-up" delay={0.4}>
            <motion.div
              className="glass-card group h-full p-6 rounded-xl relative overflow-hidden hover:-translate-y-1 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="text-4xl mb-4 bg-blue-100 dark:bg-blue-900/50 w-16 h-16 flex items-center justify-center rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">✅</div>
              </motion.div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white transition-all duration-300 group-hover:translate-x-1">3. Get Paid Fast</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4 transition-all duration-300 group-hover:translate-x-1">Accept our offer and receive payment quickly. We offer:</p>
              <ul className="text-gray-600 dark:text-gray-400 text-base list-disc list-inside space-y-2">
                <li className="transition-all duration-300 group-hover:translate-x-2">Same-day processing</li>
                <li className="transition-all duration-300 group-hover:translate-x-2">Secure transactions</li>
                <li className="transition-all duration-300 group-hover:translate-x-2">Multiple payment methods</li>
                <li className="transition-all duration-300 group-hover:translate-x-2">Clear documentation</li>
              </ul>
            </motion.div>
          </ScrollObserver>
        </div>

        <ScrollObserver animation="fade-up" delay={0.5}>
          <motion.div
            className="glass-card p-8 text-center rounded-xl shadow-xl relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <p className="text-xl text-gray-900 dark:text-white mb-6 relative z-[1]">
              <span className="font-bold">Ready to sell your licenses?</span> Our team is here to help you through every step.
            </p>
            <motion.button
              className="btn-primary relative z-[1]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Now
            </motion.button>
          </motion.div>
        </ScrollObserver>
      </div>

      {/* Bottom fade for smooth transition */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0.5, 1], [1, 0]) }}
      />
    </motion.section>
  );
};

export default HowItWorks;

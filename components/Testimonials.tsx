import React from 'react';
import { SectionProps } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "SoftSell made it super easy to get rid of our unused licenses. Highly recommended!",
    author: "Jane Doe",
    role: "IT Manager",
    company: "TechCorp",
    image: "/1.jpg"
  },
  {
    quote: "Quick, transparent, and professional. Will use again!",
    author: "John Smith",
    role: "Ops Head",
    company: "DevSolutions",
    image: "/2.jpg"
  }
];

const Testimonials: React.FC<SectionProps> = ({ className = '' }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section className="relative glass-container py-16" id="testimonials">
      {/* Background animations */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial opacity-10"
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 rounded-lg blur opacity-20"
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
            <motion.h2
              className="relative text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-x"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Customers Say
            </motion.h2>
          </div>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join hundreds of satisfied customers who have successfully monetized their unused software licenses.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="glass-card p-6 relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.005, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="flex flex-col h-full">
                <motion.div
                  className="text-3xl text-blue-600 dark:text-blue-400 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  "
                </motion.div>
                <motion.p
                  className="text-base text-gray-600 dark:text-gray-300 italic mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {testimonial.quote}
                </motion.p>
                <motion.div
                  className="mt-auto flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-blue-600/20"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 glass-card bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center max-w-3xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20"
            animate={{
              x: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.p
            className="text-lg text-white mb-4 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Ready to join our satisfied customers?
            </motion.span>
            <br />
            Get your license valuation today.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-50 transition relative z-10"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your License Valuation
          </motion.button>
        </motion.div>
      </div>
      <div className="section-transition" />
    </section>
  );
};

export default Testimonials;

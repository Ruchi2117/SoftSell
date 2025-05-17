import React, { useState, FormEvent } from 'react';
import { FormData, LicenseType, ValidationError } from '@/types';
import { MotionWrapper } from './animations/MotionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

type FormFieldName = keyof FormData | 'submit';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  focus: {
    scale: 1.02,
    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  }
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState<Array<ValidationError & { field: FormFieldName }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Array<ValidationError & { field: FormFieldName }> = [];

    if (!formData.name.trim()) {
      newErrors.push({ field: 'name', message: 'Name is required' });
    }

    if (!formData.email.trim()) {
      newErrors.push({ field: 'email', message: 'Email is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push({ field: 'email', message: 'Invalid email format' });
    }

    if (!formData.licenseType) {
      newErrors.push({ field: 'licenseType', message: 'Please select a license type' });
    }

    if (!formData.message.trim()) {
      newErrors.push({ field: 'message', message: 'Please provide some details about your licenses' });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
      setErrors([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors([{ field: 'submit', message: 'Failed to submit form. Please try again.' }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => prev.filter(error => error.field !== name));
    setShowSuccess(false);
  };

  const getFieldError = (fieldName: FormFieldName): string => {
    const error = errors.find(e => e.field === fieldName);
    return error ? error.message : '';
  };

  return (
    <section className="relative glass-container py-16" id="contact">
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

      <div className="section-content relative">
        <MotionWrapper animation="fadeIn">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
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
              <motion.h2
                className="relative text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-x"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Get Your License Valuation
              </motion.h2>
            </div>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Fill out the form below and we'll get back to you within 24 hours with a competitive quote.
            </motion.p>
          </motion.div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="md:col-span-2 glass-card p-8 relative group"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            style={{ isolation: 'isolate' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              animate={{
                scale: [1, 1.005, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <form
              className="space-y-6 relative z-[1]"
              onSubmit={handleSubmit}
              style={{ isolation: 'isolate' }}
            >
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={formVariants}>
                <motion.div variants={inputVariants}>
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className={`form-input relative ${getFieldError('name') ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <AnimatePresence>
                    {getFieldError('name') && (
                      <motion.p
                        className="mt-2 text-sm text-red-500"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {getFieldError('name')}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div variants={inputVariants}>
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className={`form-input ${getFieldError('email') ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <AnimatePresence>
                    {getFieldError('email') && (
                      <motion.p
                        className="mt-2 text-sm text-red-500"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {getFieldError('email')}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              <motion.div variants={inputVariants}>
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company (Optional)"
                  className="form-input"
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <motion.select
                  whileFocus="focus"
                  variants={inputVariants}
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  required
                  className={`form-input ${getFieldError('licenseType') ? 'border-red-500' : 'border-gray-300'}`}
                  style={{ isolation: 'isolate' }}
                >
                  <option value="">Select License Type</option>
                  <option value="microsoft">Microsoft</option>
                  <option value="adobe">Adobe</option>
                  <option value="oracle">Oracle</option>
                  <option value="other">Other</option>
                </motion.select>
                <AnimatePresence>
                  {getFieldError('licenseType') && (
                    <motion.p
                      className="mt-2 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {getFieldError('licenseType')}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={inputVariants}>
                <motion.textarea
                  whileFocus="focus"
                  variants={inputVariants}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your licenses"
                  required
                  rows={4}
                  className={`form-input relative resize-none ${getFieldError('message') ? 'border-red-500' : 'border-gray-300'}`}
                />
                <AnimatePresence>
                  {getFieldError('message') && (
                    <motion.p
                      className="mt-2 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {getFieldError('message')}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={inputVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ isolation: 'isolate' }}
                >
                  {isSubmitting ? 'Sending...' : 'Get Your Quote'}
                </motion.button>
                <AnimatePresence>
                  {getFieldError('submit') && (
                    <motion.p
                      className="mt-2 text-sm text-red-500 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {getFieldError('submit')}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            className="glass-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 pointer-events-none"
              animate={{
                x: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.h3
              className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Why Choose SoftSell?
            </motion.h3>
            <motion.ul
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[
                'Get paid within 24-48 hours',
                'Secure, legal transfer process',
                'Best market rates guaranteed',
                'Dedicated support team'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-sm"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        delay: index * 0.1
                      }
                    }
                  }}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-green-500 mr-2"
                  >
                    ✓
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md mx-4 relative"
                variants={successVariants}
              >
                <div className="text-center">
                  <motion.div
                    className="text-green-500 text-5xl mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We've received your request and will get back to you within 24 hours with a competitive quote.
                  </p>
                  <motion.button
                    className="btn-primary"
                    onClick={() => setShowSuccess(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="section-transition" />
    </section>
  );
};

export default ContactForm;

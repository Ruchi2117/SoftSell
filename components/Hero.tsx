import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
    const navLinks = [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Why Choose Us', href: '#why-choose-us' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden glass-container bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:bg-transparent">
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 opacity-80"
                animate={{
                    background: [
                        'radial-gradient(circle at 0% 0%, var(--gradient-blue) 0%, transparent 75%)',
                        'radial-gradient(circle at 100% 100%, var(--gradient-blue) 0%, transparent 75%)',
                        'radial-gradient(circle at 0% 0%, var(--gradient-blue) 0%, transparent 75%)',
                    ],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="absolute inset-0 opacity-70"
                animate={{
                    background: [
                        'radial-gradient(circle at 100% 0%, var(--gradient-pink) 0%, transparent 75%)',
                        'radial-gradient(circle at 0% 100%, var(--gradient-pink) 0%, transparent 75%)',
                        'radial-gradient(circle at 100% 0%, var(--gradient-pink) 0%, transparent 75%)',
                    ],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Additional radial background animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0">
                {/* Additional geometric overlays */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, transparent 40%),
                            linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 0%, transparent 40%)
                        `,
                        backgroundSize: '200% 200%'
                    }}
                    animate={{
                        backgroundPosition: [
                            '0% 0%, 100% 100%',
                            '100% 100%, 0% 0%',
                            '0% 0%, 100% 100%'
                        ]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Glassy highlights */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `
                            linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.08) 20%, transparent 40%),
                            linear-gradient(-120deg, transparent 0%, rgba(255, 255, 255, 0.08) 20%, transparent 40%)
                        `
                    }}
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Moving glass reflections */}
                <motion.div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        background: 'linear-gradient(75deg, transparent 0%, rgba(255, 255, 255, 0.05) 25%, transparent 50%)'
                    }}
                    animate={{
                        x: ['-100%', '200%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Navigation Bar */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-8 left-0 right-0 z-50 py-4 backdrop-blur-sm bg-white/5"
            >
                <div className="container mx-auto px-4">
                    <ul className="flex justify-center space-x-8">
                        {navLinks.map((link) => (
                            <motion.li key={link.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href={link.href}
                                    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.querySelector(link.href);
                                        if (element) {
                                            element.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        }
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.nav>

            {/* Content */}
            <div className="relative z-10 section-content max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Transform Your Unused Software Licenses Into Revenue
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        The trusted marketplace for buying and selling enterprise software licenses.
                        Get the best value for your unused licenses today.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className="btn-primary px-8 py-4 text-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            className="btn-secondary px-8 py-4 text-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                const element = document.querySelector('#how-it-works');
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                            }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.3
                            }}
                            className="relative bg-gradient-to-br from-blue-600/10 via-blue-500/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent backdrop-blur-xl rounded-xl p-6 h-full hover:scale-105 transition-all duration-200 ease-out hover:from-blue-600/20 hover:via-blue-500/20 hover:to-transparent dark:hover:from-white/20 dark:hover:via-white/10 dark:hover:to-transparent border border-blue-200/50 dark:border-white/10 shadow-lg overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                        >
                            {/* Glassy highlight effect */}
                            <motion.div
                                className="absolute -inset-[200%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent dark:via-white/10 rotate-45 pointer-events-none"
                                animate={{
                                    left: ['200%', '-200%']
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                    ease: "easeInOut"
                                }}
                            />
                            <h3 className="font-semibold text-blue-900 dark:text-white text-xl mb-3 drop-shadow-sm relative z-10">Business Downsizing?</h3>
                            <p className="text-blue-800/90 dark:text-white/90 text-base relative z-10">Convert excess software licenses into immediate cash flow</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.5
                            }}
                            className="relative bg-gradient-to-br from-blue-600/10 via-blue-500/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent backdrop-blur-xl rounded-xl p-6 h-full hover:scale-105 transition-all duration-200 ease-out hover:from-blue-600/20 hover:via-blue-500/20 hover:to-transparent dark:hover:from-white/20 dark:hover:via-white/10 dark:hover:to-transparent border border-blue-200/50 dark:border-white/10 shadow-lg overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                        >
                            {/* Glassy highlight effect */}
                            <motion.div
                                className="absolute -inset-[200%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent dark:via-white/10 rotate-45 pointer-events-none"
                                animate={{
                                    left: ['200%', '-200%']
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />
                            <h3 className="font-semibold text-blue-900 dark:text-white text-xl mb-3 drop-shadow-sm relative z-10">Extra Office Licenses?</h3>
                            <p className="text-blue-800/90 dark:text-white/90 text-base relative z-10">Get top dollar for Microsoft Office and other enterprise software</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.7
                            }}
                            className="relative bg-gradient-to-br from-blue-600/10 via-blue-500/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent backdrop-blur-xl rounded-xl p-6 h-full hover:scale-105 transition-all duration-200 ease-out hover:from-blue-600/20 hover:via-blue-500/20 hover:to-transparent dark:hover:from-white/20 dark:hover:via-white/10 dark:hover:to-transparent border border-blue-200/50 dark:border-white/10 shadow-lg overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                        >
                            {/* Glassy highlight effect */}
                            <motion.div
                                className="absolute -inset-[200%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent dark:via-white/10 rotate-45 pointer-events-none"
                                animate={{
                                    left: ['200%', '-200%']
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                    ease: "easeInOut",
                                    delay: 2
                                }}
                            />
                            <h3 className="font-semibold text-blue-900 dark:text-white text-xl mb-3 drop-shadow-sm relative z-10">Unused Tools?</h3>
                            <p className="text-blue-800/90 dark:text-white/90 text-base relative z-10">Sell licenses for tools and software you no longer need</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Section transition */}
            <div className="section-transition" />
        </section>
    );
};

export default Hero;
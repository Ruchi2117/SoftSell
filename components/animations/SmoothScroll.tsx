import { useEffect } from 'react';
import { useScroll, useSpring, useTransform, motion, useMotionValue } from 'framer-motion';

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { scrollY } = useScroll();
    const smoothY = useSpring(scrollY, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    useEffect(() => {
        // Smooth scroll to anchor links
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor && anchor.hash && anchor.href.includes(window.location.pathname)) {
                e.preventDefault();
                const element = document.querySelector(anchor.hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <motion.div
            style={{
                y: useTransform(smoothY, (value) => -value),
                willChange: 'transform'
            }}
        >
            {children}
        </motion.div>
    );
};

export default SmoothScroll; 
import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 10, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -10, filter: 'blur(10px)', transition: { duration: 0.3 } }
};

export const AnimatedPage = ({ children, className = "" }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const fadeUpVariant = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

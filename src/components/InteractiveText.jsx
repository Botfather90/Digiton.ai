import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InteractiveText = ({ text, className }) => {
    // Split text by words
    const words = text.split(' ');

    return (
        <span className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em' }}>
            {words.map((word, i) => (
                <WordFlip key={i} word={word} />
            ))}
        </span>
    );
};

const WordFlip = ({ word }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            style={{ position: 'relative', display: 'inline-block', cursor: 'default' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.span
                initial={false}
                animate={{ rotateX: isHovered ? -90 : 0, opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3, ease: 'easeIn' }}
                style={{ display: 'inline-block', transformOrigin: 'bottom' }}
            >
                {word}
            </motion.span>

            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{ rotateX: 90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: 90, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            color: 'var(--accent)',
                            display: 'inline-block',
                            transformOrigin: 'top',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {word}
                    </motion.span>
                )}
            </AnimatePresence>

            {/* Ambient beam effect on hover */}
            {isHovered && (
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--accent)',
                        boxShadow: '0 0 10px var(--accent)',
                        transformOrigin: 'left'
                    }}
                />
            )}
        </span>
    );
};

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


interface IAnimatedBlockProps {
    children: React.ReactNode
}

const AnimatedBlock: React.FC<IAnimatedBlockProps> = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Анимация сработает только один раз
        threshold: 0.1, // Процент видимости элемента, при котором сработает анимация
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedBlock;
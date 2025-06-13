import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0.1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // custom ease for smoother motion
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center relative bg-hero-pattern bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>
      <motion.div className="relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Muhammad Faizal AlKindi
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Computer Engineering Student at Semarang State University
        </motion.p>
      </motion.div>
    </section>
  );
}

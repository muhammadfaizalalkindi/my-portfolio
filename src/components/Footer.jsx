import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-4 text-center border-t dark:border-gray-700 px-4">
      <motion.p 
        className="text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        &copy; {new Date().getFullYear()} Faizal. All rights reserved.
      </motion.p>
    </footer>
  );
}

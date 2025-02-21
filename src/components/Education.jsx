import { motion } from 'framer-motion';
import education from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Education
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map(edu => (
          <motion.div 
            key={edu.id}
            className="border rounded p-4 bg-white dark:bg-gray-700 shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * edu.id, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold">{edu.institution}</h3>
            <p className="text-sm italic">{edu.degree} ({edu.period})</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import organizations from '../data/organizations';

export default function Organizations() {
  return (
    <section id="organizations" className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Organizations
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {organizations.map(org => (
          <motion.div 
            key={org.id}
            className="border rounded p-4 bg-white dark:bg-gray-700 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * org.id, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold">{org.name}</h3>
            <p className="text-sm italic">{org.role} ({org.period})</p>
            {org.description && <p className="mt-2 text-sm">{org.description}</p>}
            {org.responsibilities && (
              <ul className="list-disc list-inside mt-2">
                {org.responsibilities.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            )}
            <a href={org.link} className="mt-2 inline-block text-blue-500 hover:underline text-sm">Instagram</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

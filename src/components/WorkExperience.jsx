import { motion } from 'framer-motion';
import workExperiences from '../data/workExperience';

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-16 px-4">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Work Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {workExperiences.map(exp => (
          <motion.div 
            key={exp.id}
            className="border rounded p-4 bg-white dark:bg-gray-700 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * exp.id, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="text-sm italic">{exp.position} ({exp.period})</p>
            <ul className="list-disc list-inside mt-2">
              {exp.responsibilities.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <div className="max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map(proj => (
          <motion.div 
            key={proj.id}
            className="border rounded p-4 bg-white dark:bg-gray-700 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * proj.id, duration: 0.8 }}
          >
            {/* Device mock frame */}
            <div className="border rounded-lg p-2 shadow-lg bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-sm italic">{proj.period}</p>
              <p className="mt-2 text-sm">{proj.description}</p>
              <div className="mt-2">
                <span className="text-sm font-semibold">Technologies: </span>
                <span className="text-sm">{proj.technologies.join(', ')}</span>
              </div>
              <div className="mt-2 space-x-4">
                <a href={proj.link} className="text-blue-500 hover:underline text-sm">View</a>
                <a href={proj.source} className="text-blue-500 hover:underline text-sm">Source</a>
              </div>
            </div>
            {/* Special effect overlay (contoh shimmer) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

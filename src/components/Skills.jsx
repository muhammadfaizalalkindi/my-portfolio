import { motion } from 'framer-motion';

export default function Skills() {
  const skills = ["Microsoft Office (Excel, Word, PowerPoint)", "Google Workspace", "HTML", "CSS", "Bootstrap", "Basic JavaScript", "Basic Python", "Basic SQL", "Problem-solving", "Teamwork", "Attention to Detail", "Time Management",];
  return (
    <section id="skills" className="py-16 px-4">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Technical Skills
      </motion.h2>
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.span 
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

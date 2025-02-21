import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.div 
        className="max-w-3xl mx-auto text-base md:text-lg text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <p>
        I am a Computer Engineering student at Universitas Negeri Semarang who has a deep interest in Front-End Development, a branch of Web Development that focuses on creating attractive and responsive user interfaces. During my education, I have developed my data analysis, communication, and leadership skills through active participation in various organizations I joined and online class projects or activities. These experiences have not only enriched my practical knowledge, but also built my ability to work in teams and solve problems creatively. I am interested in developing optimized interfaces using HTML, CSS, and JavaScript, and exploring frameworks like React to create innovative user experiences. I am always motivated to keep learning and innovating, and ready to make a positive contribution in a professional environment. Let's connect to collaborate and develop new ideas together.
        </p>
      </motion.div>
    </section>
  );
}

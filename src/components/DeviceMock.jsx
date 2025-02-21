import { motion } from 'framer-motion';

export default function DeviceMock() {
  return (
    <section id="device-mock" className="py-16 px-4 bg-special">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Check Out My Projects on Mobile
        </motion.h2>
        <motion.div 
          className="relative w-full max-w-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Device mock container */}
          <div className="border-4 border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/device-mock.png" 
              alt="Device Mockup" 
              className="w-full"
            />
          </div>
          {/* Tombol interaktif sebagai contoh */}
          <motion.button 
            className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

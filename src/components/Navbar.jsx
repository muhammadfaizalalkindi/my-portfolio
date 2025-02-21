import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = (
    <>
      <Link href="#hero" className="block py-2 md:py-0 hover:text-blue-500">Home</Link>
      <Link href="#about" className="block py-2 md:py-0 hover:text-blue-500">About</Link>
      <Link href="#work-experience" className="block py-2 md:py-0 hover:text-blue-500">Experience</Link>
      <Link href="#education" className="block py-2 md:py-0 hover:text-blue-500">Education</Link>
      <Link href="#skills" className="block py-2 md:py-0 hover:text-blue-500">Skills</Link>
      <Link href="#projects" className="block py-2 md:py-0 hover:text-blue-500">Projects</Link>
      <Link href="#organizations" className="block py-2 md:py-0 hover:text-blue-500">Organizations</Link>
      <Link href="#contact" className="block py-2 md:py-0 hover:text-blue-500">Contact</Link>
    </>
  );

  // Jika belum mounted, render fallback yang statis (sesuai dengan render server)
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-700 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-bold">
            <Link href="/">Faizal</Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks}
            <button className="p-2 border rounded">Dark Mode</button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-700 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="text-2xl font-bold">
          <Link href="/">Faizal</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2 border rounded"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </motion.button>
        </div>
        <div className="md:hidden flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2 border rounded mr-2"
          >
            {darkMode ? '☀️' : '🌙'}
          </motion.button>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 8h16M4 16h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 p-4">
          <div className="flex flex-col space-y-4">
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
}
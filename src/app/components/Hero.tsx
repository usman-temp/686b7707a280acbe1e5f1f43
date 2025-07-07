import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
          Transforming Ideas into
          <span className="text-blue-600 dark:text-blue-400"> Digital Reality</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Full-stack developer specializing in modern web applications and scalable solutions
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg">
            View Work
          </button>
          <button className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-lg">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
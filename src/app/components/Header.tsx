import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <nav className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            DevPortfolio
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
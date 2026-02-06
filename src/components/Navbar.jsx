import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-bg/80 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-abc-blue">ABC Company</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="/" className="hover:text-abc-blue transition">Home</a>
            <a href="/services" className="hover:text-abc-blue transition">Services</a>
            <a href="/about" className="hover:text-abc-blue transition">About</a>
            <a href="/contact" className="hover:text-abc-blue transition">Contact</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t p-4 flex flex-col space-y-4">
          <Link to="/" className="block text-lg" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="block text-lg" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/about" className="block text-lg" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block text-lg" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { Menu, X, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
  { name: 'Music', href: '/jyotish/personal/music', isExternal: true }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-navy/95 backdrop-blur-sm shadow-lg' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/jyotish/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-highlight to-highlight-light flex items-center justify-center">
            <span className="text-white font-bold text-sm">JB</span>
          </div>
          <span className="font-bold text-xl">Jyotish</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            item.isExternal ? (
              <Link
                key={item.name}
                to={item.href}
                className="nav-item text-sm font-medium"
              >
                <span className="flex items-center gap-1">
                  {item.name === 'Music' && <Music2 className="w-4 h-4" />}
                  {item.name}
                </span>
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="nav-item text-sm font-medium"
              >
                {item.name}
              </a>
            )
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md text-gray-200 hover:bg-muted/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-sm border-t border-muted animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              item.isExternal ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium hover:bg-muted/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name === 'Music' && <Music2 className="w-4 h-4" />}
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

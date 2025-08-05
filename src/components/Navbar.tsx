import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Phone, User, Settings } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Beranda', href: '#home', icon: Home },
    { name: 'Properti', href: '#properties', icon: Settings },
    { name: 'Tentang', href: '#about', icon: User },
    { name: 'Kontak', href: '#contact', icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">
              BudiPro.id
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="link-underline px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-hero text-sm">
              Konsultasi Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-medium animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="flex items-center px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-card-hover rounded-md transition-colors duration-300"
                >
                  <IconComponent size={20} className="mr-3" />
                  {item.name}
                </a>
              );
            })}
            <div className="px-3 py-2">
              <Button className="btn-hero w-full text-sm">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
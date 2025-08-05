import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Youtube,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Properti', href: '#properties' },
    { name: 'Layanan', href: '#services' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Kontak', href: '#contact' }
  ];

  const services = [
    'KPR Bersubsidi',
    'Konsultasi Properti',
    'Simulasi Cicilan',
    'Bantuan Legal',
    'After Sales Service'
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-card to-primary/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              BudiPro.id
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Partner terpercaya dalam mewujudkan impian memiliki rumah. 
              Dengan pengalaman 15+ tahun, kami siap membantu keluarga Indonesia.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 bg-card-hover rounded-lg border border-border transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-medium`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Jl. Sudirman Kav. 25</div>
                  <div>Jakarta Selatan 12190</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+62 21 8765 4321</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@budipro.id</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="btn-hero w-full mt-6">
              Konsultasi Sekarang
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 BudiPro.id. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Kembali ke Atas
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
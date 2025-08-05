import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Star } from 'lucide-react';
import heroImage from '@/assets/hero-house.jpg';

const Hero = () => {
  const stats = [
    { number: '500+', label: 'Rumah Terjual' },
    { number: '15+', label: 'Tahun Pengalaman' },
    { number: '4.9', label: 'Rating Kepuasan' },
    { number: '24/7', label: 'Pelayanan' },
  ];

  const benefits = [
    'Cicilan mulai 900rb/bulan',
    'DP 0% untuk KPR bersubsidi',
    'Proses cepat & mudah',
    'Lokasi strategis'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-card to-card-hover">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-full border border-accent/30">
              <Star className="w-4 h-4 text-accent mr-2" fill="currentColor" />
              <span className="text-sm font-medium text-accent-foreground">
                #1 Agen Properti Rumah Bersubsidi
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Wujudkan
                <span className="text-gradient block">
                  Rumah Impian
                </span>
                dengan Mudah
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Dapatkan rumah bersubsidi dengan cicilan terjangkau mulai dari 900rb/bulan. 
                Proses cepat, aman, dan terpercaya bersama BudiPro.id
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 animate-fade-in-up animation-delay-${index * 200}`}
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Button className="btn-hero group">
                Lihat Properti Tersedia
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-hero-outline">
                <MapPin className="mr-2 h-4 w-4" />
                Cek Lokasi Terdekat
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border animate-fade-in-up animation-delay-600">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Modern house by BudiPro.id"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-medium border border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-card-foreground">Rumah Type 45</h3>
                    <p className="text-sm text-muted-foreground">2 KT • 1 KM • Carport</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Mulai dari</div>
                    <div className="text-xl font-bold text-accent">900rb/bln</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full opacity-20 animate-bounce-gentle"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-secondary to-secondary-light rounded-full opacity-15 animate-bounce-gentle animation-delay-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-house.jpg';

const Hero = () => {
  const stats = [
    { number: '500+', label: 'Rumah Terjual' },
    { number: '15', label: 'Tahun Pengalaman' },
    { number: '4.9', label: 'Rating' },
    { number: '24/7', label: 'Support' },
  ];

  const benefits = [
    'Cicilan mulai 900rb/bulan',
    'DP 0% tersedia',
    'Proses cepat & mudah',
    'Lokasi strategis'
  ];

  return (
    <section id="home" className="pt-20 pb-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Wujudkan
                <span className="text-primary block">
                  Rumah Impian
                </span>
                dengan Mudah
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Dapatkan rumah bersubsidi dengan cicilan terjangkau mulai dari 900rb/bulan. 
                Proses cepat, aman, dan terpercaya.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 animate-fade-in animation-delay-${(index + 1) * 100}`}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <Button className="btn-primary">
                Lihat Properti
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-outline">
                <MapPin className="mr-2 h-4 w-4" />
                Cek Lokasi
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border animate-slide-up animation-delay-300">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
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
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <img
                src={heroImage}
                alt="Modern house by BudiPro.id"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-soft border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">Rumah Type 45</h3>
                    <p className="text-sm text-muted-foreground">2 KT • 1 KM • Carport</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Mulai dari</div>
                    <div className="text-lg font-bold text-accent">900rb/bln</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Target, 
  Heart, 
  Handshake, 
  TrendingUp, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Kepedulian',
      description: 'Kami peduli dengan impian setiap keluarga untuk memiliki rumah sendiri'
    },
    {
      icon: Handshake,
      title: 'Kepercayaan',
      description: 'Membangun hubungan jangka panjang dengan transparansi dan integritas'
    },
    {
      icon: Award,
      title: 'Kualitas',
      description: 'Memberikan layanan terbaik dengan standar profesional tertinggi'
    },
    {
      icon: Target,
      title: 'Fokus Solusi',
      description: 'Mengutamakan solusi terbaik yang sesuai dengan kebutuhan klien'
    }
  ];

  const achievements = [
    { year: '2008', milestone: 'BudiPro.id didirikan dengan visi membantu keluarga Indonesia memiliki rumah' },
    { year: '2012', milestone: 'Mencapai 100 rumah terjual dan menjadi mitra resmi bank-bank terkemuka' },
    { year: '2018', milestone: 'Ekspansi ke 5 kota besar dan melayani program KPR bersubsidi' },
    { year: '2024', milestone: 'Telah membantu 500+ keluarga memiliki rumah impian mereka' }
  ];

  const certifications = [
    'Sertifikat REI (Real Estate Indonesia)',
    'ISO 9001:2015 Quality Management',
    'Mitra Resmi Bank BTN & Bank Mandiri',
    'Member AREBI (Asosiasi Real Estate Broker Indonesia)'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20 bg-primary/5">
            Tentang Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Partner Terpercaya
            <span className="text-gradient block">Rumah Impian Anda</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                15+ Tahun Mengabdi untuk Keluarga Indonesia
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BudiPro.id lahir dari passion untuk membantu keluarga Indonesia mewujudkan impian 
                memiliki rumah sendiri. Dengan pengalaman lebih dari 15 tahun, kami telah menjadi 
                mitra terpercaya dalam menyediakan solusi properti yang tepat sasaran.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kami mengkhususkan diri dalam program KPR bersubsidi yang memungkinkan keluarga 
                dengan income menengah ke bawah untuk memiliki rumah dengan cicilan terjangkau. 
                Komitmen kami adalah memberikan pelayanan terbaik dari konsultasi hingga serah terima kunci.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Sertifikasi & Kemitraan:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="btn-hero">
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index} 
                  className={`card-hover p-6 bg-card border-border animate-fade-in-scale animation-delay-${index * 150}`}
                >
                  <div className="bg-primary/10 text-primary inline-flex p-3 rounded-xl mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative animate-fade-in-up animation-delay-400">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Perjalanan Kami
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dari awal yang sederhana hingga menjadi agen properti terpercaya di Indonesia
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium z-10"></div>
                  
                  {/* Content Card */}
                  <Card className={`card-hover w-full max-w-md p-6 bg-card border-border ${
                    index % 2 === 0 ? 'mr-auto lg:mr-8' : 'ml-auto lg:ml-8'
                  }`}>
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="secondary" className="text-sm font-bold">
                        {achievement.year}
                      </Badge>
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.milestone}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team CTA */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-border">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tim Profesional Siap Membantu
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dengan tim yang berpengalaman dan berkomitmen, kami siap membantu Anda 
              menemukan rumah impian dengan pelayanan terbaik.
            </p>
            <Button className="btn-hero">
              Konsultasi dengan Tim Kami
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
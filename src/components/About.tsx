import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Target, 
  Heart, 
  Handshake, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Kepedulian',
      description: 'Peduli dengan impian setiap keluarga untuk memiliki rumah sendiri'
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
    { year: '2008', milestone: 'BudiPro.id didirikan dengan visi membantu keluarga Indonesia' },
    { year: '2015', milestone: 'Mencapai 100 rumah terjual dan menjadi mitra resmi bank terkemuka' },
    { year: '2020', milestone: 'Ekspansi ke 5 kota besar dan melayani program KPR bersubsidi' },
    { year: '2024', milestone: 'Telah membantu 500+ keluarga memiliki rumah impian mereka' }
  ];

  const certifications = [
    'Sertifikat REI (Real Estate Indonesia)',
    'ISO 9001:2015 Quality Management',
    'Mitra Resmi Bank BTN & Bank Mandiri',
    'Member AREBI (Asosiasi Real Estate Broker Indonesia)'
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/20">
            Tentang Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Partner Terpercaya Rumah Impian Anda
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                15+ Tahun Mengabdi untuk Keluarga Indonesia
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                BudiPro.id lahir dari passion untuk membantu keluarga Indonesia mewujudkan impian 
                memiliki rumah sendiri. Dengan pengalaman lebih dari 15 tahun, kami telah menjadi 
                mitra terpercaya dalam menyediakan solusi properti yang tepat sasaran.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kami mengkhususkan diri dalam program KPR bersubsidi yang memungkinkan keluarga 
                dengan income menengah ke bawah untuk memiliki rumah dengan cicilan terjangkau.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Sertifikasi & Kemitraan:</h4>
              <div className="grid grid-cols-1 gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="btn-primary">
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in animation-delay-200">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index} 
                  className={`card-minimal p-5 animate-fade-in animation-delay-${(index + 2) * 100}`}
                >
                  <div className="bg-primary/10 text-primary inline-flex p-2 rounded-lg mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2">
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
        <div className="animate-fade-in animation-delay-400">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Perjalanan Kami
            </h3>
            <p className="text-muted-foreground">
              Dari awal yang sederhana hingga menjadi agen properti terpercaya di Indonesia
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>
                  
                  {/* Content Card */}
                  <Card className={`card-minimal w-full max-w-md p-4 ${
                    index % 2 === 0 ? 'mr-auto lg:mr-8' : 'ml-auto lg:ml-8'
                  }`}>
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.milestone}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
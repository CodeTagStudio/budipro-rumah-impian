import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  FileText, 
  Calculator, 
  Users, 
  Shield, 
  Clock,
  TrendingUp,
  MapPin,
  Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Konsultasi Properti',
      description: 'Konsultasi gratis untuk memilih rumah yang sesuai dengan kebutuhan dan budget Anda.',
      features: ['Analisis kebutuhan', 'Rekomendasi properti', 'Survey lokasi'],
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Calculator,
      title: 'Simulasi KPR',
      description: 'Hitung cicilan KPR dengan akurat termasuk simulasi DP 0% untuk rumah bersubsidi.',
      features: ['Kalkulasi cicilan', 'Perbandingan bank', 'DP 0% tersedia'],
      color: 'bg-secondary/10 text-secondary'
    },
    {
      icon: FileText,
      title: 'Bantuan Dokumen',
      description: 'Kami bantu lengkapi semua dokumen yang diperlukan untuk pengajuan KPR Anda.',
      features: ['Kelengkapan berkas', 'Verifikasi dokumen', 'Proses cepat'],
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: Shield,
      title: 'Jaminan Legal',
      description: 'Properti yang kami jual dijamin legal dengan sertifikat lengkap dan aman.',
      features: ['SHM tersedia', 'Bebas sengketa', 'Notaris terpercaya'],
      color: 'bg-destructive/10 text-destructive'
    },
    {
      icon: TrendingUp,
      title: 'Investasi Properti',
      description: 'Dapatkan insight investasi properti terbaik untuk masa depan yang lebih cerah.',
      features: ['Analisis pasar', 'ROI tracking', 'Strategic location'],
      color: 'bg-purple-500/10 text-purple-600'
    },
    {
      icon: Users,
      title: 'After Sales Service',
      description: 'Layanan purna jual terbaik untuk memastikan kepuasan dan kenyamanan Anda.',
      features: ['Support 24/7', 'Maintenance tips', 'Community access'],
      color: 'bg-orange-500/10 text-orange-600'
    }
  ];

  const stats = [
    { icon: Award, number: '500+', label: 'Klien Puas', description: 'Telah mempercayai layanan kami' },
    { icon: Clock, number: '7 Hari', label: 'Proses Cepat', description: 'Rata-rata approval KPR' },
    { icon: MapPin, number: '15+', label: 'Lokasi', description: 'Pilihan area strategis' },
    { icon: Shield, number: '100%', label: 'Legal Aman', description: 'Properti bersertifikat' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-secondary border-secondary/20 bg-secondary/5">
            Layanan Terbaik
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Solusi Lengkap
            <span className="text-gradient block">Kebutuhan Properti Anda</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dari konsultasi hingga serah terima kunci, kami siap membantu mewujudkan 
            impian memiliki rumah dengan pelayanan profesional dan terpercaya
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`card-hover p-8 bg-card border-border animate-fade-in-scale animation-delay-${index * 100}`}
              >
                <div className={`inline-flex p-3 rounded-xl ${service.color} mb-6`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl"></div>
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border shadow-medium">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Mengapa Memilih BudiPro.id?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kepercayaan klien adalah prioritas utama kami. Lihat pencapaian yang membuktikan kualitas layanan kami.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className={`text-center animate-fade-in-up animation-delay-${index * 200}`}
                  >
                    <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-card-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
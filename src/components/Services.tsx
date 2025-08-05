import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  FileText, 
  Calculator, 
  Users, 
  Shield, 
  Clock
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Konsultasi Properti',
      description: 'Konsultasi gratis untuk memilih rumah yang sesuai dengan kebutuhan dan budget Anda.',
      features: ['Analisis kebutuhan', 'Rekomendasi properti', 'Survey lokasi']
    },
    {
      icon: Calculator,
      title: 'Simulasi KPR',
      description: 'Hitung cicilan KPR dengan akurat termasuk simulasi DP 0% untuk rumah bersubsidi.',
      features: ['Kalkulasi cicilan', 'Perbandingan bank', 'DP 0% tersedia']
    },
    {
      icon: FileText,
      title: 'Bantuan Dokumen',
      description: 'Kami bantu lengkapi semua dokumen yang diperlukan untuk pengajuan KPR Anda.',
      features: ['Kelengkapan berkas', 'Verifikasi dokumen', 'Proses cepat']
    },
    {
      icon: Shield,
      title: 'Jaminan Legal',
      description: 'Properti yang kami jual dijamin legal dengan sertifikat lengkap dan aman.',
      features: ['SHM tersedia', 'Bebas sengketa', 'Notaris terpercaya']
    },
    {
      icon: Users,
      title: 'After Sales Service',
      description: 'Layanan purna jual terbaik untuk memastikan kepuasan dan kenyamanan Anda.',
      features: ['Support 24/7', 'Maintenance tips', 'Community access']
    },
    {
      icon: Clock,
      title: 'Proses Cepat',
      description: 'Proses approval KPR rata-rata 7 hari dengan dukungan tim profesional kami.',
      features: ['Fast track', '7 hari approval', 'Dedicated support']
    }
  ];

  const stats = [
    { number: '500+', label: 'Klien Puas' },
    { number: '7 Hari', label: 'Avg. Approval' },
    { number: '15+', label: 'Lokasi Tersedia' },
    { number: '100%', label: 'Legal Aman' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/20">
            Layanan Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Solusi Lengkap Kebutuhan Properti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari konsultasi hingga serah terima kunci, kami siap membantu dengan pelayanan profesional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`card-minimal p-6 animate-fade-in animation-delay-${index * 100}`}
              >
                <div className="bg-primary/10 text-primary inline-flex p-3 rounded-lg mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
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
        <div className="bg-muted/50 rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Mengapa Memilih BudiPro.id?
            </h3>
            <p className="text-muted-foreground">
              Kepercayaan klien adalah prioritas utama kami
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center animate-fade-in animation-delay-${index * 100}`}
              >
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
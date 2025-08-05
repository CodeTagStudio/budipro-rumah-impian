import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Star
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      info: '+62 21 8765 4321',
      subInfo: 'Senin - Minggu: 08:00 - 21:00'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+62 812 3456 7890',
      subInfo: 'Respon cepat 24/7'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@budipro.id',
      subInfo: 'Respon dalam 2 jam'
    },
    {
      icon: MapPin,
      title: 'Kantor Pusat',
      info: 'Jl. Sudirman Kav. 25',
      subInfo: 'Jakarta Selatan 12190'
    }
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Pemilik Rumah di Bekasi',
      message: 'Pelayanan sangat memuaskan! Tim BudiPro membantu dari awal hingga serah terima kunci.',
      rating: 5
    },
    {
      name: 'Sari Dewi',
      role: 'Pemilik Rumah di Depok',
      message: 'Proses KPR sangat mudah dan cepat. Terima kasih BudiPro.id!',
      rating: 5
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Tim kami akan menghubungi Anda dalam 2 jam ke depan.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/20">
            Hubungi Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Siap Membantu Wujudkan Rumah Impian
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tim profesional kami siap memberikan konsultasi gratis dan membantu Anda 
            menemukan solusi properti terbaik
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="card-minimal p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  Konsultasi Gratis
                </h3>
                <p className="text-muted-foreground">
                  Isi form di bawah ini dan tim kami akan menghubungi Anda segera
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Nomor WhatsApp *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="08123456789"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Tipe Properti Diminati
                    </label>
                    <Input
                      type="text"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      placeholder="Type 36, Type 45, dll"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Pesan
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ceritakan kebutuhan properti Anda..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="btn-primary w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in animation-delay-200">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={index} 
                  className={`card-minimal p-4 animate-fade-in animation-delay-${(index + 2) * 100}`}
                >
                  <div className="bg-primary/10 text-primary inline-flex p-2 rounded-lg mb-3">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    {contact.title}
                  </h4>
                  <p className="text-sm font-medium text-card-foreground mb-1">
                    {contact.info}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {contact.subInfo}
                  </p>
                </Card>
              );
            })}

            {/* Office Hours */}
            <Card className="card-minimal p-4">
              <div className="flex items-center mb-3">
                <Clock className="w-4 h-4 text-primary mr-2" />
                <h4 className="font-semibold text-card-foreground">Jam Operasional</h4>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Senin - Jumat</span>
                  <span className="font-medium text-card-foreground">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sabtu</span>
                  <span className="font-medium text-card-foreground">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minggu</span>
                  <span className="font-medium text-card-foreground">10:00 - 16:00</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="animate-fade-in animation-delay-400">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Kata Mereka Tentang Kami
            </h3>
            <p className="text-muted-foreground">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`card-minimal p-5 animate-fade-in animation-delay-${(index + 5) * 100}`}
              >
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  "{testimonial.message}"
                </p>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  <div>
                    <div className="font-semibold text-card-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
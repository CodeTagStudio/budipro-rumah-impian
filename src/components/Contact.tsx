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
      subInfo: 'Senin - Minggu: 08:00 - 21:00',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+62 812 3456 7890',
      subInfo: 'Respon cepat 24/7',
      color: 'bg-green-500/10 text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@budipro.id',
      subInfo: 'Respon dalam 2 jam',
      color: 'bg-secondary/10 text-secondary'
    },
    {
      icon: MapPin,
      title: 'Kantor Pusat',
      info: 'Jl. Sudirman Kav. 25',
      subInfo: 'Jakarta Selatan 12190',
      color: 'bg-accent/10 text-accent'
    }
  ];

  const officeHours = [
    { day: 'Senin - Jumat', time: '08:00 - 20:00' },
    { day: 'Sabtu', time: '09:00 - 18:00' },
    { day: 'Minggu', time: '10:00 - 16:00' }
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
    <section id="contact" className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-accent border-accent/20 bg-accent/5">
            Hubungi Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Siap Membantu
            <span className="text-gradient block">Wujudkan Rumah Impian</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tim profesional kami siap memberikan konsultasi gratis dan membantu Anda 
            menemukan solusi properti terbaik sesuai kebutuhan
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Card className="p-8 bg-card border-border shadow-medium">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  Konsultasi Gratis
                </h3>
                <p className="text-muted-foreground">
                  Isi form di bawah ini dan tim kami akan menghubungi Anda segera
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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

                <div className="grid md:grid-cols-2 gap-6">
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

                <Button type="submit" className="btn-hero w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card 
                    key={index} 
                    className={`card-hover p-6 bg-card border-border animate-fade-in-scale animation-delay-${index * 100}`}
                  >
                    <div className={`inline-flex p-3 rounded-xl ${contact.color} mb-4`}>
                      <IconComponent className="w-5 h-5" />
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
            </div>

            {/* Office Hours */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-primary mr-3" />
                <h4 className="font-semibold text-card-foreground">Jam Operasional</h4>
              </div>
              <div className="space-y-2">
                {officeHours.map((hour, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{hour.day}</span>
                    <span className="font-medium text-card-foreground">{hour.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="animate-fade-in-up animation-delay-600">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Kata Mereka Tentang Kami
            </h3>
            <p className="text-muted-foreground">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`card-hover p-6 bg-card border-border animate-fade-in-scale animation-delay-${index * 200}`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.message}"
                </p>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
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
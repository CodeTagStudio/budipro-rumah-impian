import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Car, ArrowRight, Star } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const PropertyShowcase = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      title: 'Perumahan Harmoni Residence',
      type: 'Type 45',
      price: '850rb/bulan',
      originalPrice: 'Rp 285 Juta',
      location: 'Cibubur, Jakarta Timur',
      beds: 2,
      baths: 1,
      carport: 1,
      rating: 4.8,
      reviews: 24,
      isSubsidi: true,
      badge: 'Terlaris'
    },
    {
      id: 2,
      image: property2,
      title: 'Villa Mutiara Asri',
      type: 'Type 54',
      price: '1.2jt/bulan',
      originalPrice: 'Rp 350 Juta',
      location: 'Bekasi Selatan',
      beds: 3,
      baths: 2,
      carport: 1,
      rating: 4.9,
      reviews: 18,
      isSubsidi: true,
      badge: 'Hot Deal'
    },
    {
      id: 3,
      image: property3,
      title: 'Griya Sejahtera Indah',
      type: 'Type 36',
      price: '750rb/bulan',
      originalPrice: 'Rp 245 Juta',
      location: 'Depok Timur',
      beds: 2,
      baths: 1,
      carport: 1,
      rating: 4.7,
      reviews: 31,
      isSubsidi: true,
      badge: 'DP 0%'
    }
  ];

  return (
    <section id="properties" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20 bg-primary/5">
            Properti Unggulan
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pilihan Rumah
            <span className="text-gradient block">Bersubsidi Terbaik</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Temukan berbagai pilihan rumah bersubsidi dengan lokasi strategis, 
            fasilitas lengkap, dan cicilan yang terjangkau untuk keluarga Indonesia
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className={`card-hover group bg-card border-border overflow-hidden animate-fade-in-scale animation-delay-${index * 200}`}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    {property.badge}
                  </Badge>
                </div>
                
                {property.isSubsidi && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      KPR Bersubsidi
                    </Badge>
                  </div>
                )}

                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-accent" fill="currentColor" />
                  <span className="text-sm font-medium">{property.rating}</span>
                  <span className="text-xs text-muted-foreground">({property.reviews})</span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-1">{property.type}</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                {/* Facilities */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.beds} KT</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.baths} KM</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-1" />
                    <span>Carport</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-accent">{property.price}</span>
                    <span className="text-sm text-muted-foreground">cicilan</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Harga: {property.originalPrice}
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full btn-hero group">
                  Lihat Detail
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center animate-fade-in-up animation-delay-600">
          <Button variant="outline" size="lg" className="px-8 py-4 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
            Lihat Semua Properti
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
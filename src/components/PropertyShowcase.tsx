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
      badge: 'DP 0%'
    }
  ];

  return (
    <section id="properties" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/20">
            Properti Unggulan
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Pilihan Rumah Bersubsidi Terbaik
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan berbagai pilihan rumah bersubsidi dengan lokasi strategis dan cicilan terjangkau
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className={`card-minimal group overflow-hidden animate-fade-in animation-delay-${index * 100}`}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-accent text-accent-foreground text-xs">
                    {property.badge}
                  </Badge>
                </div>
                
                {/* KPR Badge */}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="text-xs">
                    KPR Bersubsidi
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm rounded-md px-2 py-1 flex items-center space-x-1">
                  <Star className="w-3 h-3 text-accent" fill="currentColor" />
                  <span className="text-xs font-medium">{property.rating}</span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-5">
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-1">{property.type}</div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
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
                <div className="mb-5">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-accent">{property.price}</span>
                    <span className="text-sm text-muted-foreground">cicilan</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Harga: {property.originalPrice}
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full btn-outline group">
                  Lihat Detail
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center animate-fade-in animation-delay-300">
          <Button className="btn-primary">
            Lihat Semua Properti
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;

import { Star, Clock, Users, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: 1,
    title: "Exotic Bali Adventure",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 245,
    duration: "7 Days / 6 Nights",
    groupSize: "2-8 People",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    features: ["Accommodation", "Meals", "Transport", "Guide"]
  },
  {
    id: 2,
    title: "Maldives Paradise Escape",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 189,
    duration: "5 Days / 4 Nights",
    groupSize: "Couples",
    price: 1599,
    originalPrice: 2199,
    discount: 27,
    features: ["Overwater Villa", "All Meals", "Spa", "Activities"]
  },
  {
    id: 3,
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 312,
    duration: "4 Days / 3 Nights",
    groupSize: "Family Friendly",
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    features: ["Luxury Hotel", "Desert Safari", "City Tour", "Shopping"]
  },
  {
    id: 4,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 156,
    duration: "6 Days / 5 Nights",
    groupSize: "Adventure Seekers",
    price: 1899,
    originalPrice: 2399,
    discount: 21,
    features: ["Mountain Lodge", "Hiking Gear", "Cable Car", "Meals"]
  },
  {
    id: 5,
    title: "Japan Cultural Journey",
    location: "Tokyo & Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 278,
    duration: "8 Days / 7 Nights",
    groupSize: "Cultural Enthusiasts",
    price: 2199,
    originalPrice: 2899,
    discount: 24,
    features: ["Traditional Hotels", "Cultural Tours", "JR Pass", "Experiences"]
  },
  {
    id: 6,
    title: "African Safari Adventure",
    location: "Kenya & Tanzania",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 134,
    duration: "9 Days / 8 Nights",
    groupSize: "Wildlife Lovers",
    price: 3299,
    originalPrice: 4199,
    discount: 21,
    features: ["Safari Lodge", "Game Drives", "Masai Village", "All Meals"]
  }
];

const FeaturedPackages = () => {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Travel Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked destinations and experiences crafted by our travel experts for unforgettable journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group cursor-pointer">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.discount}% OFF
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors">
                      <Heart className="h-4 w-4 text-foreground" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-foreground">
                        {pkg.rating}
                      </span>
                    </div>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {pkg.reviews} reviews
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {pkg.location}
                  </div>

                  <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {pkg.groupSize}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {pkg.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                    {pkg.features.length > 3 && (
                      <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                        +{pkg.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        ${pkg.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${pkg.originalPrice}
                      </span>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;

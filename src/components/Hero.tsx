
import { Button } from "@/components/ui/button";
import { Search, MapPin, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-r from-orange-500 to-red-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" />
            Unforgettable experiences await
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Book amazing things to do
            <span className="block">around the world</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            From skip-the-line tickets to unique experiences, find and book the best things to do in 1000+ destinations worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Search className="mr-2 h-5 w-5" />
              Start Exploring
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4">
              <MapPin className="mr-2 h-5 w-5" />
              Popular Destinations
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-300" />
              <span>4.5+ rating</span>
            </div>
            <div>15M+ bookings</div>
            <div>1000+ destinations</div>
            <div>Free cancellation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

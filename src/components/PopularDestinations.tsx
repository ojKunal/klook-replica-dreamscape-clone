
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    activities: "1,234 activities"
  },
  {
    name: "Bangkok",
    country: "Thailand", 
    image: "https://images.unsplash.com/photo-1563492065-eea8e4c9b3d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    activities: "892 activities"
  },
  {
    name: "Singapore", 
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    activities: "765 activities"
  },
  {
    name: "Seoul",
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    activities: "634 activities"
  },
  {
    name: "Hong Kong",
    country: "Hong Kong",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    activities: "543 activities"
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    activities: "421 activities"
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Popular destinations
            </h2>
            <p className="text-lg text-gray-600">
              Discover the most loved places by travelers worldwide
            </p>
          </div>
          <button className="hidden md:flex items-center text-orange-600 hover:text-orange-700 font-medium">
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div 
              key={destination.name}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-white/80 mb-2">{destination.country}</p>
                  <p className="text-sm text-white/70">{destination.activities}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ArrowRight className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;

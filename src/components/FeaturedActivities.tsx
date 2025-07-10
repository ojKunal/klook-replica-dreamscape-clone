
import { Star, Clock, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    id: 1,
    title: "Tokyo Skytree Skip-the-Line Ticket",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 12543,
    duration: "2-3 hours",
    price: 45,
    originalPrice: 60,
    discount: 25,
    category: "Attractions"
  },
  {
    id: 2,
    title: "Floating Markets & Elephant Sanctuary Day Trip",
    location: "Bangkok, Thailand",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 8765,
    duration: "8 hours",
    price: 85,
    originalPrice: 120,
    discount: 30,
    category: "Tours"
  },
  {
    id: 3,
    title: "Gardens by the Bay & Marina Bay Sands SkyPark",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 15432,
    duration: "4-5 hours",
    price: 32,
    originalPrice: 45,
    discount: 28,
    category: "Attractions"
  },
  {
    id: 4,
    title: "Jeju Island UNESCO Sites Private Tour",
    location: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 3421,
    duration: "10 hours",
    price: 180,
    originalPrice: 220,
    discount: 18,
    category: "Tours"
  },
  {
    id: 5,
    title: "Peak Tram & Sky Terrace 428 Fast-Track",
    location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 9876,
    duration: "3 hours",
    price: 28,
    originalPrice: 35,
    discount: 20,
    category: "Attractions"
  },
  {
    id: 6,
    title: "Uluwatu Temple Sunset & Kecak Fire Dance",
    location: "Bali, Indonesia", 
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 5432,
    duration: "6 hours",
    price: 42,
    originalPrice: 55,
    discount: 24,
    category: "Cultural"
  }
];

const FeaturedActivities = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured activities & attractions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked experiences from our travel experts, rated highly by thousands of travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      -{activity.discount}%
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {activity.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-900">
                        {activity.rating}
                      </span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">
                      {activity.reviews.toLocaleString()} reviews
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {activity.duration}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${activity.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${activity.originalPrice}
                      </span>
                    </div>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-50">
            View all activities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedActivities;

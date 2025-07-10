
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Gift } from "lucide-react";

const AppPromo = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center mb-4">
              <Gift className="h-8 w-8 mr-3" />
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                Special Offer
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get the Klook app & save more
            </h2>
            
            <p className="text-xl mb-8 text-white/90">
              Download our mobile app and enjoy exclusive deals, faster booking, and seamless travel experiences on the go.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <Download className="h-5 w-5" />
                </div>
                <span className="text-lg">Up to 25% off app-exclusive deals</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <Smartphone className="h-5 w-5" />
                </div>
                <span className="text-lg">Book and manage trips offline</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <Gift className="h-5 w-5" />
                </div>
                <span className="text-lg">Earn rewards with every booking</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 flex items-center">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMjBIMjFWMTlIMy4wNjhMMi42NTggMTQuMzQ2TDIwLjE5IDEyLjkxM0wyMC44MjggMTJIMTJWMTBIMjFWOEgxMlY2SDIxVjRIMTJWMkg5VjRIM1Y2SDlWOEgzVjEwSDlWMTJIMS4zNzJMMTIuNjU4IDEzLjM0NkwzIDIwWiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=" 
                  alt="Google Play" 
                  className="w-6 h-6 mr-2" 
                />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
              
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 flex items-center">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjcxIDEyLjI4NUMxOC43MSA5LjM0MSAxNi4xNTUgNyAxMyA3QzkuODQ1IDcgNy4yOSA5LjM0MSA3LjI5IDEyLjI4NUM3LjI5IDE1LjIzIDkuODQ1IDE3LjU3MSAxMyAxNy41NzFDMTYuMTU1IDE3LjU3MSAxOC43MSAxNS4yMyAxOC43MSAxMi4yODVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==" 
                  alt="App Store" 
                  className="w-6 h-6 mr-2" 
                />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-64 h-96 bg-gradient-to-b from-gray-900 to-black rounded-3xl p-2 shadow-2xl">
              <div className="bg-white w-full h-full rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-20 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Klook</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-gray-100 h-4 rounded"></div>
                  <div className="bg-gray-100 h-4 rounded w-3/4"></div>
                  <div className="bg-orange-100 h-20 rounded-lg"></div>
                  <div className="bg-gray-100 h-4 rounded"></div>
                  <div className="bg-gray-100 h-4 rounded w-1/2"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center animate-bounce">
              <span className="text-lg">🎉</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full w-16 h-16 flex items-center justify-center animate-pulse">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;

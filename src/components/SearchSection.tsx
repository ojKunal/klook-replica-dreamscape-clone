
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, MapPin, Calendar, Users, Plane } from "lucide-react";

const SearchSection = () => {
  return (
    <section className="bg-background py-16 -mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-3xl shadow-xl border border-border p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Find Your Perfect Trip</h2>
            <p className="text-muted-foreground">Search from thousands of destinations and packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Destination</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Where to go?" 
                  className="pl-10 h-12 border-border focus:border-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Check-in</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="date"
                  className="pl-10 h-12 border-border focus:border-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Check-out</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="date"
                  className="pl-10 h-12 border-border focus:border-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Travelers</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="2 Adults"
                  className="pl-10 h-12 border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="flex items-end">
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">Popular:</span>
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              <Plane className="mr-1 h-3 w-3" />
              Flight + Hotel
            </Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs">Bali</Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs">Maldives</Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs">Dubai</Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs">Thailand</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;

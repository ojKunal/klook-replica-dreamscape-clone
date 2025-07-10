
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get exclusive travel deals
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about amazing discounts, new destinations, and travel inspiration.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Enter your email address" 
                className="h-12 bg-white text-gray-900 border-0"
              />
            </div>
            <Button 
              size="lg" 
              className="bg-white text-orange-500 hover:bg-gray-100 h-12 px-8"
            >
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-3 text-center">
            Join 2M+ travelers getting exclusive deals. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

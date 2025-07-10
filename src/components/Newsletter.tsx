
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-6">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Amazing Deals
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive travel deals, new destinations, and special offers.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Enter your email address" 
                className="h-12 bg-primary-foreground text-foreground border-0 placeholder:text-muted-foreground"
              />
            </div>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-8"
            >
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-3 text-center">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center space-x-8 mt-12 opacity-60">
          <div className="text-sm">🔒 SSL Secured</div>
          <div className="text-sm">📧 No Spam</div>
          <div className="text-sm">✅ Privacy Protected</div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

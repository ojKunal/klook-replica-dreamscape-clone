
import { Shield, Award, Clock, Headphones, Globe, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Safe & Secure",
    description: "All bookings are protected with SSL encryption and secure payment gateways for your peace of mind."
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "We guarantee the best prices on all our packages. Found a better deal? We'll match it!"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you before, during, and after your trip."
  },
  {
    icon: Headphones,
    title: "Expert Travel Advice",
    description: "Our experienced travel consultants provide personalized recommendations for your perfect trip."
  },
  {
    icon: Globe,
    title: "Worldwide Coverage",
    description: "Access to destinations across 150+ countries with local partnerships for authentic experiences."
  },
  {
    icon: Heart,
    title: "Unforgettable Experiences",
    description: "Carefully curated experiences that create lasting memories and exceed your expectations."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Trip & Thrill?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With over 10 years of experience, we're committed to making your travel dreams come true with unmatched service and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Destinations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

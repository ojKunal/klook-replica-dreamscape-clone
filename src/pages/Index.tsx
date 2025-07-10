
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import PopularDestinations from "../components/PopularDestinations";
import FeaturedActivities from "../components/FeaturedActivities";
import AppPromo from "../components/AppPromo";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SearchSection />
      <PopularDestinations />
      <FeaturedActivities />
      <AppPromo />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

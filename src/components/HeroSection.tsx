import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Grace Community Church"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-accent-gradient bg-clip-text text-transparent">
            Grace Community
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          A place where faith, community, and love come together. Join us in worship, fellowship, and spiritual growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-4 shadow-medium hover:shadow-lg transition-all duration-300">
            Join Us This Sunday
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
          >
            Learn More About Us
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-primary-foreground/70 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
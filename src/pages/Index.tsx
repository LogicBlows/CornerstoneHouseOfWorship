import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Heart, Book } from "lucide-react";
import { Link } from "react-router-dom";
import churchInterior from "@/assets/church-interior.jpg";

const Index = () => {
  const quickLinks = [
    {
      icon: Calendar,
      title: "Sunday Service",
      description: "Join us for worship every Sunday at 9 AM & 11 AM",
      link: "/worship",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "About Us",
      description: "Learn about our mission, vision, and community",
      link: "/about",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Get Involved",
      description: "Discover ministries and ways to serve",
      link: "/ministry",
      color: "text-accent"
    },
    {
      icon: Book,
      title: "Recent Messages",
      description: "Listen to our latest sermons and teachings",
      link: "/pastor",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-gradient">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Welcome to Grace Community
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} to={item.link}>
                  <Card className="h-full shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                        <Icon className={`h-8 w-8 ${item.color}`} />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Featured Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                A Place to Call Home
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're new to faith or have been walking with Jesus for years, 
                Grace Community Church is a place where you can grow, serve, and find 
                meaningful relationships. We believe that everyone has a place in God's 
                family, and we'd love to help you discover yours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link to="/worship">Plan Your Visit</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src={churchInterior}
                alt="Church Interior"
                className="rounded-lg shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

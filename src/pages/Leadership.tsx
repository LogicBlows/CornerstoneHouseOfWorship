import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import Navigation from "@/components/Navigation";
import { Mail, Phone } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Ps. Nirmal Kumar",
      title: "Senior Pastor",
      description: "Ps. Nirmal has been serving our congregation for over 15 years, bringing wisdom, compassion, and biblical insight to our community.",
      email: "pastor@cornerstonehow.com",
      phone: "(555) 123-4567"
    },
    {
      name: "Ps. Mamta Kumar", 
      title: "Co-Pastor",
      description: "Ps. Mamta serves alongside her husband in ministry, bringing a heart for prayer, worship, and caring for the congregation.",
      email: "mamta@cornerstonehow.com",
      phone: "(555) 123-4567"
    },
    {
      name: "Ps. Vidya Grace",
      title: "Associate Pastor",
      description: "Ps. Vidya provides pastoral care and teaches with great passion, helping believers grow deeper in their walk with Christ.",
      email: "vidya@cornerstonehow.com",
      phone: "(555) 234-5678"
    },
    {
      name: "Ashish Spencer",
      title: "Youth Leader",
      description: "Ashish leads our youth ministry, helping young people grow in their faith and develop into strong leaders for the next generation.",
      email: "youth@cornerstonehow.com",
      phone: "(555) 345-6789"
    }
  ];

  return (
    <div className="min-h-screen bg-section-gradient">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Our Leadership
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders who guide our church with wisdom, 
            integrity, and a heart for God's people.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {leaders.map((leader, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto sm:mx-0 flex-shrink-0">
                      <span className="text-2xl font-bold text-muted-foreground">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-center sm:text-left">
                      <CardTitle className="text-2xl text-primary">{leader.name}</CardTitle>
                      <p className="text-accent font-semibold">{leader.title}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {leader.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>{leader.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{leader.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leadership Vision */}
          <Card className="mb-16 shadow-soft">
            <CardHeader>
              <CardTitle className="text-3xl text-primary text-center">Our Leadership Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our leadership team is committed to serving with humility, leading by example, 
                and creating an environment where every person can grow in their relationship 
                with Jesus Christ. We believe in collaborative leadership that empowers others 
                and builds up the body of Christ.
              </p>
            </CardContent>
          </Card>

          {/* Media Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Leadership Media</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MediaPlaceholder
                type="video"
                title="Leadership Testimonies"
                description="Hear from our leaders about their calling and vision"
              />
              <MediaPlaceholder
                type="video"
                title="Teaching Series"
                description="Leadership development and biblical teaching"
              />
              <MediaPlaceholder
                type="image"
                title="Leadership Team Photos"
                description="Meet our leadership team in person"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
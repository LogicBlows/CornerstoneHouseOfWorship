import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import { Mail, Phone } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Pastor John Smith",
      title: "Senior Pastor",
      description: "Pastor John has been serving our congregation for over 15 years, bringing wisdom, compassion, and biblical insight to our community.",
      email: "pastor.john@gracechurch.com",
      phone: "(555) 123-4567"
    },
    {
      name: "Apostle Mary Johnson",
      title: "Apostle & Church Planter",
      description: "Apostle Mary leads our missions and church planting efforts, having established 5 churches across the region.",
      email: "apostle.mary@gracechurch.com",
      phone: "(555) 234-5678"
    },
    {
      name: "Elder David Wilson",
      title: "Board Chairman",
      description: "Elder David provides spiritual guidance and leadership to our church board, ensuring we stay true to our mission.",
      email: "elder.david@gracechurch.com",
      phone: "(555) 345-6789"
    },
    {
      name: "Minister Sarah Brown",
      title: "Youth Pastor",
      description: "Minister Sarah leads our youth ministry, helping young people grow in their faith and develop into strong leaders.",
      email: "youth@gracechurch.com",
      phone: "(555) 456-7890"
    }
  ];

  return (
    <div className="min-h-screen bg-section-gradient">
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
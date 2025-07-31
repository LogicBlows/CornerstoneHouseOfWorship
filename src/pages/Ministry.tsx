import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import Navigation from "@/components/Navigation";
import { Users, Heart, BookOpen, Baby, Music, Globe } from "lucide-react";

const Ministry = () => {
  const ministries = [
    {
      icon: Users,
      name: "Youth Ministry",
      description: "Empowering the next generation through Bible study, fellowship, and service projects.",
      age: "Ages 13-18",
      time: "Saturday 1:00 PM to 4:00 PM"
    },
    {
      icon: Baby,
      name: "Children's Ministry",
      description: "Fun, age-appropriate learning experiences that help children discover God's love.",
      age: "Ages 2-12",
      time: "Sundays during service"
    },
    {
      icon: BookOpen,
      name: "Bible Study Groups",
      description: "Small group Bible studies that meet throughout the week for deeper fellowship.",
      age: "All Ages",
      time: "Various times"
    },
    {
      icon: Heart,
      name: "Community Outreach",
      description: "Serving our local community through food drives, homeless ministry, and volunteer work.",
      age: "All Ages",
      time: "Monthly events"
    },
    {
      icon: Music,
      name: "Worship Ministry",
      description: "Using music and arts to enhance our worship experience and glorify God.",
      age: "All Ages",
      time: "Rehearsals Thursdays"
    },
    {
      icon: Globe,
      name: "Missions",
      description: "Supporting missionaries worldwide and organizing short-term mission trips.",
      age: "All Ages",
      time: "Ongoing support"
    }
  ];

  return (
    <div className="min-h-screen bg-section-gradient">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Our Ministries
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover meaningful ways to grow in faith, serve others, and build 
            lasting relationships in our church community.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl text-primary">{ministry.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {ministry.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="text-accent font-semibold">{ministry.age}</p>
                      <p className="text-muted-foreground">{ministry.time}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        let slug = ministry.name.toLowerCase().replace(/ /g, '-').replace("'s", "s");
                        if (slug === 'worship-ministry') slug = 'worship';
                        if (slug === 'youth-ministry') slug = 'youth-ministry';
                        if (slug === 'childrens-ministry') slug = 'childrens-ministry';
                        if (slug === 'bible-study-groups' || slug === 'community-outreach') slug = 'missions';
                        window.location.href = `/ministry/${slug}`;
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Get Involved Section */}
          <Card className="mb-16 shadow-soft bg-hero-gradient text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Get Involved</CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto space-y-6">
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                Every person has unique gifts and talents that can make a difference. 
                Whether you're called to teach, serve, lead, or support, there's a 
                place for you in our ministry teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Volunteer Today
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Contact Ministry Leader
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Ministry Media */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Ministry in Action</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MediaPlaceholder
                type="video"
                title="Youth Ministry Highlights"
                description="See our youth in action during camps and events"
              />
              <MediaPlaceholder
                type="video"
                title="Community Service Projects"
                description="Our church serving the local community"
              />
              <MediaPlaceholder
                type="image"
                title="Ministry Team Photos"
                description="Meet the volunteers who make it all possible"
              />
              <MediaPlaceholder
                type="video"
                title="Mission Trip Testimonies"
                description="Stories from our international mission work"
              />
              <MediaPlaceholder
                type="image"
                title="Children's Ministry Fun"
                description="Kids learning and growing in their faith"
              />
              <MediaPlaceholder
                type="video"
                title="Worship Team Performances"
                description="Beautiful worship moments from our services"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministry;
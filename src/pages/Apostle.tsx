import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import Navigation from "@/components/Navigation";
import { Calendar, Globe, Users, Flame } from "lucide-react";

const Apostle = () => {
  const recentTeachings = [
    {
      title: "The Apostolic Calling in Modern Times",
      date: "December 12, 2024",
      description: "Understanding the role of apostolic ministry in today's church and how it builds the foundation of faith."
    },
    {
      title: "Church Planting: Expanding God's Kingdom",
      date: "December 5, 2024",
      description: "The vision and strategy for planting new churches and reaching unreached communities with the Gospel."
    },
    {
      title: "Supernatural Signs and Wonders",
      date: "November 28, 2024",
      description: "Exploring the miraculous power of God in today's church and how to move in supernatural ministry."
    }
  ];

  const achievements = [
    { number: "5", description: "Churches Planted" },
    { number: "1000+", description: "Lives Transformed" },
    { number: "15", description: "Years in Ministry" },
    { number: "3", description: "Countries Served" }
  ];

  return (
    <div className="min-h-screen bg-section-gradient">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Word from Apostle
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Receive apostolic wisdom, prophetic insight, and kingdom strategy from 
            Apostle Vaibhav Kapoor's ministry to the nations.
          </p>
        </div>
      </section>

      {/* Apostle's Message */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">A Word from Apostle Vaibhav</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Beloved church family, I greet you in the mighty name of Jesus Christ! 
                  It is my honor to serve as an apostle in this generation, carrying the 
                  mandate to establish churches, equip leaders, and advance God's kingdom 
                  throughout the earth.
                </p>
                <p>
                  The Lord has given me a burden for church planting and missions, seeing 
                  new communities of believers established where Christ is not yet known. 
                  Through apostolic ministry, we see the supernatural power of God released, 
                  signs and wonders manifested, and the Gospel confirmed with power.
                </p>
                <p className="text-primary font-semibold">
                  "But you will receive power when the Holy Spirit comes on you; and you will 
                  be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends 
                  of the earth." - Acts 1:8
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl font-bold text-muted-foreground">VK</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary">Apostle Vaibhav Kapoor</h3>
                <p className="text-muted-foreground">Apostle & Church Planter</p>
                <p className="text-sm text-muted-foreground mt-2">
                  15+ years in apostolic ministry
                </p>
              </div>
            </div>
          </div>

          {/* Ministry Impact */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="py-8">
                  <div className="text-4xl font-bold text-accent mb-2">{achievement.number}</div>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Teachings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Recent Teachings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentTeachings.map((teaching, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{teaching.date}</span>
                    </div>
                    <CardTitle className="text-lg text-primary leading-tight">
                      {teaching.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {teaching.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Flame className="h-4 w-4" />
                      Watch Teaching
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Apostolic Vision */}
          <Card className="mb-16 shadow-soft bg-hero-gradient text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
                <Globe className="h-8 w-8" />
                Apostolic Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto space-y-6">
              <h3 className="text-xl font-semibold">
                "Establishing Kingdom Communities Worldwide"
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                Our apostolic vision is to see thriving churches established in every 
                community, equipped with supernatural power, led by mature believers, 
                and making disciples who transform their regions for Christ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="gap-2">
                  <Users className="h-4 w-4" />
                  Join the Mission
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Partner with Us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Media Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Apostolic Media</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MediaPlaceholder
                type="video"
                title="Church Planting Training"
                description="Equipping believers for church planting ministry"
              />
              <MediaPlaceholder
                type="video"
                title="Prophetic Insights"
                description="Prophetic words and revelations for the church"
              />
              <MediaPlaceholder
                type="video"
                title="Signs and Wonders"
                description="Testimonies of God's miraculous power"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apostle;
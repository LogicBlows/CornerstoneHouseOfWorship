import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import Navigation from "@/components/Navigation";
import communityImage from "@/assets/community-fellowship.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-section-gradient">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            About Our Church
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cornerstone House Of Worship has been serving our community for over 30 years, 
            spreading love, hope, and the Gospel of Jesus Christ.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1990, Cornerstone House Of Worship began as a small group of believers 
                  meeting in a local community center. Today, we are a thriving congregation 
                  of over 500 families united in our love for Christ and commitment to serving others.
                </p>
                <p>
                  Our mission is to create a welcoming environment where people can encounter 
                  God's love, grow in their faith, and make a positive impact in our community 
                  and beyond.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={communityImage}
                alt="Community Fellowship"
                className="rounded-lg shadow-medium w-full h-auto"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-accent text-2xl">Faith</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Growing deeper in our relationship with Jesus Christ through prayer, 
                  study, and worship.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-accent text-2xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building meaningful relationships and supporting one another 
                  through life's joys and challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-accent text-2xl">Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Actively serving our local community and supporting missions 
                  around the world.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Media Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Church in Action</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MediaPlaceholder
                type="video"
                title="Church Welcome Video"
                description="A warm welcome message from our congregation"
              />
              <MediaPlaceholder
                type="image"
                title="Sunday Service"
                description="Experience our vibrant worship services"
              />
              <MediaPlaceholder
                type="image"
                title="Community Events"
                description="Fellowship and outreach activities"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
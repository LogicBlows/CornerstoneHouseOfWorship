import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import { Clock, MapPin, Music, Heart } from "lucide-react";
import worshipImage from "@/assets/worship-hands.jpg";

const Worship = () => {
  return (
    <div className="min-h-screen bg-section-gradient">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Worship With Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us every Sunday as we come together to praise, worship, and 
            experience God's presence in a meaningful way.
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Service Times</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-accent">Sunday Morning</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span>9:00 AM & 11:00 AM</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Main Sanctuary</span>
                </div>
                <p className="text-muted-foreground">
                  Traditional worship service with choir, hymns, and inspiring messages
                </p>
                <Button className="mt-4">Plan Your Visit</Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-accent">Sunday Evening</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span>6:00 PM</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Fellowship Hall</span>
                </div>
                <p className="text-muted-foreground">
                  Contemporary worship with modern music and interactive fellowship
                </p>
                <Button className="mt-4">Join Us Tonight</Button>
              </CardContent>
            </Card>
          </div>

          {/* Worship Experience */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img
                src={worshipImage}
                alt="Worship Experience"
                className="rounded-lg shadow-medium w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Music className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Inspiring Music</h3>
                    <p className="text-muted-foreground">
                      Both traditional hymns and contemporary worship songs led by our talented music ministry
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Meaningful Messages</h3>
                    <p className="text-muted-foreground">
                      Biblical teaching that speaks to real life, delivered with passion and clarity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Worship Media</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MediaPlaceholder
                type="video"
                title="Live Sunday Service"
                description="Watch our most recent worship service"
              />
              <MediaPlaceholder
                type="video"
                title="Worship Music Videos"
                description="Beautiful worship songs from our music ministry"
              />
              <MediaPlaceholder
                type="image"
                title="Worship Gallery"
                description="Photos from our worship services and events"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Worship;
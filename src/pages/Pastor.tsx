import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import Navigation from "@/components/Navigation";
import { Calendar, Play, Book, Heart } from "lucide-react";

const Pastor = () => {
  const recentMessages = [
    {
      title: "Walking in Faith During Difficult Times",
      date: "December 15, 2024",
      description: "A powerful message about trusting God when life gets challenging and finding hope in His promises."
    },
    {
      title: "The Power of Prayer in Our Daily Lives",
      date: "December 8, 2024", 
      description: "Exploring how prayer transforms not just our circumstances, but our hearts and minds."
    },
    {
      title: "Love in Action: Serving Others",
      date: "December 1, 2024",
      description: "Understanding how true love is demonstrated through our service to others and our community."
    }
  ];

  return (
    <div className="min-h-screen bg-section-gradient">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Word from Pastor
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Receive encouragement, biblical wisdom, and spiritual guidance from 
            Ps. Nirmal Kumar's heart to yours.
          </p>
        </div>
      </section>

      {/* Pastor's Message */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">A Message from Ps. Nirmal</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dear beloved congregation and visitors, it is my joy and privilege to 
                  share God's Word with you each week. My heart's desire is to see every 
                  person grow deeper in their relationship with Jesus Christ and discover 
                  the abundant life He offers.
                </p>
                <p>
                  Through these messages, my prayer is that you will find hope, encouragement, 
                  and practical wisdom for your daily walk with the Lord. Whether you're 
                  facing challenges, celebrating victories, or simply seeking to know God 
                  better, these teachings are designed to meet you where you are.
                </p>
                <p className="text-primary font-semibold">
                  "For I know the plans I have for you," declares the Lord, "plans to prosper 
                  you and not to harm you, to give you hope and a future." - Jeremiah 29:11
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl font-bold text-muted-foreground">NK</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary">Ps. Nirmal Kumar</h3>
                <p className="text-muted-foreground">Senior Pastor</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Serving Cornerstone House Of Worship
                </p>
              </div>
            </div>
          </div>

          {/* Recent Messages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Recent Messages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentMessages.map((message, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{message.date}</span>
                    </div>
                    <CardTitle className="text-lg text-primary leading-tight">
                      {message.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {message.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Play className="h-4 w-4" />
                      Watch Message
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Message Series */}
          <Card className="mb-16 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center flex items-center justify-center gap-2">
                <Book className="h-6 w-6" />
                Current Message Series
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-accent mb-4">
                "Foundations of Faith: Building on the Rock"
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A 6-week series exploring the fundamental truths of Christianity and 
                how to build an unshakeable foundation for your spiritual life. Join us 
                as we dive deep into God's Word and discover practical ways to strengthen 
                your faith.
              </p>
              <Button size="lg" className="gap-2">
                <Heart className="h-4 w-4" />
                Join the Series
              </Button>
            </CardContent>
          </Card>

          {/* Media Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Message Media</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MediaPlaceholder
                type="video"
                title="Latest Sunday Message"
                description="This week's inspiring message from Ps. Nirmal"
              />
              <MediaPlaceholder
                type="video"
                title="Midweek Bible Study"
                description="Join our Wednesday evening Bible study sessions"
              />
              <MediaPlaceholder
                type="video"
                title="Special Holiday Messages"
                description="Seasonal messages for Easter, Christmas, and more"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pastor;
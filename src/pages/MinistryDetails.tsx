import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Music, Heart, BookOpen } from "lucide-react";

const MinistryDetails = () => {
  const { ministry } = useParams();
  const navigate = useNavigate();

  interface MinistryData {
    title: string;
    icon: any;
    description: string;
    team?: string[];
    teamTitle?: string;
    content: string;
    additionalInfo?: string;
  }

  const ministryData: Record<string, MinistryData> = {
    worship: {
      title: "Worship Ministry",
      icon: Music,
      description: "Using music and arts to enhance our worship experience and glorify God.",
      team: [
        "Ashish Spencer",
        "Victor Matthew", 
        "Subhojeet Nandy",
        "Deepanshu Singh",
        "Joy Francis",
        "Ashish Brown",
        "Jonathan Kumar"
      ],
      content: "Our worship team is passionate about creating an atmosphere where God's presence can be felt. Each member brings their unique gifts and talents to serve the congregation and lead them into meaningful worship. We believe that worship is not just about music, but about creating a heart connection with God."
    },
    children: {
      title: "Children's Ministry",
      icon: Users,
      description: "Fun, age-appropriate learning experiences that help children discover God's love.",
      teamTitle: "Sunday School Leaders",
      team: [
        "Ps. Vidya Grace",
        "Ps. Mamta Kumar",
        "Savita"
      ],
      content: "Our children's ministry is dedicated to nurturing young hearts and minds in the love of Christ. Our experienced leaders create engaging, age-appropriate lessons that help children understand God's love and develop a strong foundation of faith. We believe every child is precious to God and deserves excellent care and biblical teaching."
    },
    youth: {
      title: "Youth Ministry", 
      icon: Heart,
      description: "Empowering the next generation through Bible study, fellowship, and service projects.",
      team: [
        "Ps. Nirmal Kumar",
        "Ashish Spencer", 
        "Victor Matthew"
      ],
      content: "Our youth ministry leaders are also part of the GAP Worship Music Band, where Brother Ashish and Victor serve as worship leaders in the church. Ashish plays guitar and Victor plays drums, and through songs of worship, they teach the youth how to play instruments and inspire them to lead worship. This ministry combines faith, music, and mentorship to develop the next generation of Christian leaders and worship leaders.",
      additionalInfo: "GAP Worship Music Band focuses on equipping young people with musical skills while deepening their spiritual walk. We believe music is a powerful tool for worship and ministry."
    },
    missions: {
      title: "Missions",
      icon: BookOpen,
      description: "Supporting missionaries worldwide and organizing mission work.",
      content: "We believe worship is the magnet that draws God's presence. And Word and Worship go hand in hand. Our mission is to equip people and churches with worship so that not only they can sing but lead worship that brings God's presence. We have recently started teaching youth about worship and music, believing that when young people learn to worship with excellence, they become powerful instruments in God's hands for revival and transformation."
    }
  };

  const currentMinistry = ministryData[ministry as keyof typeof ministryData];

  if (!currentMinistry) {
    return (
      <div className="min-h-screen bg-section-gradient">
        <Navigation />
        <div className="py-20 px-4 text-center">
          <h1 className="text-2xl text-primary">Ministry not found</h1>
          <Button onClick={() => navigate('/ministry')} className="mt-4">
            Back to Ministries
          </Button>
        </div>
      </div>
    );
  }

  const Icon = currentMinistry.icon;

  return (
    <div className="min-h-screen bg-section-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => navigate('/ministry')}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Ministries
          </Button>
          
          <div className="text-center mb-12">
            <div className="mx-auto w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Icon className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {currentMinistry.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {currentMinistry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Ministry Description */}
          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {currentMinistry.content}
              </p>
              {currentMinistry.additionalInfo && (
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  {currentMinistry.additionalInfo}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Team Section */}
          {currentMinistry.team && (
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  {currentMinistry.teamTitle || "Ministry Team"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentMinistry.team.map((member, index) => (
                    <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-bold text-accent">
                          {member.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="font-semibold text-primary">{member}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Call to Action */}
          <Card className="shadow-soft bg-hero-gradient text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Join our {currentMinistry.title.toLowerCase()} and be part of something meaningful. 
                Whether you're experienced or just starting, there's a place for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Join Ministry
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Leader
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MinistryDetails;
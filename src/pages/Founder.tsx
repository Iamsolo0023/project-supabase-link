import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Award, Building2, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Founder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Meet the <span className="text-primary">Founder</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transforming real estate with vision, expertise, and unwavering commitment to excellence.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Sarah Johnson</h2>
              <p className="text-lg text-muted-foreground">
                CEO & Founder of Premier Properties
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-primary p-1">
              <div className="aspect-square rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-subtle flex items-center justify-center">
                  <Users className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center text-foreground">My Story</h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With over 15 years of experience in the real estate industry, I founded Premier Properties 
                  with a simple yet powerful vision: to revolutionize how people buy, sell, and invest in real estate.
                </p>
                
                <p>
                  My journey began as a junior agent at a traditional real estate firm, where I quickly 
                  realized the industry needed a fresh approach. Clients deserved more than just transactions—they 
                  deserved partnerships, transparency, and innovative solutions tailored to their unique needs.
                </p>
                
                <p>
                  Today, Premier Properties stands as a testament to what's possible when you combine 
                  deep market expertise with cutting-edge technology and genuine care for every client. 
                  We've helped over 2,000 families find their dream homes and guided countless investors 
                  to successful property investments.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Achievements */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Achievements & Recognition</h3>
          <p className="text-lg text-muted-foreground">Leading the industry through innovation and excellence</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <CardContent className="p-0 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">Top Agent</h4>
                <p className="text-muted-foreground">5 Years Running</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <CardContent className="p-0 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">$500M+</h4>
                <p className="text-muted-foreground">Properties Sold</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <CardContent className="p-0 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">2,000+</h4>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <CardContent className="p-0 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">98%</h4>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="border-0 shadow-elegant bg-gradient-primary text-white">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">My Vision</h3>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              "To create a world where real estate transactions are seamless, transparent, and empowering. 
              Where every client feels confident, informed, and supported throughout their journey. 
              That's the future we're building at Premier Properties."
            </p>
            <div className="mt-8">
              <Link to="/">
                <Button variant="secondary" size="lg">
                  Work With Our Team
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Founder;
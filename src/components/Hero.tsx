import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              BUILT WITH{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                BELIEF
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 mb-8">
              DELIVERED WITH{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                HEART
              </span>
            </h2>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              Creating homes that embody peace, safety, and pride. 25+ years of excellence 
              in delivering quality real estate projects with heartfelt commitment.
            </p>
          </div>

          <div className="animate-scale-in flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group text-lg px-8 py-6">
              View Our Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 group text-lg px-8 py-6"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
              Watch Story
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-white/70">Years of Excellence</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                30+
              </div>
              <div className="text-white/70">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                180+
              </div>
              <div className="text-white/70">Mn. Sq. Ft. Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                170+
              </div>
              <div className="text-white/70">Mn. Sq. Ft. Underway</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
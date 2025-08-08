import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Palette, Zap } from "lucide-react";

const Hero = () => {
  const scrollToGenerator = () => {
    const element = document.getElementById('dream-generator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-hero opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-dream border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium bg-gradient-primary bg-clip-text text-transparent">
              Powered by Advanced AI
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dreams
            </span>
            <br />
            Into Stunning{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Artwork
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Harness the power of AI to create breathtaking art from your imagination.
            Just describe your vision, and watch it come to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={scrollToGenerator}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Creating Art
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6"
            >
              <Palette className="w-5 h-5 mr-2" />
              View Gallery
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-glow">
                <Wand2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Advanced AI models create unique artwork from your descriptions
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-secondary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-glow">
                <Zap className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Generate stunning artwork in seconds, not hours
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-accent to-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-glow">
                <Palette className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Unlimited Style</h3>
              <p className="text-sm text-muted-foreground">
                From photorealistic to abstract, create in any style you imagine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
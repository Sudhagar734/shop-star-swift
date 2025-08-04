import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Laptop, Headphones, ShoppingBag } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Best Deals
              </span>
              <br />
              <span className="text-foreground">On Electronics</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover amazing discounts on smartphones, laptops, headphones and more. 
              Shop from top brands with fast delivery and easy returns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Categories
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">5★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img 
                src={heroBanner} 
                alt="Shopping Experience" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-4 -left-4 bg-card p-3 rounded-full shadow-lg animate-bounce">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute top-8 -right-8 bg-card p-3 rounded-full shadow-lg animate-bounce delay-200">
              <Laptop className="w-6 h-6 text-secondary" />
            </div>
            <div className="absolute -bottom-4 left-8 bg-card p-3 rounded-full shadow-lg animate-bounce delay-300">
              <Headphones className="w-6 h-6 text-accent" />
            </div>
            <div className="absolute bottom-12 -right-4 bg-card p-3 rounded-full shadow-lg animate-bounce delay-100">
              <ShoppingBag className="w-6 h-6 text-success" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
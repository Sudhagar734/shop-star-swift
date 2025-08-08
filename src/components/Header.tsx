import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Palette, Menu, X, Github, Twitter } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-xl shadow-glow">
            <Palette className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DreamArt
            </h1>
            <p className="text-xs text-muted-foreground leading-none">
              AI Art Generator
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Gallery
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <Github className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Twitter className="w-4 h-4" />
          </Button>
          <Button size="sm" className="bg-gradient-primary">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/40">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#gallery" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Gallery
            </a>
            <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" className="bg-gradient-primary flex-1">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
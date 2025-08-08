import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Wand2 } from "lucide-react";

interface DreamInputProps {
  onGenerate: (dream: string) => void;
  isGenerating: boolean;
}

const DreamInput = ({ onGenerate, isGenerating }: DreamInputProps) => {
  const [dream, setDream] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dream.trim()) {
      onGenerate(dream.trim());
    }
  };

  const dreamPrompts = [
    "A mystical forest with glowing trees under a starry night sky",
    "A futuristic city floating in the clouds with neon lights",
    "An underwater palace with coral gardens and swimming dolphins",
    "A magical library with floating books and crystal chandeliers",
    "A steampunk workshop with clockwork inventions and brass gears"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 shadow-card backdrop-blur-sm border border-border/50">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-full shadow-glow">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Describe Your Dream
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Turn your imagination into stunning artwork with AI
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Textarea
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              placeholder="Describe your dream scene in detail... The more descriptive, the better the result!"
              className="min-h-32 text-lg resize-none bg-background/80 border-border/50 focus:border-primary/50 focus:ring-primary/20"
              disabled={isGenerating}
            />
            
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground font-medium">Try these:</span>
              {dreamPrompts.map((prompt, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setDream(prompt)}
                  className="text-xs bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent-foreground px-3 py-1 rounded-full transition-all duration-200 hover:scale-105"
                  disabled={isGenerating}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={!dream.trim() || isGenerating}
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-[1.02] text-lg py-6"
          >
            {isGenerating ? (
              <>
                <Wand2 className="w-5 h-5 mr-2 animate-spin" />
                Creating Your Art...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Transform Dream to Art
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DreamInput;
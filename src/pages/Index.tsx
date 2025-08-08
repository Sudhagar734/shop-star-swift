import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DreamInput from "@/components/DreamInput";
import ArtGallery from "@/components/ArtGallery";

interface GeneratedArt {
  id: string;
  prompt: string;
  imageUrl: string;
  timestamp: Date;
  liked: boolean;
}

const Index = () => {
  const [artworks, setArtworks] = useState<GeneratedArt[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (dream: string) => {
    setIsGenerating(true);
    
    try {
      // Simulate AI image generation - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // For demo, using a placeholder image service
      const newArtwork: GeneratedArt = {
        id: Date.now().toString(),
        prompt: dream,
        imageUrl: `https://picsum.photos/512/512?random=${Date.now()}`,
        timestamp: new Date(),
        liked: false
      };
      
      setArtworks(prev => [newArtwork, ...prev]);
      toast.success("Your dream has been transformed into art!");
      
    } catch (error) {
      toast.error("Failed to generate artwork. Please try again.");
      console.error("Generation error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleLike = (id: string) => {
    setArtworks(prev => prev.map(art => 
      art.id === id ? { ...art, liked: !art.liked } : art
    ));
  };

  const handleShare = async (artwork: GeneratedArt) => {
    if (navigator.share) {
      await navigator.share({
        title: 'Dream Art Creation',
        text: `Check out this amazing AI-generated artwork: "${artwork.prompt}"`,
        url: artwork.imageUrl
      });
    } else {
      await navigator.clipboard.writeText(artwork.imageUrl);
      toast.success("Image URL copied to clipboard!");
    }
  };

  const handleDownload = (artwork: GeneratedArt) => {
    const link = document.createElement('a');
    link.href = artwork.imageUrl;
    link.download = `dream-art-${artwork.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Download started!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section id="dream-generator" className="py-16 px-4">
        <DreamInput onGenerate={handleGenerate} isGenerating={isGenerating} />
      </section>
      
      <section id="gallery" className="py-16 px-4 bg-muted/20">
        <ArtGallery 
          artworks={artworks}
          onLike={handleLike}
          onShare={handleShare}
          onDownload={handleDownload}
        />
      </section>
    </div>
  );
};

export default Index;

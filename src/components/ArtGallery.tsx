import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Heart, Share2, Expand } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GeneratedArt {
  id: string;
  prompt: string;
  imageUrl: string;
  timestamp: Date;
  liked: boolean;
}

interface ArtGalleryProps {
  artworks: GeneratedArt[];
  onLike: (id: string) => void;
  onShare: (artwork: GeneratedArt) => void;
  onDownload: (artwork: GeneratedArt) => void;
}

const ArtGallery = ({ artworks, onLike, onShare, onDownload }: ArtGalleryProps) => {
  const [selectedArt, setSelectedArt] = useState<GeneratedArt | null>(null);

  if (artworks.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gradient-dream rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <Heart className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-muted-foreground mb-2">
          No artworks yet
        </h3>
        <p className="text-muted-foreground">
          Start by describing your first dream above
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Your Dream Gallery</h3>
        <p className="text-muted-foreground">
          {artworks.length} masterpiece{artworks.length !== 1 ? 's' : ''} created
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border border-border/50"
          >
            <div className="relative overflow-hidden">
              <AspectRatio ratio={1}>
                <img
                  src={artwork.imageUrl}
                  alt={artwork.prompt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </AspectRatio>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setSelectedArt(artwork)}
                  className="bg-background/90 backdrop-blur-sm"
                >
                  <Expand className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {artwork.prompt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {artwork.timestamp.toLocaleDateString()}
                </span>
                
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onLike(artwork.id)}
                    className={`h-8 w-8 p-0 ${artwork.liked ? 'text-red-500' : 'text-muted-foreground'}`}
                  >
                    <Heart className={`w-4 h-4 ${artwork.liked ? 'fill-current' : ''}`} />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onShare(artwork)}
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onDownload(artwork)}
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for expanded view */}
      {selectedArt && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArt(null)}
        >
          <div
            className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <AspectRatio ratio={16/9}>
                <img
                  src={selectedArt.imageUrl}
                  alt={selectedArt.prompt}
                  className="w-full h-full object-contain rounded-lg"
                />
              </AspectRatio>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Dream Description:</h4>
                <p className="text-muted-foreground mb-4">{selectedArt.prompt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Created on {selectedArt.timestamp.toLocaleDateString()}
                  </span>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onShare(selectedArt)}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    
                    <Button
                      size="sm"
                      onClick={() => onDownload(selectedArt)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;
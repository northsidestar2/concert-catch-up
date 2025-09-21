import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

interface ArtistCardProps {
  name: string;
  image: string;
  genre: string;
  listeners: string;
}

export const ArtistCard = ({ name, image, genre, listeners }: ArtistCardProps) => {
  return (
    <Card className="p-4 bg-gradient-card border-border shadow-card hover:border-primary/50 transition-all duration-300 group">
      <div className="space-y-4">
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm opacity-90">{genre}</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{listeners} monthly listeners</span>
          </div>
          <Button variant="concert" className="w-full" size="sm">
            <Calendar className="w-4 h-4" />
            Find Concerts
          </Button>
        </div>
      </div>
    </Card>
  );
};
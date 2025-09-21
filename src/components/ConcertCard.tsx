import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface ConcertCardProps {
  artist: string;
  venue: string;
  date: string;
  city: string;
  country: string;
  price: string;
  image: string;
}

export const ConcertCard = ({ artist, venue, date, city, country, price, image }: ConcertCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card border-border shadow-card hover:border-primary/50 transition-all duration-300 group">
      <div className="space-y-4">
        <div className="flex gap-4">
          <img 
            src={image} 
            alt={artist}
            className="w-16 h-16 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-foreground">{artist}</h3>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                {price}
              </Badge>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{venue}, {city}, {country}</span>
              </div>
            </div>
          </div>
        </div>
        <Button variant="spotify" className="w-full" size="sm">
          <ExternalLink className="w-4 h-4" />
          Get Tickets
        </Button>
      </div>
    </Card>
  );
};
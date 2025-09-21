import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SpotifyConnect } from "@/components/SpotifyConnect";
import { ArtistCard } from "@/components/ArtistCard";
import { ConcertCard } from "@/components/ConcertCard";
import { Music, Search, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-concert.jpg";

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("United States");

  // Mock data for demonstration
  const mockArtists = [
    {
      name: "Taylor Swift",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      genre: "Pop",
      listeners: "94.2M"
    },
    {
      name: "The Weeknd",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
      genre: "R&B",
      listeners: "87.5M"
    },
    {
      name: "Bad Bunny",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
      genre: "Reggaeton",
      listeners: "71.8M"
    }
  ];

  const mockConcerts = [
    {
      artist: "Taylor Swift",
      venue: "MetLife Stadium",
      date: "May 15, 2024",
      city: "East Rutherford",
      country: "United States",
      price: "From $85",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop"
    },
    {
      artist: "The Weeknd",
      venue: "Madison Square Garden",
      date: "June 2, 2024",
      city: "New York",
      country: "United States",
      price: "From $120",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-90"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <div className="space-y-4 animate-float">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Never Miss Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Favorite Artists</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Connect your Spotify and discover concerts from artists you love, right in your area
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="spotify" size="lg" className="px-8 text-lg h-14">
                <Music className="w-6 h-6" />
                Connect Spotify
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Available in 50+ countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {!isConnected ? (
          <div className="flex justify-center">
            <SpotifyConnect />
          </div>
        ) : (
          <>
            {/* Your Artists */}
            <section className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Top Artists</h2>
                <p className="text-muted-foreground text-lg">Based on your Spotify listening history</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockArtists.map((artist, index) => (
                  <ArtistCard key={index} {...artist} />
                ))}
              </div>
            </section>

            {/* Upcoming Concerts */}
            <section className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Upcoming Concerts</h2>
                  <p className="text-muted-foreground text-lg">In {selectedCountry}</p>
                </div>
                
                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search location..." 
                      className="pl-10 bg-card border-border w-64"
                    />
                  </div>
                  <Button variant="outline" size="default">
                    <Calendar className="w-4 h-4" />
                    Filters
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockConcerts.map((concert, index) => (
                  <ConcertCard key={index} {...concert} />
                ))}
              </div>
              
              <div className="text-center">
                <Button variant="concert" size="lg">
                  Load More Concerts
                </Button>
              </div>
            </section>
          </>
        )}

        {/* Features */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple steps to never miss your favorite artists live
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: "Connect Spotify",
                description: "Link your account to access your music taste and top artists"
              },
              {
                icon: Search,
                title: "We Scan For You",
                description: "Our system monitors concert announcements for your favorite artists"
              },
              {
                icon: Calendar,
                title: "Get Notified",
                description: "Receive alerts when artists you love announce shows in your area"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 text-center bg-gradient-card border-border shadow-card">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-primary/20">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
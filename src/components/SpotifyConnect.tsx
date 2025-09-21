import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music } from "lucide-react";

export const SpotifyConnect = () => {
  const handleConnect = () => {
    // This will be implemented with Supabase integration
    console.log("Connect to Spotify");
  };

  return (
    <Card className="p-8 bg-gradient-card border-border shadow-card">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-primary/20 animate-pulse-glow">
            <Music className="w-12 h-12 text-primary" />
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">Connect Your Spotify</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Link your Spotify account to discover concerts from your favorite artists
          </p>
        </div>
        <Button variant="spotify" size="lg" onClick={handleConnect} className="px-8">
          <Music className="w-5 h-5" />
          Connect to Spotify
        </Button>
        <p className="text-sm text-muted-foreground">
          We'll only access your top artists and listening history
        </p>
      </div>
    </Card>
  );
};
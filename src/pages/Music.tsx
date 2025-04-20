
import { Playlist, Music2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PlaylistItem {
  title: string;
  description: string;
  url: string;
  songs: number;
}

const playlists: PlaylistItem[] = [
  {
    title: "Coding & Focus",
    description: "Perfect beats for deep work and coding sessions",
    url: "https://youtube.com/playlist?list=PLbVHz4urQBZnGEMnxWxJDrT8_BqpL5bL9",
    songs: 42
  },
  {
    title: "Chill Vibes",
    description: "Relaxing tunes for unwinding",
    url: "https://youtube.com/playlist?list=PLbVHz4urQBZnHEv_yYxP4HqTz_BGG6L3k",
    songs: 35
  },
  {
    title: "Workout Energy",
    description: "High-energy tracks for intense workouts",
    url: "https://youtube.com/playlist?list=PLbVHz4urQBZnKJ8L5QXD9R6K9w_BjT5Lm",
    songs: 28
  }
];

export default function Music() {
  return (
    <div className="min-h-screen bg-navy pt-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <Music2 className="w-8 h-8 text-highlight" />
          <h1 className="text-3xl font-bold">My Music Collection</h1>
        </div>
        
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Music has always been an integral part of my life. Here are some carefully curated playlists 
          that I've put together for different moods and occasions. Feel free to explore and enjoy!
        </p>

        <ScrollArea className="h-[70vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playlists.map((playlist, index) => (
              <a 
                key={index}
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="transition-all duration-300 hover:border-highlight hover:shadow-lg hover:shadow-highlight/10">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Playlist className="w-5 h-5 text-highlight" />
                      <CardTitle>{playlist.title}</CardTitle>
                    </div>
                    <CardDescription>{playlist.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {playlist.songs} tracks
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

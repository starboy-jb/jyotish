
import { Music2, Youtube } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface PlaylistItem {
  title: string;
  description: string;
  url: string;
  songs: number;
  category: 'dance' | 'chill' | 'focus';
}

const playlists: PlaylistItem[] = [
  {
    title: "Dance Vibes",
    description: "Perfect beats to get you moving and grooving",
    url: "https://music.youtube.com/playlist?list=PLlBkOTkkcXH4wcERvZ5ebsEgS_vTmBqSJ",
    songs: 45,
    category: 'dance'
  },
  {
    title: "Feels Good",
    description: "Music that lifts your spirits and brightens your day",
    url: "https://music.youtube.com/playlist?list=PLlBkOTkkcXH6lJ7AlBxdW1uuYeV34NL2Q",
    songs: 38,
    category: 'chill'
  },
  {
    title: "Lofi Beats",
    description: "Relaxing lofi tunes for focus and chill vibes",
    url: "https://music.youtube.com/playlist?list=PLlBkOTkkcXH57em26Iy_geI-uc629muhg",
    songs: 52,
    category: 'focus'
  }
];

export default function Music() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy-dark to-black pt-20">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-highlight to-highlight-light rounded-full blur opacity-30"></div>
            <Music2 className="w-16 h-16 text-highlight relative" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-r from-highlight to-highlight-light bg-clip-text text-transparent">
            My Music Collection
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            Music has the power to move, inspire, and transform. Here are my carefully curated playlists 
            that accompany me through different moments of life.
          </p>
        </div>

        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {playlists.map((playlist, index) => (
              <a 
                key={index}
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group transform transition-all duration-300 hover:scale-105"
              >
                <Card className="h-full bg-navy-light/50 backdrop-blur-sm border-muted/20 transition-all duration-300 hover:border-highlight group-hover:shadow-xl group-hover:shadow-highlight/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant="outline" 
                        className="bg-highlight/10 text-highlight border-highlight/20"
                      >
                        {playlist.category}
                      </Badge>
                      <Youtube className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl group-hover:text-highlight transition-colors">
                        {playlist.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground/80">
                        {playlist.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Music2 className="w-4 h-4 text-highlight" />
                      <p className="text-sm text-muted-foreground">
                        {playlist.songs} tracks
                      </p>
                    </div>
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

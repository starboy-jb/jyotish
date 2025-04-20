
import { Music2, Youtube, Play, ListMusic, DiscAlbum, Headphones } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { usePlaylistData } from "@/hooks/usePlaylistData";

interface PlaylistItem {
  title: string;
  description: string;
  url: string;
  songs: number;
  category: 'dance' | 'chill' | 'focus';
  icon: typeof Music2;
  gradient: string;
}

const playlists: PlaylistItem[] = [
  {
    title: "Dance Vibes",
    description: "Perfect beats to get you moving and grooving",
    url: "https://music.youtube.com/playlist?list=PLlBkOTkkcXH4wcERvZ5ebsEgS_vTmBqSJ",
    songs: 45,
    category: 'dance',
    icon: DiscAlbum,
    gradient: "from-pink-500 via-red-500 to-yellow-500"
  },
  {
    title: "Feels Good",
    description: "Music that lifts your spirits and brightens your day",
    url: "https://music.youtube.com/playlist?list=PLlBkOTkkcXH6lJ7AlBxdW1uuYeV34NL2Q",
    songs: 38,
    category: 'chill',
    icon: Headphones,
    gradient: "from-purple-500 via-pink-500 to-red-500"
  },
  {
    title: "Lofi Beats",
    description: "Relaxing lofi tunes for focus and chill vibes",
    url: "https://music.youtube.com/playlist?list=PLlBkOTkkcXH57em26Iy_geI-uc629muhg",
    songs: 52,
    category: 'focus',
    icon: ListMusic,
    gradient: "from-blue-500 via-purple-500 to-pink-500"
  }
];

export default function Music() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      
      <div className="relative section-container pt-24">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-75 animate-pulse" />
            <Music2 className="w-20 h-20 text-white relative" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
            My Music Vibes
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-lg">
            Dive into my carefully curated collection of playlists. Each one is crafted to match a mood, 
            a moment, or a memory.
          </p>
        </div>

        <ScrollArea className="h-[calc(100vh-300px)] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playlists.map((playlist, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <Card className={`group relative overflow-hidden bg-gradient-to-br ${playlist.gradient} bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-0 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20`}>
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-0" />
                    <CardHeader className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <Badge 
                          variant="outline" 
                          className="bg-white/10 backdrop-blur-md border-white/20 text-white"
                        >
                          {playlist.category}
                        </Badge>
                        <playlist.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-white group-hover:text-white/90 transition-colors">
                        {playlist.title}
                      </CardTitle>
                      <CardDescription className="text-gray-200 group-hover:text-white/70">
                        {playlist.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/80">
                          <ListMusic className="w-4 h-4" />
                          <p className="text-sm">{playlist.songs} tracks</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="bg-white/10 border-white/20 hover:bg-white/20"
                          onClick={() => window.open(playlist.url, '_blank')}
                        >
                          <Play className="w-4 h-4 text-white" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-black/80 backdrop-blur-xl border-white/10">
                  <div className="flex justify-between space-x-4">
                    <Youtube className="h-4 w-4 text-red-500" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Open in YouTube Music</h4>
                      <p className="text-sm text-gray-400">
                        Click to listen to this playlist on YouTube Music
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

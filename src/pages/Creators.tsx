import { useState } from "react";
import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Users, Star, Eye, Heart } from "lucide-react";

const Creators = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const creators = [
    {
      id: "1",
      name: "Sarah Chen",
      avatar: undefined,
      verified: true,
      bio: "FinTech entrepreneur passionate about democratizing financial literacy through AI-powered solutions.",
      location: "San Francisco, CA",
      expertise: ["FinTech", "AI/ML", "Mobile Development"],
      stats: {
        ideas: 12,
        followers: 2450,
        totalViews: 15600,
        totalLikes: 890
      },
      joinedDate: "2023",
      featuredIdea: "AI-Powered Personal Finance Assistant"
    },
    {
      id: "2",
      name: "Marcus Rodriguez",
      avatar: undefined,
      verified: true,
      bio: "Sustainability advocate building the future of eco-conscious commerce and delivery systems.",
      location: "Austin, TX",
      expertise: ["Sustainability", "E-commerce", "Logistics"],
      stats: {
        ideas: 8,
        followers: 1820,
        totalViews: 12300,
        totalLikes: 567
      },
      joinedDate: "2023",
      featuredIdea: "Sustainable Food Delivery Network"
    },
    {
      id: "3",
      name: "Emma Wilson",
      avatar: undefined,
      verified: true,
      bio: "EdTech innovator focused on creating personalized learning experiences through gamification.",
      location: "London, UK",
      expertise: ["Education", "Mobile Apps", "Gamification"],
      stats: {
        ideas: 15,
        followers: 3200,
        totalViews: 22100,
        totalLikes: 1340
      },
      joinedDate: "2022",
      featuredIdea: "Micro-Learning Language App"
    },
    {
      id: "4",
      name: "David Kim",
      avatar: undefined,
      verified: true,
      bio: "AR/VR developer revolutionizing how people interact with digital commerce and spatial computing.",
      location: "Seoul, South Korea",
      expertise: ["AR/VR", "E-commerce", "Unity Development"],
      stats: {
        ideas: 6,
        followers: 1650,
        totalViews: 9800,
        totalLikes: 445
      },
      joinedDate: "2023",
      featuredIdea: "AR Interior Design Marketplace"
    },
    {
      id: "5",
      name: "Alex Thompson",
      avatar: undefined,
      verified: false,
      bio: "Remote work specialist building tools to enhance distributed team collaboration and productivity.",
      location: "Toronto, Canada",
      expertise: ["Productivity", "Remote Work", "WebRTC"],
      stats: {
        ideas: 9,
        followers: 890,
        totalViews: 7600,
        totalLikes: 234
      },
      joinedDate: "2023",
      featuredIdea: "Remote Team Collaboration Hub"
    },
    {
      id: "6",
      name: "Lisa Park",
      avatar: undefined,
      verified: false,
      bio: "Community organizer passionate about local sustainability and neighborhood engagement platforms.",
      location: "Portland, OR",
      expertise: ["Community Building", "Sustainability", "Web Development"],
      stats: {
        ideas: 4,
        followers: 567,
        totalViews: 4200,
        totalLikes: 189
      },
      joinedDate: "2024",
      featuredIdea: "Community Garden Management"
    },
    {
      id: "7",
      name: "Jennifer Walsh",
      avatar: undefined,
      verified: true,
      bio: "IoT engineer creating smart solutions for energy efficiency and environmental monitoring.",
      location: "Denver, CO",
      expertise: ["IoT", "Energy Systems", "Arduino"],
      stats: {
        ideas: 7,
        followers: 1230,
        totalViews: 8900,
        totalLikes: 412
      },
      joinedDate: "2023",
      featuredIdea: "Smart Home Energy Optimizer"
    },
    {
      id: "8",
      name: "Mike Johnson",
      avatar: undefined,
      verified: true,
      bio: "VR fitness pioneer combining immersive technology with health and wellness applications.",
      location: "Los Angeles, CA",
      expertise: ["VR/AR", "Health & Fitness", "Unity"],
      stats: {
        ideas: 5,
        followers: 1890,
        totalViews: 11200,
        totalLikes: 678
      },
      joinedDate: "2022",
      featuredIdea: "Virtual Reality Fitness Studio"
    }
  ];

  const filteredCreators = creators.filter(creator =>
    creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    creator.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
    creator.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Featured Creators</h1>
          <p className="text-lg text-muted-foreground">
            Meet the innovative minds behind the best startup and project ideas
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search creators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{creators.length}</div>
              <div className="text-sm text-muted-foreground">Total Creators</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{creators.filter(c => c.verified).length}</div>
              <div className="text-sm text-muted-foreground">Verified</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Eye className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{creators.reduce((sum, c) => sum + c.stats.totalViews, 0).toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Heart className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{creators.reduce((sum, c) => sum + c.stats.totalLikes, 0).toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Likes</div>
            </CardContent>
          </Card>
        </div>

        {/* Creators Grid */}
        {filteredCreators.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCreators.map((creator) => (
              <Card key={creator.id} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={creator.avatar} alt={creator.name} />
                      <AvatarFallback className="bg-gradient-primary text-white text-lg">
                        {creator.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{creator.name}</h3>
                    {creator.verified && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{creator.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{creator.bio}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Expertise */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {creator.expertise.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold">{creator.stats.ideas}</div>
                      <div className="text-xs text-muted-foreground">Ideas</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{creator.stats.followers}</div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                  </div>

                  {/* Featured Idea */}
                  <div>
                    <h4 className="text-sm font-medium mb-1">Featured Idea</h4>
                    <p className="text-xs text-muted-foreground">{creator.featuredIdea}</p>
                  </div>

                  {/* Action Button */}
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No creators found matching your search</p>
            <Button variant="outline" onClick={() => setSearchTerm("")}>
              Clear Search
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Creators;
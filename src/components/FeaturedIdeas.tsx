import IdeaCard from "./IdeaCard";

const FeaturedIdeas = () => {
  const sampleIdeas = [
    {
      title: "AI-Powered Personal Finance Assistant",
      description: "A smart budgeting app that uses AI to analyze spending patterns, predict expenses, and provide personalized financial advice. Perfect for millennials who want to take control of their finances.",
      category: "FinTech",
      difficulty: "Intermediate" as const,
      creator: {
        name: "Sarah Chen",
        avatar: undefined,
        verified: true
      },
      stats: {
        views: 1240,
        likes: 89,
        rating: 4.8
      },
      tools: ["React Native", "TensorFlow", "Stripe API", "PostgreSQL"],
      trending: true
    },
    {
      title: "Sustainable Food Delivery Network",
      description: "Connect local restaurants with eco-conscious customers through a platform that prioritizes sustainable packaging, local sourcing, and carbon-neutral delivery options.",
      category: "Food & Beverage",
      difficulty: "Advanced" as const,
      creator: {
        name: "Marcus Rodriguez",
        avatar: undefined,
        verified: true
      },
      stats: {
        views: 890,
        likes: 67,
        rating: 4.6
      },
      tools: ["Next.js", "Google Maps API", "Firebase", "Tailwind CSS"],
      trending: false
    },
    {
      title: "Remote Team Collaboration Hub",
      description: "A unified workspace that combines video calling, project management, and real-time collaboration tools specifically designed for distributed teams.",
      category: "Productivity",
      difficulty: "Intermediate" as const,
      creator: {
        name: "Alex Thompson",
        avatar: undefined,
        verified: false
      },
      stats: {
        views: 756,
        likes: 45,
        rating: 4.4
      },
      tools: ["WebRTC", "Socket.io", "MongoDB", "Docker"],
      trending: false
    },
    {
      title: "Micro-Learning Language App",
      description: "Learn new languages through 3-minute daily sessions using spaced repetition, gamification, and AI-generated conversations tailored to your interests.",
      category: "Education",
      difficulty: "Beginner" as const,
      creator: {
        name: "Emma Wilson",
        avatar: undefined,
        verified: true
      },
      stats: {
        views: 1450,
        likes: 102,
        rating: 4.9
      },
      tools: ["Flutter", "OpenAI API", "Supabase", "Redux"],
      trending: true
    },
    {
      title: "AR Interior Design Marketplace",
      description: "Allow users to visualize furniture and decor in their space using AR, then purchase items directly from partnered retailers with one-click ordering.",
      category: "E-commerce",
      difficulty: "Advanced" as const,
      creator: {
        name: "David Kim",
        avatar: undefined,
        verified: true
      },
      stats: {
        views: 934,
        likes: 71,
        rating: 4.7
      },
      tools: ["ARKit", "Unity", "Shopify API", "AWS"],
      trending: false
    },
    {
      title: "Community Garden Management",
      description: "Digital platform to help neighborhoods organize community gardens, track plant growth, share resources, and coordinate maintenance schedules.",
      category: "Community",
      difficulty: "Beginner" as const,
      creator: {
        name: "Lisa Park",
        avatar: undefined,
        verified: false
      },
      stats: {
        views: 623,
        likes: 38,
        rating: 4.3
      },
      tools: ["React", "Node.js", "MySQL", "Chart.js"],
      trending: false
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Ideas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular and trending startup ideas from our creator community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleIdeas.map((idea, index) => (
            <IdeaCard
              key={index}
              {...idea}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            View All Ideas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIdeas;
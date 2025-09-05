import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedIdeas from "@/components/FeaturedIdeas";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedIdeas />
      </main>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-brown-sugar.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-brown-rich">Kamika</span>
              <br />
              <span className="text-brown-medium">Brown Sugar</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Pure, natural sweetness crafted from premium sugar cane. 
              Experience the rich, molasses flavor that transforms every recipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Order Now
              </Button>
              <Button variant="outline-warm" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-warm rounded-3xl transform rotate-6 opacity-20"></div>
            <img 
              src={heroImage} 
              alt="Premium Kamika brown sugar in elegant ceramic bowl"
              className="w-full h-auto rounded-3xl shadow-warm transform hover:scale-105 transition-smooth"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-warm rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
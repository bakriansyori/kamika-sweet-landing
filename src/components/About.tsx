import { Button } from "@/components/ui/button";
import sugarCaneField from "@/assets/sugar-cane-field.jpg";

const About = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Our <span className="text-brown-rich">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Kamika brown sugar represents generations of expertise in sugar cultivation 
                and processing. We believe that the best sweetener comes from respecting 
                both the land and the traditional methods that have been perfected over time.
              </p>
              <p>
                Our sugar cane is grown in optimal conditions, harvested at peak ripeness, 
                and processed using time-honored techniques that preserve the natural 
                molasses content. This gives Kamika its distinctive rich flavor and 
                beautiful color.
              </p>
              <p>
                Every package of Kamika brown sugar is a testament to our commitment 
                to quality, sustainability, and the pure joy of natural sweetness.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Shop Kamika
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-warm rounded-3xl transform rotate-3 opacity-20"></div>
            <img 
              src={sugarCaneField} 
              alt="Golden sugar cane field at sunset representing natural origin of Kamika brown sugar"
              className="w-full h-auto rounded-3xl shadow-warm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
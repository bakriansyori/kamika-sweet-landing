import { Card, CardContent } from "@/components/ui/card";
import productTexture from "@/assets/product-texture.jpg";

const Features = () => {
  const features = [
    {
      title: "100% Natural",
      description: "Pure brown sugar with no artificial additives or preservatives",
      icon: "🌿"
    },
    {
      title: "Rich Flavor",
      description: "Deep molasses notes that enhance baking and cooking",
      icon: "✨"
    },
    {
      title: "Premium Quality",
      description: "Carefully selected sugar cane for optimal taste and texture",
      icon: "👑"
    },
    {
      title: "Sustainable",
      description: "Ethically sourced from responsible farming practices",
      icon: "🌱"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-brown-rich">Kamika</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the difference that premium quality and natural processing make 
            in every granule of our brown sugar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-warm hover:shadow-glow transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-gold rounded-3xl transform -rotate-3 opacity-30"></div>
            <img 
              src={productTexture} 
              alt="Close-up texture of Kamika brown sugar crystals showing natural golden color"
              className="w-full h-auto rounded-3xl shadow-warm"
            />
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Crafted with <span className="text-brown-rich">Care</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Each batch of Kamika brown sugar is carefully processed to preserve 
              the natural molasses content, giving you that distinctive rich flavor 
              and beautiful golden-brown color that makes your recipes exceptional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From our fields to your kitchen, we maintain the highest standards 
              of quality and purity, ensuring every spoonful delivers the authentic 
              taste of premium brown sugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
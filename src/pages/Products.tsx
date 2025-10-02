import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Home, Star, Leaf, Award, Package, ShoppingCart, Heart } from "lucide-react";
import heroImage from "@/assets/hero-brown-sugar.jpg";
import textureImage from "@/assets/product-texture.jpg";
import logo from "@/assets/kamika-logo.png";

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: "Kamika Premium Brown Sugar - 200g",
      nameId: "Gula Merah Premium Kamika - 200g",
      image: heroImage,
      rating: 4.9,
      reviews: 127,
      features: ["100% Natural", "Rich Molasses", "Premium Quality"],
      featuresId: ["100% Alami", "Molase Kaya", "Kualitas Premium"],
      description: "Finely ground brown sugar that dissolves quickly. Perfect for delicate recipes and tea sweetening.",
      descriptionId: "Gula merah yang digiling halus dan mudah larut. Sempurna untuk resep halus dan mempermanis teh."
    },
    {
      id: 2,
      name: "Kamika Premium Brown Sugar - 500g",
      nameId: "Gula Merah Premium Kamika - 500g",
      image: textureImage,
      rating: 4.8,
      reviews: 89,
      features: ["Certified Organic", "Sustainable", "Bulk Size"],
      featuresId: ["Organik Bersertifikat", "Berkelanjutan", "Ukuran Besar"],
      description: "Perfect for baking, cooking, and sweetening beverages. Our signature brown sugar with deep, rich flavor.",
      descriptionId: "Sempurna untuk memanggang, memasak, dan mempermanis minuman. Gula merah khas kami dengan rasa yang dalam dan kaya."
    },
    {
      id: 3,
      name: "Kamika Premium Brown Sugar - 1kg",
      nameId: "Gula Merah Premium Kamika - 1kg",
      image: heroImage,
      rating: 4.7,
      reviews: 203,
      features: ["Fine Texture", "Quick Dissolve", "Compact"],
      featuresId: ["Tekstur Halus", "Mudah Larut", "Kompak"],
      description: "Certified organic brown sugar in bulk packaging. Ideal for professional bakers and large families.",
      descriptionId: "Gula merah organik bersertifikat dalam kemasan besar. Ideal untuk pembuat roti profesional dan keluarga besar."
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-gold-light" />,
      title: "100% Natural",
      titleId: "100% Alami",
      description: "No artificial additives or preservatives",
      descriptionId: "Tanpa bahan tambahan atau pengawet buatan"
    },
    {
      icon: <Award className="w-8 h-8 text-gold-light" />,
      title: "Premium Quality",
      titleId: "Kualitas Premium", 
      description: "Carefully selected sugarcane for optimal taste",
      descriptionId: "Tebu yang dipilih dengan hati-hati untuk rasa optimal"
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-light" />,
      title: "Health Conscious",
      titleId: "Sadar Kesehatan",
      description: "Rich in minerals and natural nutrients",
      descriptionId: "Kaya akan mineral dan nutrisi alami"
    },
    {
      icon: <Package className="w-8 h-8 text-gold-light" />,
      title: "Fresh Packaging",
      titleId: "Kemasan Segar",
      description: "Sealed for maximum freshness and quality",
      descriptionId: "Disegel untuk kesegaran dan kualitas maksimal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-warm text-primary-foreground relative">
        <div className="container mx-auto px-6">
          {/* Logo */}
          <div className="absolute top-6 left-6">
            <Link to="/" className="block hover:scale-105 transition-smooth">
              <img 
                src={logo} 
                alt="Kamika Nusa Logo" 
                className="h-32 w-auto"
              />
            </Link>
          </div>
          
          {/* Home Button */}
          <div className="mb-8">
            <Link to="/">
              <Button 
                variant="secondary" 
                className="bg-cream text-brown-rich hover:bg-gold-light shadow-warm"
              >
                <Home className="w-5 h-5 mr-2" />
                {t('footer.home')}
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {t('footer.products')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Discover our premium range of natural brown sugar products, crafted with care for exceptional taste and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 border-brown-light/20">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2">
                    <CardTitle className="text-xl text-brown-rich mb-2">
                      {t('footer.products') === 'Products' ? product.name : product.nameId}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(t('footer.products') === 'Products' ? product.features : product.featuresId).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-gold-light/10 text-gold-dark">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brown-medium mb-4">
                    {t('footer.products') === 'Products' ? product.description : product.descriptionId}
                  </CardDescription>
                  <Button 
                    className="w-full bg-gold-warm hover:bg-gold-dark text-primary-foreground"
                    onClick={() => window.open('https://wa.me/6281287098907', '_blank')}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-warm text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Our Products?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Every product is crafted with dedication to quality, sustainability, and your satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gold-light">
                  {t('footer.products') === 'Products' ? benefit.title : benefit.titleId}
                </h3>
                <p className="opacity-90">
                  {t('footer.products') === 'Products' ? benefit.description : benefit.descriptionId}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-warm text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Experience the premium quality and natural sweetness of Kamika brown sugar. Order now and taste the difference!
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-12 py-6 bg-cream text-brown-rich hover:bg-gold-light shadow-glow"
              onClick={() => window.open('https://wa.me/6281287098907', '_blank')}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Order via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
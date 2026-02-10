import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import productTexture from "@/assets/kopi-susu-gula-semut.png";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      titleKey: "features.natural.title",
      descriptionKey: "features.natural.description",
      icon: "🌿"
    },
    {
      titleKey: "features.flavor.title", 
      descriptionKey: "features.flavor.description",
      icon: "✨"
    },
    {
      titleKey: "features.quality.title",
      descriptionKey: "features.quality.description", 
      icon: "👑"
    },
    {
      titleKey: "features.sustainable.title",
      descriptionKey: "features.sustainable.description",
      icon: "🌱"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('features.title')} <span className="text-brown-rich">{t('features.titleHighlight')}</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
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
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-gold rounded-3xl transform -rotate-3 opacity-30 z-0"></div>
            <img 
              src={productTexture} 
              alt={t('features.textureAlt')}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full h-auto rounded-3xl shadow-warm transform hover:scale-105 transition-smooth"
            />
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t('features.crafted.title')} <span className="text-brown-rich">{t('features.crafted.highlight')}</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('features.crafted.description1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('features.crafted.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
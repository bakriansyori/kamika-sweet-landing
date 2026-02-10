import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import palmTrees from "@/assets/pohon-aren.png";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              {t('about.title')} <span className="text-brown-rich">{t('about.titleHighlight')}</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
              <p>
                {t('about.description3')}
              </p>
            </div>
            <div className="mt-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://wa.me/6281287098907', '_blank')}
              >
                {t('about.shopKamika')}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-warm rounded-3xl transform rotate-3 opacity-20 z-0"></div>
            <img 
              src={palmTrees} 
              alt={t('about.fieldAlt')}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full h-auto rounded-3xl shadow-warm transform hover:scale-105 transition-smooth"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
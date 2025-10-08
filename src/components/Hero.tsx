import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import heroImage from "@/assets/sugar-in-bowl.png";
import logo from "@/assets/kamika-logo.png";

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-6 left-6 z-20">
        <Link to="/" className="block hover:scale-105 transition-smooth">
          <img 
            src={logo} 
            alt="Kamika Nusa Logo" 
            className="h-32 w-auto"
          />
        </Link>
      </div>
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-32">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-brown-rich">{t('hero.title.kamika')}</span>
              <br />
              <span className="text-brown-medium">{t('hero.title.brownSugar')}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/products')}
              >
                {t('hero.orderNow')}
              </Button>
              <Button 
                variant="outline-warm" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/products')}
              >
                {t('hero.learnMore')}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-warm rounded-3xl transform rotate-6 opacity-20 z-0"></div>
            <img 
              src={heroImage} 
              alt={t('hero.altText')}
              className="relative z-10 w-full h-auto rounded-3xl shadow-warm transform hover:scale-105 transition-smooth"
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
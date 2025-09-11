import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
const CallToAction = () => {
  const {
    t
  } = useLanguage();
  return <section className="py-24 bg-gradient-warm relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gold-warm rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-cream rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gold-light rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t('cta.title')}
            <br />
            <span className="text-gold-light">{t('cta.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            {t('cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-12 py-6 bg-cream text-brown-rich hover:bg-gold-light shadow-glow"
              onClick={() => window.open('https://wa.me/6281287098907', '_blank')}
            >
              {t('cta.orderNow')}
            </Button>
            <div className="text-primary-foreground/80">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📞</span>
                <span className="font-medium">{t('cta.contactNumber')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="font-medium">{t('cta.guarantee')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;
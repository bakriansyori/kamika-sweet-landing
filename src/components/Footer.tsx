import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brown-rich text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gold-light mb-4">Kamika</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold-light">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/" className="hover:text-gold-light transition-colors">{t('footer.home')}</a></li>
              <li><a href="/contact" className="hover:text-gold-light transition-colors">{t('footer.contact')}</a></li>
              <li><a href="/products" className="hover:text-gold-light transition-colors">{t('footer.products')}</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">{t('footer.about')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold-light">{t('footer.company')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-gold-light transition-colors">{t('footer.ourStory')}</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">{t('footer.careers')}</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">{t('footer.press')}</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">{t('footer.blog')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold-light">{t('footer.support')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-gold-light transition-colors">{t('footer.faq')}</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">{t('footer.shipping')}</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">{t('footer.returns')}</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">{t('footer.help')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Kamika Brown Sugar. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
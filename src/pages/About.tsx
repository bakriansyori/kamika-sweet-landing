import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Award, Users, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import palmTrees from "@/assets/palm-trees.png";
import heroImage from "@/assets/hero-brown-sugar.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-brown-dark text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('common.back')}
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">
            {t('about.title')} <span className="text-brown-light">{t('about.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-brown-light mt-4 max-w-2xl">
            {t('about.subtitle')}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {t('about.ourStory')}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t('about.description1')}</p>
                <p>{t('about.description2')}</p>
                <p>{t('about.description3')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-warm rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src={palmTrees} 
                alt={t('about.fieldAlt')}
                className="w-full h-auto rounded-3xl shadow-warm"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              {t('about.ourValues')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-brown-light/20 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {t('about.naturalValue')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('about.naturalDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-brown-light/20 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {t('about.qualityValue')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('about.qualityDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-brown-light/20 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {t('about.communityValue')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('about.communityDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {t('about.contactUs')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('contact.address')}</h3>
                    <p className="text-muted-foreground">
                      Jalan Duren Tiga Selatan VII No. 43<br />
                      Duren Tiga, Pancoran<br />
                      Jakarta Selatan, Jakarta 12760
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('contact.phone')}</h3>
                    <p className="text-muted-foreground">+62 812 8709 8907</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('contact.email')}</h3>
                    <p className="text-muted-foreground">kamikanusa@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('contact.hours')}</h3>
                    <p className="text-muted-foreground">
                      {t('contact.hoursDetails')}
                    </p>
                  </div>
                </div>
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
              <div className="absolute inset-0 bg-gradient-warm rounded-3xl transform -rotate-3 opacity-20"></div>
              <img 
                src={heroImage} 
                alt={t('hero.imageAlt')}
                className="w-full h-auto rounded-3xl shadow-warm"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
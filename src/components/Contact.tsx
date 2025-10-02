import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Home } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { Link } from "react-router-dom";
import logo from "@/assets/kamika-logo.png";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format WhatsApp message
    const whatsappMessage = `Halo Kamika Brown Sugar!

Nama: ${formData.name}
Email: ${formData.email}
Telepon: ${formData.phone}

Pesan:
${formData.message}`;
    
    const whatsappUrl = `https://wa.me/6281287098907?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Pesan Anda akan dikirim melalui WhatsApp!");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                Beranda
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {t('contact.getInTouch')}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('contact.description')}
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <Card className="border-0 shadow-warm hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-warm rounded-lg">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
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
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="border-0 shadow-warm hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-warm rounded-lg">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('contact.phone')}</h3>
                        <p className="text-muted-foreground">+62 812 8709 8907</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {t('contact.phoneNote')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-0 shadow-warm hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-warm rounded-lg">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('contact.email')}</h3>
                        <p className="text-muted-foreground">kamikanusa@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-0 shadow-warm hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-warm rounded-lg">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('contact.businessHours')}</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Senin - Jumat: 08:00 - 17:00</p>
                          <p>Sabtu: 08:00 - 15:00</p>
                          <p>Minggu: Tutup</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp Quick Contact */}
              <Card className="border-2 border-green-500 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-green-800 mb-1">
                        {t('contact.whatsappQuick')}
                      </h3>
                      <p className="text-green-700 text-sm">
                        {t('contact.whatsappDescription')}
                      </p>
                    </div>
                    <Button 
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => window.open('https://wa.me/6281287098907', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-warm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {t('contact.sendMessage')}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.name')} *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.namePlaceholder')}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.email')} *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contact.emailPlaceholder')}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.phone')}
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('contact.phonePlaceholder')}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.message')} *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t('contact.messagePlaceholder')}
                        required
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full text-lg py-6"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.sendViaWhatsApp')}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      {t('contact.formNote')}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('contact.findUs')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.mapDescription')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-warm overflow-hidden">
              <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-brown-rich mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t('contact.mapPlaceholder')}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Jalan Duren Tiga Selatan VII No. 43, Duren Tiga, Pancoran, Jakarta Selatan, Jakarta 12760
                  </p>
                  <Button 
                    variant="outline-warm"
                    onClick={() => window.open('https://maps.google.com/?q=Jalan+Duren+Tiga+Selatan+VII+No.+43+Duren+Tiga+Pancoran+Jakarta+Selatan', '_blank')}
                  >
                    {t('contact.openInMaps')}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
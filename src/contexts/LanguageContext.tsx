import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero section
    'hero.title.kamika': 'Kamika',
    'hero.title.brownSugar': 'Brown Sugar',
    'hero.description': 'Pure, natural sweetness crafted from premium sugar cane. Experience the rich, molasses flavor that transforms every recipe.',
    'hero.orderNow': 'Order Now',
    'hero.learnMore': 'Learn More',
    'hero.altText': 'Premium Kamika brown sugar in elegant ceramic bowl',

    // Features section
    'features.title': 'Why Choose',
    'features.titleHighlight': 'Kamika',
    'features.subtitle': 'Discover the difference that premium quality and natural processing make in every granule of our brown sugar.',
    'features.natural.title': '100% Natural',
    'features.natural.description': 'Pure brown sugar with no artificial additives or preservatives',
    'features.flavor.title': 'Rich Flavor',
    'features.flavor.description': 'Deep molasses notes that enhance baking and cooking',
    'features.quality.title': 'Premium Quality',
    'features.quality.description': 'Carefully selected sugar cane for optimal taste and texture',
    'features.sustainable.title': 'Sustainable',
    'features.sustainable.description': 'Ethically sourced from responsible farming practices',
    'features.crafted.title': 'Crafted with',
    'features.crafted.highlight': 'Care',
    'features.crafted.description1': 'Each batch of Kamika brown sugar is carefully processed to preserve the natural molasses content, giving you that distinctive rich flavor and beautiful golden-brown color that makes your recipes exceptional.',
    'features.crafted.description2': 'From our fields to your kitchen, we maintain the highest standards of quality and purity, ensuring every spoonful delivers the authentic taste of premium brown sugar.',
    'features.textureAlt': 'Close-up texture of Kamika brown sugar crystals showing natural golden color',

    // About section
    'about.title': 'Our',
    'about.titleHighlight': 'Story',
    'about.description1': 'Kamika brown sugar represents generations of expertise in sugar cultivation and processing. We believe that the best sweetener comes from respecting both the land and the traditional methods that have been perfected over time.',
    'about.description2': 'Our sugar cane is grown in optimal conditions, harvested at peak ripeness, and processed using time-honored techniques that preserve the natural molasses content. This gives Kamika its distinctive rich flavor and beautiful color.',
    'about.description3': 'Every package of Kamika brown sugar is a testament to our commitment to quality, sustainability, and the pure joy of natural sweetness.',
    'about.shopKamika': 'Shop Kamika',
    'about.fieldAlt': 'Golden sugar cane field at sunset representing natural origin of Kamika brown sugar',

    // Call to Action section
    'cta.title': 'Ready to Experience',
    'cta.titleHighlight': 'Natural Sweetness?',
    'cta.description': 'Join thousands of home bakers and professional chefs who have made Kamika brown sugar their secret ingredient for exceptional flavors.',
    'cta.orderNow': 'Order Kamika Now',
    'cta.freeShipping': 'Free shipping on orders over $50',
    'cta.guarantee': '30-day satisfaction guarantee',

    // Footer
    'footer.description': 'Premium brown sugar crafted with care for exceptional taste and quality.',
    'footer.quickLinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.about': 'About',
    'footer.products': 'Products',
    'footer.contact': 'Contact',
    'footer.company': 'Company',
    'footer.ourStory': 'Our Story',
    'footer.careers': 'Careers',
    'footer.press': 'Press',
    'footer.blog': 'Blog',
    'footer.support': 'Support',
    'footer.faq': 'FAQ',
    'footer.shipping': 'Shipping',
    'footer.returns': 'Returns',
    'footer.help': 'Help Center',
    'footer.followUs': 'Follow Us',
    'footer.allRightsReserved': 'All rights reserved.',
  },
  id: {
    // Hero section
    'hero.title.kamika': 'Kamika',
    'hero.title.brownSugar': 'Gula Merah',
    'hero.description': 'Rasa manis alami murni yang dibuat dari tebu premium. Rasakan cita rasa molase yang kaya yang mengubah setiap resep Anda.',
    'hero.orderNow': 'Pesan Sekarang',
    'hero.learnMore': 'Pelajari Lebih Lanjut',
    'hero.altText': 'Gula merah Kamika premium dalam mangkuk keramik elegan',

    // Features section
    'features.title': 'Mengapa Pilih',
    'features.titleHighlight': 'Kamika',
    'features.subtitle': 'Temukan perbedaan kualitas premium dan pemrosesan alami dalam setiap butir gula merah kami.',
    'features.natural.title': '100% Alami',
    'features.natural.description': 'Gula merah murni tanpa bahan tambahan atau pengawet buatan',
    'features.flavor.title': 'Rasa Kaya',
    'features.flavor.description': 'Aroma molase yang dalam yang meningkatkan rasa kue dan masakan',
    'features.quality.title': 'Kualitas Premium',
    'features.quality.description': 'Tebu yang dipilih dengan cermat untuk rasa dan tekstur optimal',
    'features.sustainable.title': 'Berkelanjutan',
    'features.sustainable.description': 'Bersumber etis dari praktik pertanian yang bertanggung jawab',
    'features.crafted.title': 'Dibuat dengan',
    'features.crafted.highlight': 'Hati',
    'features.crafted.description1': 'Setiap batch gula merah Kamika diproduksi dengan hati-hati untuk mempertahankan kandungan molase alami, memberikan Anda rasa khas yang kaya dan warna cokelat keemasan yang indah yang membuat resep Anda istimewa.',
    'features.crafted.description2': 'Dari ladang kami ke dapur Anda, kami mempertahankan standar kualitas dan kemurnian tertinggi, memastikan setiap sendok memberikan rasa autentik gula merah premium.',
    'features.textureAlt': 'Tekstur close-up kristal gula merah Kamika menunjukkan warna emas alami',

    // About section
    'about.title': 'Cerita',
    'about.titleHighlight': 'Kami',
    'about.description1': 'Gula merah Kamika mewakili keahlian turun-temurun dalam budidaya dan pengolahan gula. Kami percaya bahwa pemanis terbaik berasal dari menghormati tanah dan metode tradisional yang telah disempurnakan dari waktu ke waktu.',
    'about.description2': 'Tebu kami ditanam dalam kondisi optimal, dipanen pada saat kematangan puncak, dan diproses menggunakan teknik tradisional yang melestarikan kandungan molase alami. Ini memberikan Kamika rasa khas yang kaya dan warna yang indah.',
    'about.description3': 'Setiap kemasan gula merah Kamika adalah bukti komitmen kami terhadap kualitas, keberlanjutan, dan kegembiraan murni dari rasa manis alami.',
    'about.shopKamika': 'Belanja Kamika',
    'about.fieldAlt': 'Ladang tebu emas saat matahari terbenam yang mewakili asal alami gula merah Kamika',

    // Call to Action section
    'cta.title': 'Siap Merasakan',
    'cta.titleHighlight': 'Rasa Manis Alami?',
    'cta.description': 'Bergabunglah dengan ribuan pembuat kue rumahan dan koki profesional yang telah menjadikan gula merah Kamika sebagai bahan rahasia mereka untuk cita rasa luar biasa.',
    'cta.orderNow': 'Pesan Kamika Sekarang',
    'cta.freeShipping': 'Gratis ongkir untuk pembelian di atas $50',
    'cta.guarantee': 'Jaminan kepuasan 30 hari',

    // Footer
    'footer.description': 'Gula merah premium yang dibuat dengan perhatian untuk rasa dan kualitas yang luar biasa.',
    'footer.quickLinks': 'Tautan Cepat',
    'footer.home': 'Beranda',
    'footer.about': 'Tentang',
    'footer.products': 'Produk',
    'footer.contact': 'Kontak',
    'footer.company': 'Perusahaan',
    'footer.ourStory': 'Cerita Kami',
    'footer.careers': 'Karir',
    'footer.press': 'Pers',
    'footer.blog': 'Blog',
    'footer.support': 'Dukungan',
    'footer.faq': 'FAQ',
    'footer.shipping': 'Pengiriman',
    'footer.returns': 'Pengembalian',
    'footer.help': 'Pusat Bantuan',
    'footer.followUs': 'Ikuti Kami',
    'footer.allRightsReserved': 'Semua hak dilindungi.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
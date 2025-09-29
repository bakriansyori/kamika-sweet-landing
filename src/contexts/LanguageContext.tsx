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
    'about.subtitle': 'Discover the authentic story behind Indonesia\'s finest brown sugar',
    'about.ourStory': 'Our Story',
    'about.ourValues': 'Our Values',
    'about.naturalValue': 'Natural & Pure',
    'about.naturalDesc': 'We believe in preserving the natural goodness of sugar cane without any artificial additives or processing chemicals.',
    'about.qualityValue': 'Premium Quality',
    'about.qualityDesc': 'Every batch is carefully crafted and tested to ensure consistent quality and exceptional taste in every package.',
    'about.communityValue': 'Community First',
    'about.communityDesc': 'We work closely with local farmers and communities to create sustainable livelihoods and preserve traditional methods.',
    'about.contactUs': 'Contact Us',
    'about.description1': 'Kamika brown sugar represents generations of expertise in sugar cultivation and processing. We believe that the best sweetener comes from respecting both the land and the traditional methods that have been perfected over time.',
    'about.description2': 'Our sugar cane is grown in optimal conditions, harvested at peak ripeness, and processed using time-honored techniques that preserve the natural molasses content. This gives Kamika its distinctive rich flavor and beautiful color.',
    'about.description3': 'Every package of Kamika brown sugar is a testament to our commitment to quality, sustainability, and the pure joy of natural sweetness.',
    'about.shopKamika': 'Shop Kamika',
    'about.fieldAlt': 'Towering palm trees with sunlight filtering through, representing the natural source of Kamika brown sugar',

    // Call to Action section
    'cta.title': 'Ready to Experience',
    'cta.titleHighlight': 'Natural Sweetness?',
    'cta.description': 'Join thousands of home bakers and professional chefs who have made Kamika brown sugar their secret ingredient for exceptional flavors.',
    'cta.orderNow': 'Order Kamika Now',
    'cta.contactNumber': '+62 812 8709 8907',
    'cta.freeShipping': 'Free shipping on orders over $50',
    'cta.guarantee': 'kamikanusa@gmail.com',

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

    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us for orders, questions, or just to say hello. We\'re here to help you discover the perfect sweetness.',
    'contact.getInTouch': 'Get in Touch',
    'contact.description': 'We\'d love to hear from you! Whether you have questions about our products, need help with an order, or want to learn more about Kamika brown sugar, don\'t hesitate to reach out.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.phoneNote': 'Available during business hours',
    'contact.email': 'Email',
    'contact.hours': 'Operating Hours',
    'contact.hoursDetails': 'Monday - Saturday: 8:00 AM - 6:00 PM\nSunday: 9:00 AM - 4:00 PM',
    'contact.businessHours': 'Business Hours',
    'contact.whatsappQuick': 'Quick WhatsApp Contact',
    'contact.whatsappDescription': 'Get instant response via WhatsApp',
    'contact.sendMessage': 'Send us a Message',
    'contact.name': 'Full Name',
    'contact.namePlaceholder': 'Enter your full name',
    'contact.emailPlaceholder': 'Enter your email address',
    'contact.phonePlaceholder': 'Enter your phone number',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us how we can help you...',
    'contact.sendViaWhatsApp': 'Send via WhatsApp',
    'contact.formNote': 'Your message will be sent directly to our WhatsApp for faster response.',
    'contact.findUs': 'Find Us',
    'contact.mapDescription': 'Visit our location or contact us for directions.',
    'contact.mapPlaceholder': 'Our Location',
    'contact.openInMaps': 'Open in Google Maps',

    // Common
    'common.back': 'Back',
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
    'features.crafted.description1': 'Setiap gula merah Kamika diproduksi dengan hati-hati untuk mempertahankan kandungan molase alami, memberikan Anda rasa khas yang kaya dan warna cokelat keemasan yang indah yang membuat resep Anda istimewa.',
    'features.crafted.description2': 'Dari ladang kami ke dapur Anda, kami mempertahankan standar kualitas dan kemurnian tertinggi, memastikan setiap sendok memberikan rasa autentik gula merah premium.',
    'features.textureAlt': 'Tekstur close-up kristal gula merah Kamika menunjukkan warna emas alami',

    // About section
    'about.title': 'Cerita',
    'about.titleHighlight': 'Kami',
    'about.subtitle': 'Temukan cerita autentik di balik gula merah terbaik Indonesia',
    'about.ourStory': 'Cerita Kami',
    'about.ourValues': 'Nilai-Nilai Kami',
    'about.naturalValue': 'Alami & Murni',
    'about.naturalDesc': 'Kami percaya untuk menjaga kebaikan alami tebu tanpa bahan tambahan buatan atau bahan kimia pengolahan.',
    'about.qualityValue': 'Kualitas Premium',
    'about.qualityDesc': 'Setiap batch dibuat dan diuji dengan hati-hati untuk memastikan kualitas konsisten dan rasa luar biasa di setiap kemasan.',
    'about.communityValue': 'Komunitas Utama',
    'about.communityDesc': 'Kami bekerja sama dengan petani dan komunitas lokal untuk menciptakan mata pencaharian berkelanjutan dan melestarikan metode tradisional.',
    'about.contactUs': 'Hubungi Kami',
    'about.description1': 'Gula merah Kamika mewakili keahlian turun-temurun dalam budidaya dan pengolahan gula. Kami percaya bahwa pemanis terbaik berasal dari menghormati tanah dan metode modern yang telah disempurnakan dari waktu ke waktu.',
    'about.description2': 'Tebu kami ditanam dalam kondisi optimal, dipanen pada saat kematangan puncak, dan diproses menggunakan teknik modern yang melestarikan kandungan molase alami. Ini memberikan Kamika rasa khas yang kaya dan warna yang indah.',
    'about.description3': 'Setiap kemasan gula merah Kamika adalah bukti komitmen kami terhadap kualitas, keberlanjutan, dan kegembiraan murni dari rasa manis alami.',
    'about.shopKamika': 'Belanja Kamika',
    'about.fieldAlt': 'Pohon aren yang menjulang tinggi dengan sinar matahari yang menyaring, mewakili sumber alami gula merah Kamika',

    // Call to Action section
    'cta.title': 'Siap Merasakan',
    'cta.titleHighlight': 'Rasa Manis Alami?',
    'cta.description': 'Bergabunglah dengan ribuan pembuat kue rumahan dan koki profesional yang telah menjadikan gula merah Kamika sebagai bahan rahasia mereka untuk cita rasa luar biasa.',
    'cta.orderNow': 'Pesan Kamika Sekarang',
    'cta.contactNumber': '+62 812 8709 8907',
    'cta.freeShipping': 'Gratis ongkir untuk pembelian di atas $50',
    'cta.guarantee': 'kamikanusa@gmail.com',

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

    // Contact page
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Hubungi kami untuk pemesanan, pertanyaan, atau sekadar menyapa. Kami siap membantu Anda menemukan rasa manis yang sempurna.',
    'contact.getInTouch': 'Hubungi Kami',
    'contact.description': 'Kami senang mendengar dari Anda! Baik Anda memiliki pertanyaan tentang produk kami, butuh bantuan dengan pesanan, atau ingin tahu lebih banyak tentang gula merah Kamika, jangan ragu untuk menghubungi kami.',
    'contact.address': 'Alamat',
    'contact.phone': 'Telepon',
    'contact.phoneNote': 'Tersedia selama jam kerja',
    'contact.email': 'Email',
    'contact.hours': 'Jam Operasional',
    'contact.hoursDetails': 'Senin - Sabtu: 08:00 - 18:00\nMinggu: 09:00 - 16:00',
    'contact.businessHours': 'Jam Kerja',
    'contact.whatsappQuick': 'Kontak WhatsApp Cepat',
    'contact.whatsappDescription': 'Dapatkan respon instan via WhatsApp',
    'contact.sendMessage': 'Kirim Pesan',
    'contact.name': 'Nama Lengkap',
    'contact.namePlaceholder': 'Masukkan nama lengkap Anda',
    'contact.emailPlaceholder': 'Masukkan alamat email Anda',
    'contact.phonePlaceholder': 'Masukkan nomor telepon Anda',
    'contact.message': 'Pesan',
    'contact.messagePlaceholder': 'Ceritakan bagaimana kami bisa membantu Anda...',
    'contact.sendViaWhatsApp': 'Kirim via WhatsApp',
    'contact.formNote': 'Pesan Anda akan dikirim langsung ke WhatsApp kami untuk respon yang lebih cepat.',
    'contact.findUs': 'Temukan Kami',
    'contact.mapDescription': 'Kunjungi lokasi kami atau hubungi kami untuk petunjuk arah.',
    'contact.mapPlaceholder': 'Lokasi Kami',
    'contact.openInMaps': 'Buka di Google Maps',

    // Common
    'common.back': 'Kembali',
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
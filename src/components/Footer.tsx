const Footer = () => {
  return (
    <footer className="bg-brown-rich text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gold-light mb-4">Kamika</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Premium brown sugar crafted with care for exceptional flavor 
              and natural sweetness in every granule.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold-light">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-gold-light transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">Recipes</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold-light">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📧 info@kamika.com</p>
              <p>📞 1-800-KAMIKA</p>
              <p>📍 Natural Valley, CA</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Kamika Brown Sugar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
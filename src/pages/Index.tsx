import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;

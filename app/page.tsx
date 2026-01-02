import About from "@/components/About/about";
import Contact from "@/components/Contact/contact";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import Hero from "@/components/Hero/hero";
import Separator from "@/components/separator";
import Services from "@/components/Service/service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Separator />
      <Services />
      <Separator />
      <About />
      <Separator />
      <Contact />
      <Separator isRed />
      <Footer />
    </>
  );
}

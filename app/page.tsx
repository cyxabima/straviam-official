import About from "@/components/About/about";
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
    </>
  );
}

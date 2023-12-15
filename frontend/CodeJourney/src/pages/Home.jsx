import { Form } from "../components/contact-us/Form";
import { FAQ } from "../components/FAQ/FAQ";
import { Header } from "../components/Header/Header";
import { NavLinkHome } from "../components/Navs/NavLinkHome";
import { Hero } from "../components/Hero/Hero";
import { NuestroServicio } from "../components/NuestroServicio/NuestroServicio";
import { Footer } from "../components/footer/Footer";
import { Caracteristicas } from "../components/Caracteristicas/Caracteristicas";

export const Home = () => {
  return (
    <>
      <Header navlink={<NavLinkHome />} />
      <main>
        <Hero />
        <NuestroServicio />
        <Caracteristicas />
        <FAQ />
        <Form />
      </main>
      <Footer />
    </>
  );
};

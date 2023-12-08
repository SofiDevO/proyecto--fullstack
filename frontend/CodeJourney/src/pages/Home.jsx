import { Form } from "../components/contact-us/Form";
import { FAQ } from "../components/FAQ/FAQ";
import { Header } from "../components/Header/Header";
import { NavLinkHome } from "../components/Header/Navs/NavLinkHome";
import { Hero } from "../components/Hero/Hero";
import { NuestroServicio } from "../components/NuestroServicio/NuestroServicio";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
  return (
    <>
      <Header navlink={<NavLinkHome />} />
      <main>
        <Hero />
        <NuestroServicio />
        <FAQ />
        <Form />
      </main>
      <Footer />
    </>
  );
};

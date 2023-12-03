import { Form } from "../components/contact-us/Form";
import { Header } from "../components/Header/Header";
import { NavLinkHome } from "../components/Header/Navs/NavLinkHome/NavLinkHome";
import { Hero } from "../components/Hero/Hero";
import { NuestroServicio } from "../components/NuestroServicio/NuestroServicio";

export const Home = () => {
  return (
    <>
    <Header navlink={<NavLinkHome/>}/>
      <main>
          <Hero />
          <NuestroServicio />
          <Form/>
      </main>
    </>
  );
};

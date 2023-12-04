
import { Header } from "./components/Header/Header";
import { Form } from "./components/contact-us/Form";
import { Footer } from './components/footer/Footer';
import { Hero } from "./components/Hero/Hero";
import { NuestroServicio } from "./components/NuestroServicio/NuestroServicio";

function App() {
  return (
    <>
      <Header menuItems={[
  { text: 'Nuestro servicio', href: '#' },
  { text: 'Caracterisiticas', href: '#' },
  { text: 'Contactos', href: '#' },
  { text: 'Nuestro equipo', href: '#' }
]} />
      <Hero/>
      <NuestroServicio/>
      <main>
        <Form />
      </main>
      <Footer/>
    </>
  );
}
export default App;

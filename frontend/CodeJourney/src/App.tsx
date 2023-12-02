
import { Header } from "./components/Header/Header";
import { Form } from "./components/contact-us/Form";
import { Footer } from './components/footer/Footer';
import { Hero } from "./components/Hero/Hero";
import { NuestroServicio } from "./components/NuestroServicio/NuestroServicio";
// import { SectionPageError } from "./pages/SectionPageError/SectionPageError";

function App() {
  return (
    <>

/* <SectionPageError/> */
      <Header />
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

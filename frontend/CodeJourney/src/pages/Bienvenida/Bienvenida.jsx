import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import CustomizedSteppers from "../../components/Stepper/Stepper";
import "./Bienvenida.css";
export const Bienvenida = () => {
  return (
    <>
      <Header navlink={<NavLinkEquipo />} />
      <main>
        <section className="welcome">
          <h3 className="welcome__title">
            Te damos la Bienvenida{" "}
            {/* <span className="welcome__span">${nombre}</span> */}
          </h3>
          <div className="container__rutas">
            <aside className="side__steps">
              <CustomizedSteppers />
            </aside>
            <div className="caja__preferencias">
              <p>
                antes de empezar, marque el contenido que le gustaria que le
                gustaria que le muestren
              </p>
              .
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

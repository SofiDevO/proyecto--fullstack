import "./Caracteristicas.css";
import "../../styles/global.css";

export const Caracteristicas = () => {
  return (
    <>
      <h1 className="title-char" id="caracteristicas">
        caracteristicas
      </h1>
      <section className="caracteristicas-container">
        <div className="caracteristica-item">
          <img
            className="img-char"
            src="../img/characteristics/cart-one.svg"
            alt="prueba"
          />

          <h2 className="caracteristicas-subtitle">Te ayudamos a aprender</h2>
          <p>
            Junto a nosotros descubriras los cursos que mejor se alinean con tus
            intereses, habilidades y aspiraciones con tu propio camino educativo
            de manera informada y personalizada.
          </p>
        </div>

        <div className="caracteristica-item">
          <img
            className="img-char"
            src="../img/characteristics/cart-two.svg"
            alt="prueba"
          />
          <h2 className="caracteristicas-subtitle">
            Tú decides que caminos tomar
          </h2>
          <p>
            Tú tienes la libertad de elegir entre una variedad de cursos y
            especialidades. Reconocemos que cada estudiante tiene su propio
            estilo de aprendizaje y su propio ritmo único.
          </p>
        </div>

        <div className="caracteristica-item">
          <img
            className="img-char"
            src="../img/characteristics/cart-three.svg"
            alt="prueba"
          />
          <h2 className="caracteristicas-subtitle">
            Sin presiones ni plazos estrictos
          </h2>
          <p>
            En nuestra plataforma, te ofrecemos la flexibilidad de avanzar a tu
            velocidad, especialmente diseñada para que tengas el tiempo que
            necesitas para asimilar cada concepto.
          </p>
        </div>
      </section>
    </>
  );
};

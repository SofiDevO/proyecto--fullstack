import Slider from "react-slick";
import { CardDeveloper } from "../../components/CardDeveloper/CardDeveloper";
import { Equipo, colorPrimario } from "../../data/Equipo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeamCarrusel.css";
export const TeamCarrusel = () => {
  {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1123,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 825,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 633,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Slider {...settings}>
          {Equipo.map((miembro, index) => (
            <CardDeveloper
              key={index}
              datos={miembro}
              colorPrimario={colorPrimario[0][miembro.equipo]}
            />
          ))}
        </Slider>
      </>
    );
  }
};

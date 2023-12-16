import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import "./Registro.css";
import { useForm } from "react-hook-form";

export const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    redirect("/dashboard");
  };

  return (
    <>
      <Header navlink={<NavLinkEquipo />} />
      <main>
        <div className="login">
          <div className="form-container-register">
            <img
              src="../../../public/img/login/image-logo.png"
              alt="login"
              className="logo"
            />

            <h1 className="title">REGISTER</h1>
            {/* <p className="subtitle">CREATE ACCOUNT</p> */}

            <form  onSubmit={handleSubmit(onSubmit)} action="/" className="form-register">
              <label htmlFor="" className="label">
                NAME
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter you name"
                className="input input-password"
              {
                ...register("name", {

                  required: {
                    value: true,
                    message: "El nombre es requerido",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Nombre inválido",
                  },
                })
              }
  
              />
              {
                errors.name && 
                <span  className="helper__text helper__text--warning">
                  {errors.name.message}
                </span>
              }
          

              <label htmlFor="" className="label">
                LAST NAME
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter you lastname"
                className="input input-password"
                {
                  ...register("lastname", {

                    required: {
                      value: true,
                      message: "El apellido es requerido",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Apellido inválido",
                    },
                  })
                }
              />
              {
                errors.lastname && 
                <span  className="helper__text helper__text--warning">
                  {errors.lastname.message}
                </span>
              }
              <label htmlFor="" className="label">
                E-MAIL
              </label>
              <input
                type="email"
                id="email"
                placeholder="@"
                className="input input-password"
                {
                  ...register("email", {

                    required: {
                      value: true,
                      message: "El correo es requerido",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Correo inválido",
                    },
                  })
                }
              />
              {
                errors.email && 
                <span  className="helper__text helper__text--warning">
                  {errors.email.message}
                </span>
              }
              <label htmlFor="" className="label">
                Password
              </label>
              <input
                type="text"
                id="password "
                placeholder="*******"
                className="input input-password"
                {
                  ...register("password", {

                    required: {
                      value: true,
                      message: "El password es requerido",
                    },
                    minLength: {
                      value: 8,
                      message: "Mínimo de 8 carácteres",
                    },
                    maxLength: {
                      value: 26,
                      message: "Máximo de 26 carácteres",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/i,
                      message: "Password inválido",
                    },
                  })
                }
              />
              {
                errors.password && 
                <span  className="helper__text helper__text--warning">
                  {errors.password.message}
                </span>
              }

              <input
                type="submit"
                value="Confirm"
                className="primary-button login-button"
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

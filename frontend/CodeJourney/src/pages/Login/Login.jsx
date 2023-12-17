import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import "../../styles/global.css";
import "./Login.css";
import { redirect, NavLink as Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
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
      <Header navlink={<NavLinkEquipo />} />{" "}
      <main>
        <div className="login">
          <div className="form-container-login">
            <h1 className="title">login</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form-login"
              action="/api/save"
            >
              <label htmlFor="email" className="label">
                E-MAIL
              </label>
              <input
                id="email"
                type="email"
                placeholder="@"
                className="input input-user"
                {...register("email", {
                  required:{
                    value: true,
                    message: "El correo es requerido",
                  
                  },
                  pattern:{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Correo inválido",
                  },
                  }
                   )}
              />
              {errors.email && 
                <span  className="helper__text helper__text--warning">
                  {errors.email.message}
                </span>
              }
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                {...register("password", {
                  required: {
                    
                    value: true,
                    message: "El password es requerido",
                  },
                  minLength: {
                    value: 8,
                    message: "Mínimo de 8 carácteres",
                  },
                 maxLength:{
                    value: 26,
                    message: "Máximo de 26 carácteres",
                 },

          
                  pattern:{
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/i,
                    message: "Password inválido",
                  },
                  })}
                id="password"
                placeholder="***********"
                className="input input-password"
              />
              {errors.password && (
                <span className="helper__text helper__text--warning">
                 {
                    errors.password.message
                 }
                </span>
              )}
             
              <input
                type="submit"
                value="Login"
                className="primary-button login-button"
              />
            </form>
            <Link className="secondary-button signup-button" to="/registro">
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

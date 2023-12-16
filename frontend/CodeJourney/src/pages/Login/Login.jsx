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
                  required: true,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <span className="helper__text helper__text--warning">
                  El correo es requerido
                </span>
              )}
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  min: 26,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/i,
                })}
                id="password"
                placeholder="***********"
                className="input input-password"
              />
              {errors.password?.type === "required" && (
                <span className="helper__text helper__text--warning">
                  El password es requerido
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="helper__text helper__text--alert">
                  Mínimo de 8 carácteres
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

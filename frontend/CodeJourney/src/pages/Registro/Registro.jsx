import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import "./Registro.css";

export const Registro = () => {
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

            <form action="/" className="form-register">
              <label htmlFor="" className="label">
                NAME
              </label>
              <input
                type="text"
                id="user"
                placeholder="Enter you name"
                className="input input-password"
                required
              />

              <label htmlFor="" className="label">
                LAST NAME
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter you lastname"
                className="input input-password"
                required
              />
              <label htmlFor="" className="label">
                E-MAIL
              </label>
              <input
                type="email"
                id="email"
                placeholder="@"
                className="input input-password"
                required
              />
              <label htmlFor="" className="label">
                Password
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="*******"
                className="input input-password"
                required
              />

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

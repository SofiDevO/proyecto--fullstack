import { Header } from "../../components/Header/Header";

import "./Login.css";

export const Login = () => {
  return (
    <>
      <Header />
      <main>
        <div className="login">
          <div className="form-container-login">
            <img
              src="../../../public/img/login/image-logo.png"
              alt="login"
              className="logo"
            />
            <h1 className="title">login</h1>
            <form action="/" className="form-login">
              <label htmlFor="" className="label">
                E-MAIL
              </label>
              <input
                type="email"
                id="email"
                placeholder="@"
                className="input input-user"
                required
              />

              <label htmlFor="" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                placeholder="***********"
                className="input input-password"
                required
              />

              <a href="/#">
                {/* Forgot my password */}
                <input
                  type="submit"
                  value="Login"
                  className="primary-button login-button"
                />
              </a>
            </form>
            <button className="secondary-button signup-button">Sign up</button>
          </div>
        </div>
      </main>
    </>
  );
};

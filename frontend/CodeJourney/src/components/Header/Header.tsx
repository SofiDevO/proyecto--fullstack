import  { useEffect } from 'react';
import { Boton } from '../Boton/Boton';
import './Header.css';
import { Logo } from '../Logo/Logo';

export const Header = ({ menuItems }) => {
  useEffect(() => {
    const d = document;

    function handleClick(e) {
      if (e.target.matches('.panel-btn') || e.target.matches('.panel-btn *')) {
        d.querySelector('.panel').classList.toggle('is-active');
        d.querySelector('.panel-btn').classList.toggle('is-active');
      }

      if (e.target.matches('.header__menu-link')) {
        d.querySelector('.panel').classList.remove('is-active');
        d.querySelector('.panel-btn').classList.remove('is-active');
      }
    }

    d.addEventListener('click', handleClick);

    // Devuelve una función de limpieza que se ejecuta cuando el componente se desmonta
    return () => {
      d.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <header className='header'>
        <Logo />
        <nav className='menu  panel '>
          <ul className='header__list'>
            {menuItems.map((item, index) => (
              <li key={index} className='header__item'>
                <a className='header__menu-link' href={item.href}>
                  {item.text}
                </a>
              </li>
            ))}
            <div className='btn__container'>
              <Boton
                text='Iniciar Sesión'
                className='header__btn--register'
                href='#'
              />
              <Boton
                text='Registrarse'
                className='header__btn--login'
                href='#'
              />
            </div>
          </ul>
        </nav>
        <button className='hamburger hamburger--arrow panel-btn' type='button'>
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </header>
    </>
  );
};

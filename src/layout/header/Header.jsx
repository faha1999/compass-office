import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <navbar
        className="navbar navbar-expand-lg text-white position-sticky"
        style={{ top: '0rem' }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex" href="#">
            <img className="logo" src={logo} alt="compassoffice" />{' '}
            <span className="ps-2 fw-bolder text-white pt-2">
              Compass Office
            </span>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menubar */}
          <nav
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="about-us"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  About us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="services"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/technologies"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Technology
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Expertise
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/expertise" className="dropdown-item" href="#">
                      Our Expertise
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="another-action"
                      className="dropdown-item"
                      href="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="something-else-here"
                      className="dropdown-item"
                      href="#"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}

              {/* <li className="nav-item">
                <Link to="/news" className="nav-link" href="#">
                  News
                </Link>
              </li> */}

              <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">
                  Contact
                </Link>
              </li>

              {/* Mobile dropdown */}
              {/* <li className="nav-item ">
                <Link
                  className="nav-link"
                  href="#"
                  role="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? 'Hide' : 'Show'}
                </Link>
                {isVisible && (
                  <ul className="">
                    <li>
                      <Link className="" href="#">
                        Mobile dropdown
                      </Link>
                    </li>
                    <li>
                      <Link className="" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                )}
              </li> */}
            </ul>
          </nav>
        </div>
      </navbar>
    </>
  );
};

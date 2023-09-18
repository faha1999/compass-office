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
      <navbar class="navbar navbar-expand-lg text-white">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" href="#">
            <img className="logo" src={logo} alt="uaecopier" />
          </Link>

          {/* Toggler */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Menubar */}
          <nav
            class="collapse navbar-collapse flex-row-reverse"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">
                  About us
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Benefits
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      Benefits 1
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      Services 1
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Technology
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      Technology 1
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Enterprize
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      Enterprize 1
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link" href="#">
                  News
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Contact
                </Link>
              </li>

              {/* Mobile dropdown */}
              {/* <li class="nav-item ">
                <Link
                  class="nav-link"
                  href="#"
                  role="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? 'Hide' : 'Show'}
                </Link>
                {isVisible && (
                  <ul class="">
                    <li>
                      <Link class="" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link class="" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link class="" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                )}
              </li> */}

              {/* dropdown Demo */}
              {/* <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </nav>
        </div>
      </navbar>
    </>
  );
};

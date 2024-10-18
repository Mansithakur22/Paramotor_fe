export default function Header() {
  return (
      <header className="header">
        <div className="header-menu header-menu-2" id="sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo */}
              <a className="navbar-brand" href="index.php">
                <img src="images/paramotor_logo.png" alt="logo" />
              </a>

              {/* Hamburger toggle button for mobile view */}
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="hamburger-cross">
                    <span />
                    <span />
                  </span>
                </span>
              </button>

              {/* Navbar menu */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav menu ms-auto">
                  {/* Personal dropdown */}
                  <li className="nav-item dropdown submenu">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle active"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 20 20"
                        data-testid="personal-icon"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M10.5 10.833c3.606 0 6.544 2.149 6.663 4.832l.003.168c0 .92-.746 1.667-1.666 1.667h-10c-.92 0-1.667-.746-1.667-1.667 0-2.761 2.985-5 6.667-5Zm0-8.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Personal
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.88 9.29006L12 13.1701L8.11998 9.29006C7.72998 8.90006 7.09998 8.90006 6.70998 9.29006C6.31998 9.68006 6.31998 10.3101 6.70998 10.7001L11.3 15.2901C11.69 15.6801 12.32 15.6801 12.71 15.2901L17.3 10.7001C17.69 10.3101 17.69 9.68006 17.3 9.29006C16.91 8.91006 16.27 8.90006 15.88 9.29006Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* Business dropdown */}
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 20 20"
                        data-testid="business-icon"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M10.834 1.667a2.5 2.5 0 0 1 2.495 2.353l.005.147V5h.833v12.5H5.834V5h.833v-.833A2.5 2.5 0 0 1 9.02 1.67l.147-.004h1.667ZM4.167 5v12.5h-.833c-.92 0-1.667-.746-1.667-1.667V6.667c0-.92.746-1.667 1.667-1.667h.833Zm11.667 0h.833c.92 0 1.667.746 1.667 1.667v9.166c0 .92-.747 1.667-1.667 1.667h-.833V5Zm-5-1.667H9.167a.834.834 0 0 0-.828.737l-.005.097V5h3.333v-.833a.833.833 0 0 0-.833-.834Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Business
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Plans
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Services
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                {/* Sign Up button */}
                <a className="theme-btn" href="#" target="_blank">
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
  );
}

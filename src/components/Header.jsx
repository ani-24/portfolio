import React from "react";

const Header = () => {
  const showMenu = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.add("show");
  };
  const closeMenu = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.remove("show");
  };
  return (
    <>
      <div className="header">
        <a href="#" className="logo">
          Aniket Kumar
        </a>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA5klEQVRIie2WsUoEMRRFz7PYVltBrK1EsLSyFH/AL7Df77MRFgsLQRuxE3a2F/EDjsXOLM4QcHadBIQcSBdyXvIuj0ClEPHbBjWAC+ASOAdOgH3goN3y0a5X4BG4i4iXnStSZ+pcfXd7ntSbtuitpKfq2w7CIffq4Vjpmfo5gbRjqR6PET9PKO1YDD17CffXqKep/AX1Wl1l6HGjXv10xUDcAEeZ7tVExCbdqXAVYSi+BVYZPE17dmWNusiQ6I7e9CoZLgu6/gPqQ+7+QuLro2bpRUT0XKlw5RogPVLiqadXnVqVsnwDK5RuPflIhCkAAAAASUVORK5CYII"
          className="hamburger_menu"
          onClick={showMenu}
        />
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              My Works
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              My Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact me
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-nav">
        <img
          className="close-nav"
          onClick={closeMenu}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACCUlEQVRYhcWXy04UQRSG/2pDQuJaub4DMZCgQAJxqy70DbgkBvHRjCsnoBjBjTGuNMZXgAQNIAMzCzLzueiawBTVnKqW0bPs+W+naurmFClgQtITSUOSXjnn9mM4q4AxSc8knUt645zbSyHdB465qGNgpob5TERnNoX4mau1UyPAh4jOpxRiK0I8qBHgZ0SnFeIKD37gO29JGo7ofc0NUMEZBtrAF2C+l3QymKtYreW6A2uGZhMYF/DcAAKcAosZ5oueY9VGIamboHlbUiMlhMc0PMeqjoAR4FdCWnMkMjoHOAJGesQp4C2wBzSAlWuEoiEM81NgFdgE9oFt4J41lAvASYXgGfAwwDZTsFlldNUE7iZ0vlTL3OiuC6wPrHMjxL81D0Kc/BfzSyEGP+dGANMcuDMoc3PYgWWPGcj8p5h3bvx/UMO877e/NV9KmXOqd8ysUzS78wCbtG1XmU1T3uEOgC3KgyNrqWGvkBUuDqP3wFSPOAb8riAmmSeGCOsQGBXw8ibMa4Z4UUhylqikM0mPnXO7FtA591HSI8+xqhAwkZB4NUGsr0i7lE72wPOUV+U25WkX1maNAO8iOl3Ca3mE2I4Qs9+GlCsqrHaIKyLc75FvP3IDVHC+mSw/HZc3oCOsC2RcZ5r+B08TmAtx0RUAjEt6Kqkj6bVzLvtt6HVGvc4tr3Plef4HWufbaf/nzloAAAAASUVORK5CYII="
        />
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              My Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              My Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

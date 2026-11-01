import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function HeaderApp({ judul, menu }) {
  const [menuTerbuka, setMenuTerbuka] = useState(false);

  function tutupMenu() {
    setMenuTerbuka(false);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-deadlinein bg-white sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={tutupMenu}>
          {judul}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="menuUtama"
          aria-expanded={menuTerbuka}
          aria-label="Buka menu"
          onClick={() => setMenuTerbuka(!menuTerbuka)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${menuTerbuka ? "show" : ""}`}
          id="menuUtama"
        >
          <ul className="navbar-nav ms-auto">
            {menu.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  className="nav-link"
                  to={item.to}
                  end={item.to === "/"}
                  onClick={tutupMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderApp;
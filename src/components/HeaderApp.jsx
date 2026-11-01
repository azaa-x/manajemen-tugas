import { useState } from "react";

function HeaderApp({ judul, menu }) {
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const [menuAktif, setMenuAktif] = useState(menu[0].label);

  function pilihMenu(label) {
    setMenuAktif(label);
    setMenuTerbuka(false);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-deadlinein bg-white sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#beranda" onClick={() => pilihMenu(menu[0].label)}>
          {judul}
        </a>

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
              <li className="nav-item" key={item.label}>
                <a
                  className={`nav-link ${menuAktif === item.label ? "active" : ""}`}
                  aria-current={menuAktif === item.label ? "page" : undefined}
                  href={item.href}
                  onClick={() => pilihMenu(item.label)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderApp;
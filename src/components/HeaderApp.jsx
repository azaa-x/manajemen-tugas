function HeaderApp({ judul, tagline }) {
  return (
    <header className="navbar-deadlinein bg-white">
      <div className="container d-flex flex-column flex-sm-row align-items-sm-center justify-content-between py-2">
        <h1 className="brand-aplikasi mb-0">{judul}</h1>
        <p className="text-secondary mb-0">{tagline}</p>
      </div>
    </header>
  );
}

export default HeaderApp;
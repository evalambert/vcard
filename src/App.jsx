import Croix from "./assets/img/4.jpg";

function Header() {
  return (
    <>
      <header>
        <h1>Eva Lambert</h1>
      </header>
    </>
  );
}

function Main() {
  return (
    <main>
      <h2>
        <span className="font-graphic one">(</span>
        <span className="font-web">Web development</span>
        <br />
        <span className="font-graphic two">Graphic design )</span>
      </h2>
    </main>
  );
}

function Footer() {
  return (
    <>
      <footer>
        <address>
          <div className="mobile wrap-img">
            <img src={Croix} alt="croix" />
          </div>
          <div className="container">
            <a href="https://github.com/evalambert">
              GitHub.Profile
            </a>
            <div className="desktop wrap-img">
              <img src={Croix} alt="croix" />
            </div>
            <a href="mailto:lamberteva@hotmail.fr">
              lamberteva<span className="font-carta">@</span>hotmail.fr
            </a>
            <div className="desktop wrap-img">
              <img src={Croix} alt="croix" />
            </div>
            <a href="https://www.greta-oto.xyz/">www.greta-oto.xyz</a>
          </div>
          <div className="mobile wrap-img">
            <img src={Croix} alt="croix" />
          </div>
        </address>
      </footer>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default App;

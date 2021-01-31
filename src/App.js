import logo from './logo.svg';
import './App.css';

function App() {
  const marker = L.marker([51.5, -0.09]).addTo(mymap);

  const foo = "barrrr barrr baramm";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a practice website, just checking stuff out. 
        </p>
        <div id="mapid"></div>
        <h1>{foo}</h1>
        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          This orange bit is inside the app, and is also a link to google. 
        </a>
      </header>
    </div>
  );
}

export default App;

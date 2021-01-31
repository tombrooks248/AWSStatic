import logo from './logo.svg';
import './App.css';

function App() {
  const mymap = L.map('mapid').setView([51.505, -0.09], 13);
  const foo = "barrrr barrr baramm";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a practice website, just checking stuff out. 
        </p>
        <div id="mapid">{mymap}</div>
        <h1>{foo} Anyhing in here?</h1>
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

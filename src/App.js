import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a practice website, just checking stuff out. 
        </p>

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

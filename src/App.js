import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo
          img-fluid" alt="logo"  />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
        This project was coded by{" "}
        <a href="https://github.com/jkdeberry" target="_blank" rel="noopener noreferrer">
        Jeanine DeBerry</a>
        , and it is open-sourced on{" "}
        <a href="https://github.com/jkdeberry/jd-dictionary-project" target="_blank" rel="noopener noreferrer">
        GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://jd-dictionary-project.netlify.app/" target="_blank" rel="noopener noreferrer">
        Netlify
        </a>.
        </footer>
      </div>
    </div>
  );
}
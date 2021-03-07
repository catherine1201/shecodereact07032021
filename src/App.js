import logo from './logo.svg';
import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world
        </p>
      
        <Search />
      
      </header>
      <footer>Coded by <a href ="https://github.com/catherine1201" target="_blank"> Catherine LIM</a></footer>
    </div>
  );
}

export default App;

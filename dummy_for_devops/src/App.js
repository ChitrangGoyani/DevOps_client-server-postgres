import logo from './logo.svg';
import './App.css';
import Axios from "axios";
function App() {
  Axios({
    method: "GET",
    url: "http://localhost:3050/api/v1/students",
    headers: {
      "Content-Type" : "application/json"
    }
  }).then (res => {
    console.log(res.data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;

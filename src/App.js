import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form Submitted!", name);
  }
    return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <form onSubmit={handleSubmit}>
         <fieldset>
          <div className="Field">
              <label htmlFor='name'>Name:</label>
              <input 
                id='name'
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
          </div>
          <button disabled={!name} type="submit">Submit</button>
         </fieldset>
      </form>

    </div>
  );
}

export default App;

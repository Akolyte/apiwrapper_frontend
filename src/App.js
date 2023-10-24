import logo from './logo.svg';
import './App.css';

let response;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div class="form-wrapper">
            <textarea id="textInput" placeholder="Ask ChatGPT a question!" rows="5" cols="50"></textarea>
            <button type="submit" id="submitButton">Submit</button>
          </div>
        </form>
        <p>{response}</p>
      </header>
    </div>
  );
}

export default App;

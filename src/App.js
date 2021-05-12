import "./App.css";

//Components
import Data from './components/Data/Data'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name="Anjelica Ambrosio" />
        <Data />
      </header>

      <Footer />
    </div>
  );
}

export default App;

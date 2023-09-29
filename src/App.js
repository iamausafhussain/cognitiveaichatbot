import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./widgets/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <Weather />
      <Footer />
    </div>
  );
}

export default App;

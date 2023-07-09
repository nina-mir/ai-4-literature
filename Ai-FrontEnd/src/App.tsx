import "./App.css";
import Selection from "./components/Selection";
import Response from "./components/Response";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <main className="container">
        <Selection />
        <Response />
      </main>
    </div>
  );
}

export default App;

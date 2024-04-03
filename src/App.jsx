import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <main>
      <Header />
      <div className="card-wrapper">
        <Card />
      </div>
    </main>
  );
}

export default App;

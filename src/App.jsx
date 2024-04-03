import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useSelector} from "react-redux";


function App() {
    const { mode } = useSelector((state) => state.darkMode);

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

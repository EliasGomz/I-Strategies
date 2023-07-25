import "./App.css";
import NavbarApp from "./Components/NavbarApp";
import RoutesNav from "./Routes";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavbarApp />
      <RoutesNav />
    </BrowserRouter>
  );
}

export default App;

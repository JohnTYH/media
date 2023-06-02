import { HashRouter as Router } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Pages from "./Routes";

function App() {
  return (
    <Router>
      <Navbar />
      <Pages />
      <Footer />
    </Router>
  );
}

export default App;

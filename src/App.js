import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import  Navbar from './Components/NavBar';
import Footer from "./Components/Footer";
import Home from './Pages/Home';
import PhotographyMain from './Pages/Photography';
import Gallery from "./Components/Gallery"
import portraitData from './Components/Gallery/portraits';
import eventsData from './Components/Gallery/events';
import performancesData from './Components/Gallery/performances';
import foodData from './Components/Gallery/food';
import graduationData from './Components/Gallery/graduation';
import sportsData from './Components/Gallery/sports';
import WeddingData from './Components/Gallery/weddings';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/photography' exact element={<PhotographyMain/>} />
        <Route path='/portraits' exact element={<Gallery data={portraitData}/>} />
        <Route path='/events' exact element={<Gallery data={eventsData}/>} />
        <Route path='/performances' exact element={<Gallery data={performancesData}/>} />
        <Route path='/food' exact element={<Gallery data={foodData}/>} />
        <Route path='/graduation' exact element={<Gallery data={graduationData}/>} />
        <Route path='/sports' exact element={<Gallery data={sportsData}/>} />
        <Route path='/weddings' exact element={<Gallery data={WeddingData}/>} />
        <Route path='/contact' exact element={<Contact/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "./components/Pages/Homes";
import WinterHolidays from "./components/Pages/WinterHolidays";
import NewYearTrips from "./components/Pages/NewYearTrips";
import VacationShowcase from "./components/Pages/VacationShowcase";
import DestinationCarousel from "./components/Pages/DestinationCarousel";

function App() {
  return (
    <Router basename="setsail_project">
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route index element={<Homes />} />
        <Route path="winter-holidays" element={<WinterHolidays />} />
        <Route path="new-year-trips" element={<NewYearTrips />} />
        <Route path="vacation-showcase" element={<VacationShowcase />} />
        <Route path="destination-carousel" element={<DestinationCarousel />} />
      </Routes>
    </Router>
  );
}

export default App;

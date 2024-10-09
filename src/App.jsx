import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; 
import Hero from './Components/Hero';
import Contact from './Pages/Contact';
import About from './Pages/About';
import AcademicMentorship from './Pages/AcademicMentorship';
import CommunityEngagement from "./Pages/CommunityEngagement";
import HealthWellness from './Pages/HealthWellness';
import SocialSkills from './Pages/SocialSkills';
import CareerMentorship from './Pages/CareerMentorship';
import PersonalDevelopment from './Pages/PersonalDevelopment';
import Apply from './Pages/Apply';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/AcademicMentorship" element={<AcademicMentorship />} /> 
          <Route path="/CommunityEngagement" element={<CommunityEngagement />} /> 
          <Route path="/SocialSkills" element={<SocialSkills />} />
          <Route path="/CareerMentorship" element={<CareerMentorship />} />
          <Route path="/PersonalDevelopment" element={<PersonalDevelopment />} /> 
          <Route path="/HealthWellness" element={<HealthWellness />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Apply" element={<Apply/>} />
        </Routes>
        <Footer />  
      </div>
    </BrowserRouter>
  );
}

export default App;

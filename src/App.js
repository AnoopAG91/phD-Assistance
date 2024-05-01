
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/InnerPages/AboutUs';
import Whatsapp from './Components/WhatsAppIcon/Whatsapp';
import ContactUs from './Components/Pages/InnerPages/ContactUs';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <ScrollToTop/>
      <Whatsapp/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

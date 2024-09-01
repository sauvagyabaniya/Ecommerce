import  React, {useState} from 'react';
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"
// components are inside {}
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import { BannerPage } from './pages/banner/bannerpage';
import TopHeader from './components/TopHeader/TopHeader';
import Home from './pages/home/Home';
import Login from './pages/user/login/Login';
import Register from './pages/user/register/Register';
import PageNotFound from './pages/notfound/PageNotFound';
import AboutUs from './pages/aboutus/AboutUs';
import LearnMore from './pages/learnmore/LearnMore';

function App() {
//   return React.createElement("div",
//   null,
//   React.createElement("h1", null, "Welcome!"),
// React.createElement("p", null, "HEy")
return (
  <>
  
  {/* this h1 is jsx which help to run code it looks like html but it is not html  */}
 {/* <TopHeader />
   <Header/>
   <BannerPage/>
  <Footer/> */}

  
  <Router>
    <TopHeader title="S&S Rewards" />
      <Header />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/S&S-login" element={<Login />} />
      <Route path="/s&s-register" element={<Register />} />
      <Route path="/about-us-details" element={<AboutUs />} />
      <Route path="/more-info" element={<LearnMore />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
<Footer/>
    </Router>
  </>
  );
}
export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import AboutUs from "./components/about/AboutUs";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Dashboard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { LanguageProvider } from "./contexts/languageContext";

import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutUs";
import Dashboard from "./components/dashboard/Dashboard";
import Contacts from "./components/contacts/Contacts";
import Certificates from "./components/certificates/Certificates";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Dashboard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;

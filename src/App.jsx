import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { whatsapp } from "./assets/icons";
import {
  About,
  Certifications,
  Contact,
  Experience,
  Home,
  Links,
  NotFound,
  Projects,
} from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/certifications"
            element={
              <>
                <Navbar />
                <Certifications />
                <Footer />
              </>
            }
          />
          <Route
            path="/experience"
            element={
              <>
                <Navbar />
                <Experience />
                <Footer />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Navbar />
                <Projects />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* WhatsApp Widget */}
        <a
          href="https://wa.me/62895402254310?text=Halo%20Alif%2C%20saya%20tertarik%20dengan%20layanan%20Anda%20dan%20ingin%20berdiskusi%20lebih%20lanjut."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-14 h-14"
        >
          <img src={whatsapp} alt="WhatsApp" className="w-8 h-8 filter brightness-0 invert" />
        </a>
      </Router>
    </main>
  );
};

export default App;

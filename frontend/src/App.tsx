import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Flip, ToastContainer } from "react-toastify";

import { Navbar, Footer } from "components";
import { About, Contact, Home, Login, Pricing, Register } from "pages";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar authenticated={false} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeButton={false}
        newestOnTop={false}
        closeOnClick={false}
        draggable={false}
        pauseOnHover={false}
        hideProgressBar={true}
        transition={Flip}
      />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Flip, ToastContainer } from "react-toastify";

import { Navbar, Footer } from "components";
import {
  About,
  Contact,
  Dashboard,
  Home,
  Login,
  Pricing,
  Register,
} from "pages";
import { PrivateRoute, PublicRoute } from "routes";
import { AppContainer } from "container";

import "react-toastify/dist/ReactToastify.css";
import { AuthListener } from "context";

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
      <AuthListener />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<PublicRoute to="/app" />}>
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
          </Route>
          <Route element={<PrivateRoute to="/login" />}>
            <Route path="app" element={<AppContainer />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route index element={<Navigate to="dashboard" />} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;

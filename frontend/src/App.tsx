import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Flip, ToastContainer } from "react-toastify";

import { Navbar, Footer, Sidebar, Modal } from "components";
import {
  About,
  Calendar,
  Contact,
  Dashboard,
  Documents,
  Home,
  Login,
  Pricing,
  Projects,
  Register,
  Reports,
  Settings,
  Team,
} from "pages";
import { PrivateRoute, PublicRoute } from "routes";
import { AppContainer, ModalContainer } from "container";
import { AuthListener } from "context";

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
      <AuthListener />
      <ModalContainer />
      <Sidebar>
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
                <Route path="team" element={<Team />} />
                <Route path="projects" element={<Projects />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="documents" element={<Documents />} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />
                <Route index element={<Navigate to="dashboard" />} />
              </Route>
            </Route>
          </Routes>
        </AnimatePresence>
      </Sidebar>
    </div>
  );
};

export default App;

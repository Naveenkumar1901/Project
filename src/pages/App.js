import "../styles/app.css";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Home from "./Home";
import Delivered from "./Delivered";
import Schedule from "./Schedule";
import ServicePage from "./ServicePage";
import HomeBase from "../reusableComponent/HomeBase";
import ServicesBase from "../reusableComponent/ServicesBase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          {/* navigation */}
          <Route
            path="/"
            element={
              <Home>
                <HomeBase />
              </Home>
            }
          />
          <Route
            path="/upcoming"
            element={
              <Home>
                <ServicesBase type={"upcoming"} />
              </Home>
            }
          />
          <Route
            path="/delivered"
            element={
              <Home>
                <Delivered />
              </Home>
            }
          />
          <Route
            path="/schedule"
            element={
              <Home>
                <Schedule type={"schedule"} />
              </Home>
            }
          />
          <Route
            path="/services/:serviceName"
            element={
              <Home>
                <ServicePage />
              </Home>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

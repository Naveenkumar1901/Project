import "../styles/app.css";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import LayoutWrapper from "./LayoutWrapper";
import Delivered from "./Delivered";
import Schedule from "./Schedule";
import EachServiceForm from "./EachServiceForm";
import Home from "./Home";
import Upcoming from "./Upcoming";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/" element={<LayoutWrapper children={<Home />} />} />
          <Route
            path="/upcoming"
            element={<LayoutWrapper children={<Upcoming />} />}
          />
          <Route
            path="/delivered"
            element={<LayoutWrapper children={<Delivered />} />}
          />
          <Route
            path="/schedule"
            element={<LayoutWrapper children={<Schedule />} />}
          />

          <Route
            path="/services/:serviceName"
            element={<LayoutWrapper children={<EachServiceForm />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

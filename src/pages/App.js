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
import Payment from "./Payment";
import Profile from "./Profile";
import CreateCustomer from "./CreateCustomer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/home" element={<LayoutWrapper children={<Home />} />} />
          <Route
            path="/home/createCustomer"
            element={<LayoutWrapper children={<CreateCustomer />} />}
          />

          <Route
            path="/profile"
            element={<LayoutWrapper children={<Profile />} />}
          />
          <Route path="/offers" element={<LayoutWrapper />} />
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
            path="/schedule/payment"
            element={<LayoutWrapper children={<Payment />} />}
          />

          <Route
            path="/home/services/:serviceName"
            element={<LayoutWrapper children={<EachServiceForm />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

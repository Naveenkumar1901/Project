import "../styles/app.css";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Home from "./Home";
import Upcoming from "./Upcoming";
import Delivered from "./Delivered";
import Schedule from "./Schedule";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/delivered" element={<Delivered />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

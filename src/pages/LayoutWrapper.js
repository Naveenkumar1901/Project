import "../styles/layout.css";
import SideBar from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomerDetails } from "../redux/slices/customerSlice";
const LayoutWrapper = ({ children }) => {
  const theme = useSelector((state) => state.color.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomerDetails());
  }, [dispatch]);
  return (
    <div className="layout">
      {/* <loading /> */}
      <SideBar
        displayName="Naveen"
        theme={theme === "dark" ? "dark-theme" : "light-theme"}
      />
      <section
        className={`layoutContent ${
          theme === "dark" ? "dark-theme" : "light-theme"
        }`}
      >
        {children}{" "}
      </section>
    </div>
  );
};

export default LayoutWrapper;

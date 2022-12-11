import "../styles/layout.css";
import SideBar from "../components/sidebar";
import { useSelector } from "react-redux";
const LayoutWrapper = ({ children }) => {
  const theme = useSelector((state) => state.color.theme);

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

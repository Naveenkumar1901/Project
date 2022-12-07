import "../styles/layout.css";
import SideBar from "../components/sidebar";
const LayoutWrapper = ({ children }) => {
  // const [loading, setLoading] = useState(true);

  return (
    <div className="layout">
      {/* <loading /> */}
      <SideBar displayName="Naveen" />
      <section className="layoutContent">{children} </section>
    </div>
  );
};

export default LayoutWrapper;

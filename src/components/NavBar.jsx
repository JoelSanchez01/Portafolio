import { Tabs, Tab } from "react-bootstrap";
import "../assets/styles/NavBar.css";
import Sobremi from "./Sobremi";
import Proyectos from "./Proyectos";

const NavBar = () => {
  return (
    <Tabs
      justify
      className="justify-content-center align-items-center tabulador"
      defaultActiveKey="link-1"
    >
      <Tab eventKey="link-1" title="Sobre mi">
        <Sobremi />
      </Tab>

      <Tab eventKey="link-3" title="Proyectos">
        <Proyectos />
      </Tab>
    </Tabs>
  );
};

export default NavBar;

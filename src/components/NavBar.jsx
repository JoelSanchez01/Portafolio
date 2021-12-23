import { Tabs, Tab, TabContainer } from "react-bootstrap";

const NavBar = () => {
  return (
    <Tabs
      justify
      className="justify-content-center align-items-center"
      defaultActiveKey="link-1"
    >
      <TabContainer title="Joel Sanchez"></TabContainer>

      <Tab eventKey="link-1" title="Sobre mi">
        <h1>Sobre mi</h1>
      </Tab>

      <Tab eventKey="link-2" title="Certificaciones">
        <h1>Certificaciones</h1>
      </Tab>

      <Tab eventKey="link-3" title="Proyectos">
        <h1>Proyectos</h1>
      </Tab>
    </Tabs>
  );
};

export default NavBar;

import { Card, Button } from "react-bootstrap";

const Proyecto = (props) => {
  const { foto, titulo, descripcion, enlace } = props;
  return (
    <Card bg="dark">
      <Card.Img variant="top" src={require(`../${foto}`)} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
      <Button className="button" target="_blank" href={enlace} rel="noreferrer">
        Ver Proyecto
      </Button>
    </Card>
  );
};

export default Proyecto;

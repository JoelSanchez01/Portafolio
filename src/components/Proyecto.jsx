import { Card, Button } from "react-bootstrap";

const Proyecto = (props) => {
  const { foto, titulo, descripcion, enlace } = props;
  return (
    <Card style={{ width: "20%", height: "220px" }} bg="dark">
      <Card.Img variant="top" src={foto} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Link href={enlace}>Ver Enlace</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Proyecto;

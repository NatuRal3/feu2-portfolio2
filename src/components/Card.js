import Card from "react-bootstrap/Card";

function Card_(props) {
  return (
    <Card style={props.stylename}>
      <Card.Img src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Card_;

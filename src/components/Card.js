import Card from "react-bootstrap/Card";

function Card_(props) {
  return (
    <Card style={props.stylename}>
      <Card.Title>{props.title}</Card.Title>
      <Card.Body>
        <Card.Img src={props.image} />
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href={props.github} target="_blank">
          <i class="bi bi-github cardlink"></i>
        </Card.Link>
        <Card.Link href={props.visit} target="_blank">
          <i class="bi bi-box-arrow-up-right cardlink"></i>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Card_;

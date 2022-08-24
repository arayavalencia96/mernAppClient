import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";

function Footerr() {
  return (
    <Card style={{ position: "absolute", bottom: "0", width: "100%" }}>
      <Card.Footer style={{ background: "#212529" }}>
        <Container>
          <p
            style={{ color: "white", placeItems: "center" }}
            className="d-flex justify-content-center"
          >
            Done by Axel Araya
            <Button variant="dark" href="https://www.linkedin.com/in/arayavalencia/" target="_blank">
              <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
            </Button>
          </p>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default Footerr;

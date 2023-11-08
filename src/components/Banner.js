import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
              <div >
                <h1>Welcome to Nice Recipes</h1>
                  <p>
                      The best recipes
                  </p>
              </div>
        </Row>
      </Container>
    </section>
  )
}

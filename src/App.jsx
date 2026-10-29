import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { useCart } from "./context/CartContext";
import { useState } from "react";

import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

import Cart from "./components/Cart";
import "./App.css";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);

  const { addToCart, totalQuantity } = useCart();

  return (
    <div className="store">
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            The Generics
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="store-navbar" />

          <Navbar.Collapse id="store-navbar">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/store">
                Store
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav>

            <Button
              variant="outline-light"
              type="button"
              onClick={() => setShowCart(true)}
            >
              Cart ({totalQuantity})
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/store"
          element={
            <>
              <header className="store-header text-center">
                <Container>
                  <h1 className="display-3 fw-bold">The Generics</h1>
                  <p className="lead mb-0">Explore our collection</p>
                </Container>
              </header>

              <main className="py-5">
                <Container>
                  <h2 className="text-center mb-5">MUSIC</h2>

                  <Row className="g-4">
                    {productsArr.map((product) => (
                      <Col key={product.title} xs={12} sm={6} lg={3}>
                        <Card className="product-card h-100 shadow-sm">
                          <Card.Img
                            variant="top"
                            src={product.imageUrl}
                            alt={product.title}
                            className="product-image"
                          />

                          <Card.Body className="d-flex flex-column">
                            <Card.Title className="text-center">
                              {product.title}
                            </Card.Title>

                            <div className="mt-auto d-flex justify-content-between align-items-center gap-2">
                              <span className="fw-semibold">
                                ${product.price.toFixed(2)}
                              </span>

                              <Button
                                variant="primary"
                                type="button"
                                onClick={() => addToCart(product)}
                              >
                                Add to Cart
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </main>

              <footer className="store-footer text-center py-4">
                <Container>
                  <h3 className="mb-0">The Generics</h3>
                </Container>
              </footer>
            </>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>

      <Cart show={showCart} onHide={() => setShowCart(false)} />
    </div>
  );
}

export default App;

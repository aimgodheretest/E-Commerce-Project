import { useCart } from "../context/CartContext";
import { Modal, Button, Image, Row, Col } from "react-bootstrap";

function Cart({ show, onHide }) {
  const { cartElements, removeFromCart } = useCart();

  const totalAmount = cartElements.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cartElements.length === 0 ? (
          <p className="text-center py-4">Your cart is empty.</p>
        ) : (
          <>
            <Row className="fw-bold border-bottom pb-2 mb-3">
              <Col xs={5}>ITEM</Col>
              <Col xs={3}>PRICE</Col>
              <Col xs={4}>QUANTITY</Col>
            </Row>

            {cartElements.map((item) => (
              <Row
                key={item.title}
                className="align-items-center border-bottom py-3"
              >
                <Col xs={5}>
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={55}
                      height={55}
                      className="cart-image"
                    />
                    <span className="fw-semibold">{item.title}</span>
                  </div>
                </Col>

                <Col xs={3}>${item.price.toFixed(2)}</Col>

                <Col xs={4}>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <span className="border rounded px-2 py-1">
                      {item.quantity}
                    </span>

                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.title)}
                    >
                      Remove
                    </Button>
                  </div>
                </Col>
              </Row>
            ))}

            <div className="text-end mt-4">
              <h5>Total: ${totalAmount.toFixed(2)}</h5>
            </div>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;

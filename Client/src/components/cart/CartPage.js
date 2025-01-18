import React, { useState } from "react";
import CartRow from "./CartRow";
import "./CartPage.css";
import { Link, withRouter } from "react-router-dom";
import {
  removeFromCartAction,
  syncCartAction,
} from "../../actions/cartActions";
import { submitOrderAction } from "../../actions/ordersActions";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PaymentForm from "./PaymentForm";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CartPage(props) {
  const onCheckoutButtonClick = () => {
    let products = [];
    for (let element of props.cart) {
      let product = props.products.find((p) => p._id === element.id);
      console.log("element", element);
      products.push({
        id: element.id,
        name: product.name,
        quantity: element.quantity,
        price: product.price,
      });
    }
    props.submitOrder(products);
    props.history.push("/orders");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let total = 0;
  let cartIds = props.cart.map((c) => c.id);
  let productsInCart = props.products.filter((p) => cartIds.includes(p._id));

  for (let product of productsInCart) {
    product.quantity = props.cart.find((i) => i.id === product._id).quantity;
    total += product.quantity * product.price;
  }

  let cartRows = productsInCart.map((p, i) => (
    <CartRow
      key={i}
      product={p}
      syncCart={props.syncCart}
      removeFromCart={props.removeFromCart}
    />
  ));

  return (
    <div className="container">
      <table id="cart" className="table table-hover table-condensed">
        {productsInCart.length > 0 ? (
          <thead>
            <tr>
              <th style={{ width: 50 }}>Ապրանք</th>
              <th style={{ width: 10 }}>Գին</th>
              <th style={{ width: 8 }}>Քանակ</th>
              <th style={{ width: 22 }} className="text-center">
                Ընդհամենը
              </th>
              <th style={{ width: 10 }} />
            </tr>
          </thead>
        ) : (
          <h2
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Դուք որևէ ապրանք չեք ավելացրել ձեր զամբյուղ
          </h2>
        )}
        <tbody>{cartRows}</tbody>
        <tfoot>
          <tr>
            <td>
              <Link to="/products">
                <Button color="success" variant="contained">
                  {" "}
                  <ArrowBackIosIcon fontSize="small" /> Շարունակել գնումները
                </Button>
              </Link>
            </td>
            <td colSpan="2" className="hidden-xs" />
            <td className="hidden-xs text-center">
              <strong>Ընդհանուր {total}֏</strong>
            </td>
            {productsInCart.length > 0 && (
              <td>
                <Button variant="outlined" onClick={handleOpen}>
                  Վճարել <ArrowForwardIosIcon fontSize="small" />
                </Button>
              </td>
            )}
          </tr>
        </tfoot>
      </table>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={modalStyle}>
          <PaymentForm onPay={onCheckoutButtonClick} />
        </Box>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    syncCart: (id, quantity, size) => dispatch(syncCartAction(id, quantity)),
    removeFromCart: (id) => dispatch(removeFromCartAction(id)),
    submitOrder: (data) => dispatch(submitOrderAction(data)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartPage),
);

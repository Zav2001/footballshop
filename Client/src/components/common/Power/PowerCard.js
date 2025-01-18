import Auth from "../../../utils/auth";
import { deleteProductAction } from "../../../actions/productsActions";
import { addToCartAction } from "../../../actions/cartActions";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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

const PowerCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function onOrderButtonClick() {
    if (Auth.isUserAuthenticated()) {
      props.addToCart(props.id);
      props.history.push("/cart");
    } else {
      props.history.push("/login");
    }
  }

  function onDeleteButtonClick() {
    props.deleteProduct(props.id);
  }

  const { id, name, image, brand, price } = props;
  let footer;
  if (Auth.isUserAdmin()) {
    footer = (
      <div /*className='card-footer'*/>
        <Typography color={"blue"}>{price}֏</Typography>
        <Button color="error" variant="contained" onClick={handleOpen}>
          <i className="fa fa-trash" />
        </Button>
        <Link style={{ marginLeft: "15px" }} to={`/admin/edit/${id}`}>
          <Button variant="contained">
            <i className="fa fa-edit" />
          </Button>
        </Link>
      </div>
    );
  } else {
    footer = (
      <div style={{ marginLeft: "225px" }}>
        <Typography variant="h6" color={"blue"}>
          {price}֏
        </Typography>
      </div>
    );
  }

  return (
    <Card sx={{ width: 345, margin: "15px" }}>
      <Link to={`/details/${id}`}>
        <CardMedia
          sx={{ height: 315, margin: "15px", backgroundSize: "contain" }}
          image={image}
          title={name}
        />
        <CardContent sx={{ height: "150px", margin: "15px" }}>
          <Typography gutterBottom variant="h6" component="div" color="primary">
            {brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </Link>
      <CardActions
        sx={{ height: Auth.isUserAdmin() ? "80px" : "10px", margin: "15px" }}
      >
        {footer}
      </CardActions>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Վստա՞հ եք, որ ցանկանում եք ջնջել այս ապրանքը:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{ mr: "5px" }}
              color="error"
              variant="contained"
              onClick={onDeleteButtonClick}
            >
              Այո
            </Button>
            <Button variant="contained" onClick={() => setOpen(false)}>
              Ոչ
            </Button>
          </Box>
        </Box>
      </Modal>
    </Card>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id) => dispatch(addToCartAction(id)),
    deleteProduct: (id) => dispatch(deleteProductAction(id)),
  };
}

export default withRouter(
  connect(() => {
    return {};
  }, mapDispatchToProps)(PowerCard),
);

import Button from "@mui/material/Button";
import React from "react";
import toastr from "toastr";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function CartRow(props) {
  const onChange = (e) => {
    if (e.target.value < 1) {
      toastr.error("Պատվերի նվազագույն քանակը 1 ապրանք է։");
      return false;
    }
    props.syncCart(props.product._id, parseInt(e.target.value, 10));
  };

  const onRefreshButtonClick = () => {
    props.syncCart(props.product._id, 1);
  };

  const onDeleteButtonClick = () => {
    props.removeFromCart(props.product._id);
  };

  const { image, name, price } = props.product;
  const subtotal = props.product.quantity * price;

  return (
    <tr>
      <td data-th="Product">
        <div className="row">
          <div className="col-sm-4 hidden-xs">
            <img src={image} alt="..." className="cart-image" />
          </div>
          <div className="col-sm-8">
            <h4 className="nomargin">{name}</h4>
          </div>
        </div>
      </td>
      <td data-th="Price">{price}֏</td>
      <td data-th="Quantity">
        <input
          type="number"
          name="quantity"
          className="form-control text-center"
          value={props.product.quantity}
          onChange={onChange}
        />
      </td>
      <td data-th="Subtotal" className="text-center">
        {subtotal}֏
      </td>
      <td className="actions" data-th="">
        <Button variant="contained" onClick={onRefreshButtonClick}>
          <AutorenewIcon />
        </Button>
        <Button
          sx={{ ml: "5px" }}
          color="error"
          variant="contained"
          onClick={onDeleteButtonClick}
        >
          <DeleteOutlineIcon />
        </Button>
      </td>
    </tr>
  );
}

export default CartRow;

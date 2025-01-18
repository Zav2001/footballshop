import React from "react";
import { Link } from "react-router-dom";

const OrderDetailsRow = (props) => {
  const { name, quantity, price, id } = props.product;
  let total = quantity * price;
  return (
    <tr>
      <th>#{props.index + 1}</th>
      <Link target="_blank" to={`/details/${id}`}>
        <td style={{ color: "blue" }}>{name}</td>
      </Link>
      <td>{price}֏</td>
      <td>{quantity}</td>
      <td>{total}֏</td>
    </tr>
  );
};

export default OrderDetailsRow;

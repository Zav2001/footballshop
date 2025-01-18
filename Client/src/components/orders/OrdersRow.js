import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const OrdersRow = (props) => {
  const isAdmin = Auth.isUserAdmin();
  const { date, products, status } = props.order;
  let totalPrice = 0;
  for (const product of products) {
    totalPrice += product.quantity * product.price;
  }

  return (
    <tr>
      <th>#{props.index + 1}</th>
      {isAdmin && <td>{props.order.creator}</td>}
      <td>{new Date(date).toLocaleString()}</td>
      <td>{totalPrice}֏</td>
      <td>
        <span className="label label-info">
          {(status === "Pending" && "Հաստատված չէ") ||
            (status === "Approved" && "Հաստատված է")}
        </span>
      </td>
      <td>
        <Link
          to={`/orders/details/${props.order._id}`}
          className="btn btn-outline-primary btn-sm"
        >
          Տեսնել
        </Link>
      </td>
      {isAdmin && (
        <td>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => props.onApprove(props.order._id)}
            disabled={status === "Approved"}
          >
            Հաստատել
          </button>
        </td>
      )}
    </tr>
  );
};

export default OrdersRow;

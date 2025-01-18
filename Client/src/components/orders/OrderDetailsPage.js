import React, { useEffect } from "react";
import OrderDetailsRow from "./OrderDetailsRow";
import Auth from "../../utils/auth";
import NotFoundPage from "../common/NotFound/NotFoundPage";
import {
  fetchUserOrdersAction,
  fetchPendingOrdersAction,
} from "../../actions/ordersActions";
import { connect } from "react-redux";

const OrderDetailsPage = ({
  userOrders,
  pendingOrders,
  fetchUserOrders,
  fetchPendingOrders,
  match,
}) => {
  useEffect(() => {
    if (Auth.isUserAdmin()) {
      fetchPendingOrders();
    } else {
      fetchUserOrders();
    }
  }, [fetchUserOrders, fetchPendingOrders]);

  const orders = Auth.isUserAdmin() ? pendingOrders : userOrders;

  if (orders.length === 0) {
    return <h3 className="text-primary">Loading...</h3>;
  }

  const orderId = match.params.id;
  const order = orders.find((o) => o._id === orderId);

  if (!order) {
    return <NotFoundPage errMessage="ORDER NOT FOUND" />;
  }

  let totalPrice = 0;
  for (const product of order.products) {
    totalPrice += product.quantity * product.price;
  }

  const products = order.products.map((p, i) => (
    <OrderDetailsRow key={i} product={p} index={i} />
  ));

  return (
    <div className="container mt-4">
      <h1 className="text-center">Պատվեր #{order._id}</h1>
      <div className="row space-top">
        <div className="col-md-12 mt-3">
          <p>
            <span className="font-weight-bold lead text-primary">
              Ապրանքների քանակը:
            </span>{" "}
            <span className="ml-2 lead">{order.products.length}</span>
          </p>
          <p>
            <span className="font-weight-bold lead text-primary">Ամսաթիվ:</span>{" "}
            <span className="ml-2 lead">
              {new Date(order.date).toLocaleString()}
            </span>
          </p>
          <p>
            <span className="font-weight-bold lead text-primary">
              Ընդհամենը:
            </span>{" "}
            <span className="ml-2 lead">֏{totalPrice}</span>
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12" id="customer-orders">
          <div className="box">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th>Անուն</th>
                    <th>Գին</th>
                    <th>Քանակ</th>
                    <th>Ընդհամենը</th>
                  </tr>
                </thead>
                <tbody>{products}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userOrders: state.userOrders,
  pendingOrders: state.pendingOrders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserOrders: () => dispatch(fetchUserOrdersAction()),
  fetchPendingOrders: () => dispatch(fetchPendingOrdersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailsPage);

import React, { useEffect } from "react";
import OrdersRow from "./OrdersRow";
import Auth from "../../utils/auth";
import {
  fetchUserOrdersAction,
  fetchPendingOrdersAction,
  approveOrderAction,
} from "../../actions/ordersActions";
import { connect } from "react-redux";

const OrdersPage = ({
  userOrders,
  pendingOrders,
  fetchUserOrders,
  fetchPendingOrders,
  approveOrder,
}) => {
  useEffect(() => {
    if (Auth.isUserAdmin()) {
      fetchPendingOrders();
    } else {
      fetchUserOrders();
    }
  }, [fetchUserOrders, fetchPendingOrders]);

  const isAdmin = Auth.isUserAdmin();
  const orders = isAdmin ? pendingOrders : userOrders;
  const sortedOrders = orders.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  const heading = isAdmin ? "Պատվերներ" : "Իմ Պատվերները";
  const noOrdersMessage = isAdmin
    ? "Ներկայումս պատվերներ չկան:"
    : "Դուք ոչ մի պատվեր չեք կատարել:";

  const handleApproveOrder = (id) => {
    approveOrder(id);
    window.location.reload(true);
  };

  return (
    <div className="container" style={{ paddingTop: 25 }}>
      <h1 className="text-center">{heading}</h1>
      <div className="row" style={{ paddingTop: 25 }}>
        <div className="col-md-12" id="customer-orders">
          <div className="box">
            <div className="table-responsive">
              {sortedOrders.length !== 0 && (
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Պատվեր</th>
                      {isAdmin && <th>Պատվիրել է</th>}
                      <th>Ամսաթիվ</th>
                      <th>Ընդհանուր</th>
                      <th>Կարգավիճակ</th>
                      <th>Մանրամասն</th>
                      {isAdmin && <th>Գործողություն</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {sortedOrders.length &&
                      sortedOrders.map((o, i) => (
                        <OrdersRow
                          key={o._id}
                          order={o}
                          index={i}
                          onApprove={handleApproveOrder}
                        />
                      ))}
                  </tbody>
                </table>
              )}
              {!sortedOrders.length && (
                <h3 className="text-primary">{noOrdersMessage}</h3>
              )}
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
  approveOrder: (id) => dispatch(approveOrderAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);

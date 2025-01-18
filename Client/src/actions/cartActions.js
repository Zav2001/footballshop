import actionTypes from "./actionTypes";

function addToCartAction(id, size) {
  return {
    type: actionTypes.ADD_TO_CART,
    id,
    size,
  };
}

function removeFromCartAction(id) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    id,
  };
}

function syncCartAction(id, quantity, size) {
  return {
    type: actionTypes.SYNC_CART,
    id,
    quantity,
    size,
  };
}

export { addToCartAction, syncCartAction, removeFromCartAction };

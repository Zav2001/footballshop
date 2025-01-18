import React from "react";
import Info from "./Info";
import ReviewsContainer from "./ReviewsContainer";
import Auth from "../../utils/auth";
import NotFoundPage from "../common/NotFound/NotFoundPage";
import {
  likeProductAction,
  unlikeProductAction,
} from "../../actions/productsActions";
import { addToCartAction } from "../../actions/cartActions";
import { connect } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

const DetailsPage = ({
  match,
  products,
  likeProduct,
  unlikeProduct,
  addToCart,
  history,
}) => {
  const productId = match.params.id;
  const product = products.find((p) => p._id === productId);

  if (!product) {
    return <NotFoundPage errMessage="PRODUCT NOT FOUND" />;
  }

  const username = Auth.getUsername();

  return (
    <div className="container">
      <div className="row space-top">
        <div className="col-md-12">
          <h1>
             {product.name}
          </h1>
        </div>
      </div>
      <Info
        product={product}
        username={username}
        likeProduct={likeProduct}
        unlikeProduct={unlikeProduct}
        addToCart={addToCart}
      />
      <ReviewsContainer product={product} />
      <div style={{ height: "200px", marginTop: "20px" }}>
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Այլ ապրանքներ
        </h3>
        <Slide slidesToScroll={1} slidesToShow={5} indicators={true}>
          {products.map((product) => {
            return (
              <a href={`/details/${product._id}`}>
                <img
                  style={{
                    border: "1px solid blue",
                    height: "200px",
                    width: "200px",
                    cursor: "pointer",
                    margin: "0px 5px 0px 5px",
                  }}
                  src={product.image}
                />
              </a>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    likeProduct: (id) => dispatch(likeProductAction(id)),
    unlikeProduct: (id) => dispatch(unlikeProductAction(id)),
    addToCart: (id, size) => dispatch(addToCartAction(id, size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);

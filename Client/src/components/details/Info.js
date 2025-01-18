import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import toastr from "toastr";
import Auth from "../../utils/auth";
import "./info.css";

const Info = ({
  product,
  username,
  likeProduct,
  unlikeProduct,
  addToCart,
  history,
}) => {
  const [selectedSize, setSelectedSize] = useState();
  const [selectedImage, setSelectedImage] = useState(product.image);
  const onLikeButtonClick = () => {
    if (product.likes.includes(username)) {
      unlikeProduct(product._id);
    } else {
      likeProduct(product._id);
    }
  };

  const onOrderButtonClick = (e) => {
    if (!selectedSize) {
      toastr.error("Խնդրում ենք ընտրել չափսը");
      return;
    }
    e.preventDefault();
    addToCart(product._id, selectedSize);
    history.push("/cart");
  };

  let buttonText = "Հավանել";
  if (product.likes.includes(username)) {
    buttonText = "Չհավանել";
  }

  const sizes = [];

  for (let i = 36; i <= 50; i++) {
    sizes.push(i);
  }

  let sizesText = "Ընտրել չափսը";

  if (Auth.isUserAdmin()) {
    sizesText = "Առկա չափսեր";
  }

  return (
    <div className="row space-top">
      <div className="col-md-4">
        <div className="card text-white bg-primary">
          <div className="card-body bg-light">
            <blockquote className="card-blockquote">
              <img
                src={selectedImage}
                alt={product.name}
                className="mainImage"
              />
            </blockquote>
          </div>
        </div>
        <div>
          {product.images.map((image, index) => {
            return (
              <img
                className="images"
                key={index}
                alt={image}
                src={image}
                onClick={() => setSelectedImage(image)}
              />
            );
          })}
        </div>
      </div>
      <div className="col-md-4">
        <p>
          <span className="light-blue-text">Նկարագրություն</span>:{" "}
          {product.description}
        </p>
        <p>
          <span className="light-blue-text">Գին</span>:
          {product.price}֏
        </p>
        <p>
          <span className="light-blue-text">Հավանումներ</span>:{" "}
          {product.likes.length}
        </p>
        <Button color="primary" variant="outlined" onClick={onLikeButtonClick}>
          {buttonText}
        </Button>
        {!Auth.isUserAdmin() && (
          <Button
            sx={{ ml: "10px" }}
            variant="contained"
            onClick={onOrderButtonClick}
          >
            Պատվիրել
          </Button>
        )}
      </div>
      <div
        style={{ border: "1px solid black", height: "200px" }}
        className="col-md-4"
      >
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          {sizesText}
        </h3>
        {sizes.map((size, index) => {
          return (
            <Button
              onClick={() => setSelectedSize(size)}
              key={index}
              sx={{ margin: "2px" }}
              variant={selectedSize === index + 36 ? "contained" : "outlined"}
            >
              {size}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(Info);

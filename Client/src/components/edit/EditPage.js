import React, { useState, useEffect } from "react";
import Input from "../auth/Input";
import toastr from "toastr";
import createProductValidator from "../../utils/createProductValidator";
import NotFoundPage from "../common/NotFound/NotFoundPage";
import { createProductValidationFunc } from "../../utils/formValidator";
import {
  editProductAction,
  fetchProductsAction,
} from "../../actions/productsActions";
import { redirectAction } from "../../actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const EditPage = ({
  match,
  editProduct,
  editProductSuccess,
  editProductError,
  products,
  redirect,
  fetchProducts,
  history,
}) => {
  const [state, setState] = useState({
    brand: "",
    name: "",
    description: "",
    weight: "1",
    price: "",
    image: "",
  });

  useEffect(() => {
    const productId = match.params.id;
    let product = products.find((p) => p._id === productId);
    if (!product) {
      fetchProducts();
    } else {
      setState({
        brand: product.brand,
        name: product.name,
        description: product.description,
        weight: product.weight,
        price: product.price,
        image: product.image,
      });
    }
  }, [match.params.id, products, fetchProducts]);

  useEffect(() => {
    if (editProductError.hasError) {
      toastr.error(editProductError.message);
    } else if (editProductSuccess) {
      redirect();
      toastr.success("Ապրանքը բարեհաջող խմբագրվել է");
      history.push("/products");
    }
  }, [editProductSuccess, editProductError, redirect, history]);

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { brand, name, description, image, weight, price } = state;
    if (
      !createProductValidator(brand, name, description, image, weight, price)
    ) {
      return;
    }
    editProduct(
      match.params.id,
      brand,
      name,
      description,
      image,
      weight,
      price,
    );
  };

  const { brand, name, description, image, price } = state;
  let product = products.find((o) => o._id === match.params.id);
  if (!product) {
    return <NotFoundPage errMessage="PRODUCT NOT FOUND" />;
  }

  let validObj = createProductValidationFunc(
    brand,
    name,
    description,
    image,
    state.weight,
    price,
  );

  return (
    <div className="container">
      <div className="row space-top">
        <div className="col-md-12">
          <h1>Խմբագրել ապրանքը</h1>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="row space-top">
          <div className="col-md-4">
            <Input
              type="text"
              name="brand"
              label="Ապրանքանիշ"
              placeholder="Մուտքագրեք ապրանքի ապրանքանիշը"
              value={brand}
              onChange={onChange}
              valid={validObj.validBrand}
            />
            <Input
              type="text"
              name="name"
              label="Անուն"
              placeholder="Մուտքագրեք ապրանքի անունը"
              value={name}
              onChange={onChange}
              valid={validObj.validName}
            />
            <Input
              type="text"
              name="description"
              label="Նկարագրությունը"
              placeholder="Մուտքագրեք ապրանքի նկարագրությունը"
              value={description}
              onChange={onChange}
              valid={validObj.validDescription}
            />
            <Input
              type="text"
              name="image"
              label="Նկարի հասցե"
              placeholder="Մուտքագրեք ապրանքի նկարի հասցեն"
              value={image}
              onChange={onChange}
              valid={validObj.validImage}
            />
            <Input
              type="number"
              name="price"
              label="Գին"
              placeholder="Մուտքագրեք ապրանքի գինը"
              value={price}
              onChange={onChange}
              valid={validObj.validPrice}
            />
            <input type="submit" className="btn btn-warning" value="Խմբագրել" />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    editProductSuccess: state.editProduct.success,
    editProductError: state.editProductError,
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editProduct: (id, brand, name, description, image, weight, price) => {
      dispatch(
        editProductAction(id, {
          brand,
          name,
          description,
          image,
          weight,
          price,
        }),
      );
    },
    redirect: () => dispatch(redirectAction()),
    fetchProducts: () => dispatch(fetchProductsAction()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditPage),
);

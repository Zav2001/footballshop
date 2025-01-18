import React, { useState, useEffect } from "react";
import Input from "../auth/Input";
import toastr from "toastr";
import createProductValidator from "../../utils/createProductValidator";
import { createProductValidationFunc } from "../../utils/formValidator";
import { createProductAction } from "../../actions/productsActions";
import { redirectAction } from "../../actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const CreatePage = (props) => {
  const [formData, setFormData] = useState({
    brand: "",
    name: "",
    description: "",
    weight: "1",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (props.createProductError.hasError) {
      toastr.error(props.createProductError.message);
    } else if (props.createProductSuccess) {
      props.redirect();
      toastr.success("Ապրանքը հաջողությամբ ստեղծվեց");
      props.history.push("/products");
    }
  }, [props.createProductSuccess, props.createProductError]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !createProductValidator(
        formData.brand,
        formData.name,
        formData.description,
        formData.image,
        formData.weight,
        formData.price,
      )
    ) {
      return;
    }
    props.createProduct(
      formData.brand,
      formData.name,
      formData.description,
      formData.image,
      formData.weight,
      formData.price,
    );
  };

  const validObj = createProductValidationFunc(
    formData.brand,
    formData.name,
    formData.description,
    formData.image,
    formData.weight,
    formData.price,
  );

  return (
    <div className="container">
      <div className="row space-top">
        <div className="col-md-12">
          <h1>Ստեղծել Նոր Ապրանք</h1>
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
              value={formData.brand}
              onChange={onChange}
              valid={validObj.validBrand}
            />
            <Input
              type="text"
              name="name"
              label="Անուն"
              placeholder="Մուտքագրեք ապրանքի անունը"
              value={formData.name}
              onChange={onChange}
              valid={validObj.validName}
            />
            <Input
              type="text"
              name="description"
              label="Նկարագրություն"
              placeholder="Մուտքագրեք ապրանքի նկարագրությունը"
              value={formData.description}
              onChange={onChange}
              valid={validObj.validDescription}
            />
            <Input
              type="text"
              name="image"
              label="Նկարի հասցե"
              placeholder="Մուտքագրեք ապրանքի նկարի հասցեն"
              value={formData.image}
              onChange={onChange}
              valid={validObj.validImage}
            />
            <Input
              type="number"
              name="price"
              label="Գին"
              placeholder="Մուտքագրեք ապրանքի գինը"
              value={formData.price}
              onChange={onChange}
              valid={validObj.validPrice}
            />
            <input type="submit" className="btn btn-primary" value="Ստեղծել" />
          </div>
        </div>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    createProductSuccess: state.createProduct.success,
    createProductError: state.createProductError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createProduct: (brand, name, description, image, weight, price) => {
      dispatch(
        createProductAction({ brand, name, description, image, weight, price }),
      );
    },
    redirect: () => dispatch(redirectAction()),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreatePage),
);

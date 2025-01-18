import React, { useState } from "react";
import Review from "./Review";
import createReviewValidator from "../../utils/createReviewValidator";
import { createProductReviewAction } from "../../actions/productsActions";
import { connect } from "react-redux";

const ReviewsContainer = ({ product, createReviewError, createReview }) => {
  const [review, setReview] = useState("");

  const onChange = (e) => {
    setReview(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!createReviewValidator(review)) {
      setReview("");
      return;
    }

    const data = {
      review: review,
    };
    createReview(product._id, data);
    setReview("");
  };

  const reviews = product.reviews.map((r, i) => <Review key={i} review={r} />);

  return (
    <div className="row space-top">
      <div className="col-md-8">
        <form onSubmit={onSubmit}>
          <legend>Թողնել կարծիք</legend>
          <div className="form-group">
            <textarea
              className="form-control"
              name="review"
              value={review}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-warning" value="Հաստատել" />
          </div>
        </form>
      </div>
      {reviews}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    createReviewError: state.createReviewError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (id, data) => dispatch(createProductReviewAction(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

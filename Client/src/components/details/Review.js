import React from "react";

const Review = (props) => {
  const { review, createdBy } = props.review;
  return (
    <div className="col-md-8">
      <div className="text-success bg-white border border-success rounded">
        <div className="card-body">
          <blockquote className="card-blockquote">
            <p>{review}</p>
            <footer style={{ textAlign: "right" }}>
              Մեկնաբանել է:
              <cite> {createdBy}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Review;

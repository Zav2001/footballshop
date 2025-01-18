import toastr from "toastr";

function createReviewValidator(review) {
  review = review.trim();
  if (review.length < 4 || review === "") {
    toastr.error("Մեկնաբաությունը պետք է լինի առնվազն 4 նիշ");
    return false;
  }

  return true;
}

export default createReviewValidator;

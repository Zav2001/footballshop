import toastr from "toastr";

function createProductValidator(brand, name, description, image, price) {
  if (brand.length < 3 || brand === "") {
    toastr.error("Ապրանքանիշը պետք է լինի առնվազն 3 նիշ");
    return false;
  }

  if (name.length < 3 || name === "") {
    toastr.error("Անունը պետք է լինի առնվազն 3 նիշ");
    return false;
  }

  if (
    description.length < 10 ||
    description.length > 10000 ||
    description === ""
  ) {
    toastr.error("Նկարագրությունը պետք է լինի 10-ից մինչև 10000 նիշ");
    return false;
  }

  if (
    image.length < 14 ||
    !(image.startsWith("https://") || image.startsWith("http://"))
  ) {
    toastr.error("Պատկերի URL-ը պետք է լինի առնվազն 14 նիշ և վավեր URL լինի");
    return false;
  }

  if (!price || price < 0) {
    toastr.error("Գինը պետք է լինի դրական թիվ");
    return false;
  }

  return true;
}

export default createProductValidator;

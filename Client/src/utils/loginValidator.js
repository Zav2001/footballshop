import toastr from "toastr";
const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

function loginValidator(email, password) {
  if (!emailRegex.test(email) || email === "") {
    toastr.error("Խնդրում ենք տրամադրել ճիշտ էլփոստի հասցե");
    return false;
  }
  if (password.length < 8 || password === "") {
    toastr.error("Գաղտնաբառը պետք է լինի առնվազն 8 նիշ");
    return false;
  }

  return true;
}

export default loginValidator;

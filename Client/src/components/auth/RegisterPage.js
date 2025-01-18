import React, { useState, useEffect } from "react";
import Input from "./Input";
import registerValidator from "../../utils/registerValidator";
import toastr from "toastr";
import Auth from "../../utils/auth";
import { registerValidationFunc } from "../../utils/formValidator";
import {
  registerAction,
  loginAction,
  redirectAction,
} from "../../actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function RegisterPage(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (Auth.isUserAuthenticated()) {
      props.history.push("/");
    }
  }, []);

  useEffect(() => {
    if (props.registerError.hasError) {
      toastr.error(props.registerError.message);
    } else if (props.registerSuccess) {
      props.login(email, password);
    } else if (props.loginSuccess) {
      props.redirect();
      toastr.success("Գրանցումը հաջողվեց");
      props.history.push("/");
    }
  }, [props.registerSuccess, props.registerError, props.loginSuccess]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!registerValidator(username, email, password, confirmPassword)) return;

    props.register(username, email, password);
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const validObj = registerValidationFunc(
    email,
    username,
    password,
    confirmPassword,
  );

  return (
    <div className="container">
      <div className="row space-top">
        <div className="col-md-12">
          <h1>Գրանցվել</h1>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="row space-top">
          <div className="col-md-4">
            <Input
              type="text"
              name="email"
              label="էլ. փոստ"
              placeholder="Մուտքագրեք էլ. փոստի հասցեն"
              value={email}
              onChange={onChange}
              valid={validObj.validEmail}
            />
            <Input
              type="text"
              name="username"
              label="Օգտագործողի անունը"
              placeholder="Մուտքագրեք օգտագործողի անունը"
              value={username}
              onChange={onChange}
              valid={validObj.validUsername}
            />
            <Input
              type="password"
              name="password"
              label="Գաղտնաբառ"
              placeholder="Մուտքագրեք գաղտնաբառը"
              value={password}
              onChange={onChange}
              valid={validObj.validPassword}
            />
            <Input
              type="password"
              name="confirmPassword"
              label="Հաստատել գաղտնաբառև"
              placeholder="Կրկին մուտքագրեք ձեր գաղտնաբառը"
              value={confirmPassword}
              onChange={onChange}
              valid={validObj.validConfirmPassword}
            />
            <input type="submit" className="btn btn-primary" value="Գրանցվել" />
          </div>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    registerSuccess: state.register.success,
    loginSuccess: state.login.success,
    registerError: state.registerError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register: (username, email, password) =>
      dispatch(registerAction(username, email, password)),
    login: (email, password) => dispatch(loginAction(email, password)),
    redirect: () => dispatch(redirectAction()),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterPage),
);

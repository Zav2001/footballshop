import React, { useState, useEffect } from "react";
import Input from "./Input";
import loginValidator from "../../utils/loginValidator";
import toastr from "toastr";
import Auth from "../../utils/auth";
import { loginValidationFunc } from "../../utils/formValidator";
import { loginAction, redirectAction } from "../../actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (Auth.isUserAuthenticated()) {
      props.history.push("/");
    }
  }, []);

  useEffect(() => {
    if (props.loginError.hasError) {
      toastr.error(props.loginError.message);
    } else if (props.loginSuccess) {
      props.redirect();
      toastr.success("Մուտքը հաջողվեց");
      props.history.push("/");
    }
  }, [props.loginSuccess, props.loginError]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!loginValidator(email, password)) return;
    props.login(email, password);
  };

  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const validObj = loginValidationFunc(email, password);

  return (
    <div className="container">
      <div className="row space-top">
        <div className="col-md-12">
          <h1>Մուտք</h1>
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
              type="password"
              name="password"
              label="Գաղտնաբառ"
              placeholder="Մուտքագրեք գաղտնաբառը"
              value={password}
              onChange={onChange}
              valid={validObj.validPassword}
            />
            <input type="submit" className="btn btn-primary" value="Մուտք" />
          </div>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loginSuccess: state.login.success,
    loginError: state.loginError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(loginAction(email, password)),
    redirect: () => dispatch(redirectAction()),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginPage),
);

import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./PaymentForm.css";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const PaymentForm = ({ onPay }) => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    let formattedValue = value;

    if (name === "number") {
      formattedValue = formatCreditCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = formatExpirationDate(value);
    } else if (name === "cvc") {
      formattedValue = formatCVC(value);
    }

    setState((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleInputFocus = (name) => {
    setState((prev) => ({ ...prev, focus: name }));
  };

  const formatCreditCardNumber = (value) => {
    return value.replace(/\D/g, "").slice(0, 16);
  };

  const formatExpirationDate = (value) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 4)
      .replace(/(\d{2})(\d{2})/, "$1/$2");
  };

  const formatCVC = (value) => {
    return value.replace(/\D/g, "").slice(0, 3);
  };

  const handlePayClick = () => {
    // Validate input fields
    if (!isValidCardNumber(state.number)) {
      alert("Invalid card number. Please enter a valid 16-digit card number.");
      return;
    }
    if (!isValidCardName(state.name)) {
      alert("Invalid card holder name. Please enter a valid name.");
      return;
    }
    if (!isValidExpirationDate(state.expiry)) {
      alert("Invalid expiry date. Please enter a valid MM/YY expiry.");
      return;
    }
    if (!isValidCVC(state.cvc)) {
      alert("Invalid CVC. Please enter a valid 3-digit CVC.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsPaymentSuccess(true);
      setTimeout(() => {
        setIsPaymentSuccess(false);
        onPay(state);
      }, 2000);
    }, 3000);
  };

  const isValidCardNumber = (number) => {
    return /^\d{16}$/.test(number);
  };

  const isValidCardName = (name) => {
    return /^[a-zA-Z ]+$/.test(name);
  };

  const isValidExpirationDate = (expiry) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits of the current year
    const currentMonth = currentDate.getMonth() + 1; // January is 0, so we add 1

    const [inputMonth, inputYear] = expiry.split("/");
    const formattedInputMonth = parseInt(inputMonth, 10);
    const formattedInputYear = parseInt(inputYear, 10);

    if (
      formattedInputMonth >= 1 &&
      formattedInputMonth <= 12 &&
      formattedInputYear >= currentYear &&
      (formattedInputYear > currentYear || formattedInputMonth >= currentMonth)
    ) {
      return true;
    }
    return false;
  };

  const isValidCVC = (cvc) => {
    return /^\d{3}$/.test(cvc);
  };

  return (
    <div className="payment-form-container">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form>
        <input
          className="payment-input"
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={() => handleInputFocus("number")}
          maxLength="16"
          minLength="16"
          required
        />

        <input
          className="payment-input"
          type="text"
          name="name"
          placeholder="Card Holder Name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={() => handleInputFocus("name")}
          maxLength={25}
          required
        />

        <input
          className="payment-input"
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={() => handleInputFocus("expiry")}
          maxLength={5}
          required
        />

        <input
          className="payment-input"
          type="number"
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={() => handleInputFocus("cvc")}
          maxLength={3}
          required
        />
      </form>
      {isLoading ? (
        <div>
          <CircularProgress />
        </div>
      ) : isPaymentSuccess ? (
        <div>Վճարումը հաջողությամբ կատարվեց:</div>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handlePayClick}
          sx={{ marginTop: "10px", width: "100px", marginLeft: "66%" }}
        >
          Վճարել
        </Button>
      )}
    </div>
  );
};

export default PaymentForm;

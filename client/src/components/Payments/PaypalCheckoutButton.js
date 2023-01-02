import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import stylePay from "../../style/Payments/Payments.module.css";

// This values are the props in the UI
const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  var [amount, setAmount] = useState("");

  function handleChange(e) {
    setAmount(e.target.value);
  }

  return (
    <>
      <h1 className={stylePay["title"]}>Choose your plan</h1>
      <h2 className={stylePay["amount"]}>Amount {amount} $</h2>
      <select onChange={(e) => handleChange(e)} className={stylePay["select"]}>
        <option value={"1.5"}>PLAN GENIN</option>
        <option value={"3"}>PLAN CHUUNIN</option>
        <option value={"36"}>PLAN JOUNIN</option>
      </select>
      <br />
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};

export default function PaypalCheckoutButton() {
  return (
    <div>
      <div style={{ alignItems: "center" }}>
        <PayPalScriptProvider
          options={{
            "client-id": "test",
            components: "buttons",
            currency: "USD",
          }}
        >
          <ButtonWrapper currency={currency} showSpinner={false} />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

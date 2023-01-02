import { ChangeEvent, useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import {
  OnApproveData,
  OnApproveActions,
} from "@paypal/paypal-js/types/components/buttons";

import stylePay from "../../style/Payments/Payments.module.css";

// This values are the props in the UI
const currency: string = "USD";
const style = { layout: "vertical" };

interface Buttonpaypal {
  currency: string;
  showSpinner: boolean;
}

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }: Buttonpaypal) => {
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
  }, [dispatch, currency, showSpinner]);

  var [amount, setAmount] = useState("");

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
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
        style={{ layout: "vertical" }}
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
        /*return actions.order?.capture().then(function () {
          // Your code here after capture the order
          return data;
        });*/

        onApprove={async function (
          data: OnApproveData,
          actions: OnApproveActions
        ): Promise<void> {
          await actions.order?.capture();
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
// import "./styles.css";
// import {
//   PayPalScriptProvider,
//   PayPalButtons,
//   usePayPalScriptReducer
// } from "@paypal/react-paypal-js";
// import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
// import { PayPalButtonsComponentProps } from "@paypal/paypal-js/types/components/buttons";

// const paypalScriptOptions: PayPalScriptOptions = {
//   "client-id":
//     "AaUpVv8WDVM5uezwsQo79K6YBKmqm3EeLSOx5TFTX4RM2_ephwW68aJ4_ASXYPjbI8OyuXchwgkQ7bRl",
//   currency: "USD"
// };
// function Button() {
//   /**
//    * usePayPalScriptReducer use within PayPalScriptProvider
//    * isPending: not finished loading(default state)
//    * isResolved: successfully loaded
//    * isRejected: failed to load
//    */
//   const [{ isPending }] = usePayPalScriptReducer();
//   const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
//     style: { layout: "vertical" },
//     createOrder(data, actions) {
//       return actions.order.create({
//         purchase_units: [
//           {
//             amount: {
//               value: "0.01"
//             }
//           }
//         ]
//       });
//     },
//     onApprove(data, actions) {
//       /**
//        * data: {
//        *   orderID: string;
//        *   payerID: string;
//        *   paymentID: string | null;
//        *   billingToken: string | null;
//        *   facilitatorAccesstoken: string;
//        * }
//        */
//       return actions.order.capture({}).then((details) => {
//         alert(
//           "Transaction completed by" +
//             (details?.payer.name.given_name ?? "No details")
//         );

//         alert("Data details: " + JSON.stringify(data, null, 2));
//       });
//     }
//   };
//   return (
//     <>
//       {isPending ? <h2>Load Smart Payment Button...</h2> : null}
//       <PayPalButtons {...paypalbuttonTransactionProps} />
//     </>
//   );
// }
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello PayPal</h1>
//       <PayPalScriptProvider options={paypalScriptOptions}>
//         <Button />
//       </PayPalScriptProvider>
//     </div>
//   );
// }

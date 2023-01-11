import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as React from "react";
import style from "../../style/Payments/Payments.module.css";

const debug = true;

const initialState = {
  amount: "1.50",
  orderID: "",
  onApproveMessage: "",
  onErrorMessage: "",
};

export default class App extends React.Component<{}, typeof initialState> {
  constructor(props: any) {
    super(props);
    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.onApprove = this.onApprove.bind(this);
    this.onError = this.onError.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      amount: event.target.value,
      orderID: "",
      onApproveMessage: "",
      onErrorMessage: "",
    });
  }

  createOrder(data: Record<string, unknown>, actions: any) {
    if (debug) console.log("Creating order for amount", this.state.amount);
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: this.state.amount,
            },
          },
        ],
      })
      .then((orderID: any) => {
        this.setState({ orderID: orderID });
        return orderID;
      });
  }

  onApprove(data: any, actions: any) {
    let app = this;
    return actions.order.capture().then(function (details: any) {
      app.setState({
        onApproveMessage: `Transaction completed by ${details.payer.name.given_name}!`,
      });
    });
  }

  onError(err: Record<string, unknown>) {
    this.setState({
      onErrorMessage: err.toString(),
    });
  }

  onClick() {
    if (debug) console.log("When clicked, amount was", this.state.amount);
  }

  render() {
    return (
      <div>
        <h1>Choose your plan</h1>

        <div className={style["content-card"]}>
          <div className={style["plan"]}>
            <button>
              <div>
                <h2>Plan Genin</h2>
                <h3>$1.50</h3>
                <ul>
                  <li>Benefit 1</li>
                  <li>Benefit 2</li>
                  <li>Benefit 3</li>
                  <li>Benefit 4</li>
                </ul>
              </div>
            </button>
          </div>

          <div className={style["plan"]}>
            <button>
              <div>
                <h2>Plan Chuunin</h2>
                <h3>$3.00</h3>
                <ul>
                  <li>Benefit 1</li>
                  <li>Benefit 2</li>
                  <li>Benefit 3</li>
                  <li>Benefit 4</li>
                </ul>
              </div>
            </button>
          </div>

          <div className={style["plan"]}>
            <button>
              <div>
                <h2>Plan Jounin </h2>
                <h3>$36.00</h3>
                <ul>
                  <li>Benefit 1</li>
                  <li>Benefit 2</li>
                  <li>Benefit 3</li>
                  <li>Benefit 4</li>
                </ul>
              </div>
            </button>
          </div>
        </div>

        <label htmlFor="amount">Order Amount: </label>
        <br />
        <select onChange={this.onChange} name="amount" id="amount">
          <option value="1.50">PLAN GENIN $1.50</option>
          <option value="3.00">PLAN CHUUNIN $3.00</option>
          <option value="36.00">PLAN JOUNIN $36.00</option>
        </select>
        <br />

        <label>Order ID:</label>
        <br />
        <span>{this.state.orderID ? this.state.orderID : "unknown"}</span>
        <br />
        <label>On Approve Message: </label>
        <br />
        <span className={style["approve"]} data-testid="message">
          {this.state.onApproveMessage}
        </span>
        <br />
        <label>On Error Message: </label>
        <br />
        <span className={style["error"]} data-testid="error">
          {this.state.onErrorMessage}
        </span>
        <br />
        <PayPalScriptProvider
          options={{
            "client-id":
              "AUqGcl4VaguN5OrNNkWIeKtQmRTouEl_sV-HlxUZ0eZyDf5J3N8X2XW7r4v5PLySdX9U6Q-3SLZRvRXu",
          }}
        >
          <PayPalButtons
            createOrder={this.createOrder}
            onApprove={this.onApprove}
            onError={this.onError}
            onClick={this.onClick}
          />
        </PayPalScriptProvider>
      </div>
    );
  }
}

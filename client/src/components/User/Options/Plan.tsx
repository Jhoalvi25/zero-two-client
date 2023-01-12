// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// import {
//   executePaymentGenin,
//   executePaymentChuunin,
//   executePaymentJounin,
// } from "../../../redux/actions";
import {  useAppSelector } from "../../../redux/hooks";

export default function Plan() {
  // let { search } = useLocation();
  // let searchParams = new URLSearchParams(search);

  // const history = useHistory();

  let userDB = useAppSelector((state) => state["user"]);



  // const tokenPlan = searchParams.get("token")!;

  // const dispatch = useAppDispatch();

  // const verifiedPaymentGenin = async (tokenPlan: string) => {
  //   await dispatch(
  //     executePaymentGenin("43852eac-e259-4dbb-aff1-5020b4bd9ab5", tokenPlan)
  //   );
  //   history.push("/home");
  // };

  // const verifiedPaymentChuunin = async (tokenPlan: string) => {
  //   await dispatch(
  //     executePaymentChuunin("43852eac-e259-4dbb-aff1-5020b4bd9ab5", tokenPlan)
  //   );
  //   history.push("/home");
  // };

  // const verifiedPaymentJounin = async (tokenPlan: string) => {
  //   await dispatch(
  //     executePaymentJounin("43852eac-e259-4dbb-aff1-5020b4bd9ab5", tokenPlan)
  //   );
  //   history.push("/home");
  // };

  // useEffect(() => {
  //   verifiedPaymentGenin(tokenPlan);
  //   verifiedPaymentChuunin(tokenPlan);
  //   verifiedPaymentJounin(tokenPlan)
  // }, [tokenPlan]);

  return <div>
    <h1>{userDB.plan}</h1>
    <h2>{userDB.token}</h2>
  </div>;
}

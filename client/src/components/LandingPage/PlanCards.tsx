import style from "../../style/LandingPage/PlanCards.module.css";
// import { useAppDispatch } from "../../redux/hooks";
// import {
//   createPaymentGenin,
//   createPaymentChuunin,
//   createPaymentJounin,
// } from "../../redux/actions/index";
// import { useRef } from "react";
// import { useHistory } from "react-router-dom";

export default function PlanCards(): JSX.Element {
  // const scrollCard = useRef();
  // let userDB = useAppSelector((state) => state["user"]);
  // let dispatch = useAppDispatch();
  // let history = useHistory();

  // useEffect(() => {}, [dispatch, user]);

  // const handleSubmitGenin = async () => {
  //   try {
  //     await dispatch(createPaymentGenin()).then((val: any) => {
  //       window.location.href = val.data.data;
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmitChuunin = async () => {
  //   try {
  //     await dispatch(createPaymentChuunin()).then((val: any) => {
     
  //       window.location.href = val.data.data;
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmitJounin = async () => {
  //   try {
  //     await dispatch(createPaymentJounin()).then((val: any) => {
        
  //       window.location.href = val.data.data;
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div id="planCards" className={style["title"]}>
      <h1>Our premium offerts:</h1>
      <div className={style["back"]}>
        <div className={style["cardPlan"]}>
          <h2>GENIN-PLAN</h2>

          {/* <button className={style["btn"]} onClick={handleSubmitGenin}>
            VIP
          </button> */}

          <h3>1.50 USD</h3>
          <ul>
            <li>No ads</li>
            <li>Unlimited access to the ZeroTwo library</li>
            <li>New episodes one hour after Japan</li>
            <li>Stream on 1 device at a time</li>
          </ul>
        </div>
        <div className={style["cardPlan"]}>
          <h2>CHUUNIN-PLAN(1-Month)</h2>
{/* 
          <button className={style["btn"]} onClick={handleSubmitChuunin}>
            VIP
          </button> */}

          <h3>3.00 USD</h3>
          <ul>
            <li>No ads</li>
            <li>Unlimited access to the ZeroTwo library</li>
            <li>New episodes one hour after Japan</li>
            <li>Stream on 1 device at a time</li>
            <li>Offline Viewing</li>
          </ul>
        </div>
        <div className={style["cardPlan"]}>
          <h2>JOUNIN-PLAN(1-Year)</h2>

          {/* <button className={style["btn"]} onClick={handleSubmitJounin}>
            VIP
          </button> */}

          <h3>36.00 USD</h3>
          <ul>
            <li>No ads</li>
            <li>Unlimited access to the ZeroTwo library</li>
            <li>New episodes one hour after Japan</li>
            <li>Stream on 1 device at a time</li>
            <li>Offline Viewing</li>
            <li>16% discount on Monthly Plan (billed every 12-months)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

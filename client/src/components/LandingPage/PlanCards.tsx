import PremiumPlan from "../../PremiumPlan/PremiumPlan";
import style from "../../style/LandingPage/PlanCards.module.css";
import { Link } from "react-router-dom";

export default function PlanCards(): JSX.Element {
  return (
    <div id="planCards" className={style["title"]}>
      <h1>Our premium offerts:</h1>
      <div className={style["back"]}>
        {PremiumPlan &&
          PremiumPlan.map((elem, index) => {
            return (
              <div key={index} className={style["cardPlan"]}>
                <h2>{elem.name}</h2>

                <Link to={"/payment"}>
                  <button className={style["btn"]}>VIP</button>
                </Link>

                <h3>{elem.price}</h3>
                <ul>
                  {elem.benefit.map((elem, index) => {
                    return <li key={index}>{elem}</li>;
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}

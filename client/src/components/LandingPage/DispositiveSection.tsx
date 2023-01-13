import style from "../../style/LandingPage/DispositiveSection.module.css";

export default function DispositiveSection(): JSX.Element {
  return (
    <div className={style["background"]} id='dispositive-section'>
      <h2>Watch anytime, anywhere</h2>
      <p>By choosing your premium plan, you can watch anime from any device, <br /> cell phone, tablet and television.</p>
      <a href="#planCards">
        <button className={style["plan"]}>VIEW PREMIUM PLANS</button>
      </a>
    </div>
  );
}

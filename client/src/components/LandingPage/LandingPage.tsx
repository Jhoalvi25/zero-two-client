import Header from "./Header";
import BenefitSection from "./BenefitSection";
import DispositiveSection from "./DispositiveSection";
import PlanCards from "./PlanCards";

export default function LandingPage(): JSX.Element {
  return (
    <div>
      <Header></Header>
      <BenefitSection></BenefitSection>
      <DispositiveSection></DispositiveSection>
      <PlanCards></PlanCards>
    </div>
  );
}

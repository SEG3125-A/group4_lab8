import AlexNutri from "../Components/Nutritionists/AlexNutri";
import MarieNutri from "../Components/Nutritionists/MarieNutri";
import RubaNutri from "../Components/Nutritionists/RubaNutri";

export default function ShooseNutri() {
  return (
    <dasht className="dasht">
      <AlexNutri />
      <RubaNutri />
      <MarieNutri />
    </dasht>
  );
}

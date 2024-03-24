import Navbar from "../Components/Navbar";
import MyFitStatus from "../Components/MyFitStatus";
import MyMHStatus from "../Components/MyMHStatus";
import MyNutritionStatus from "../Components/MyNutritionStatus";

export default function Dashboard() {
  return (
    <dasht className="dasht">
      <MyNutritionStatus />
      <MyMHStatus />
      <MyFitStatus />
    </dasht>
  );
}

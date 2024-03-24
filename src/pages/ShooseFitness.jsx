import BobFitness from "../Components/FitnessCoaches/Bob";
import LiliFitness from "../Components/FitnessCoaches/Lili";
import SophieFitness from "../Components/FitnessCoaches/Sophie";

export default function Dashboard() {
  return (
    <dasht className="dasht">
      <SophieFitness />
      <BobFitness />
      <LiliFitness />
    </dasht>
  );
}

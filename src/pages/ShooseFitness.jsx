import BobFitness from "../Components/FitnessCoaches/Bob";
import LiliFitness from "../Components/FitnessCoaches/Lili";
import SophieFitness from "../Components/FitnessCoaches/Sophie";

export default function ShooseFitness() {
  return (
    <dasht className="dasht">
      <SophieFitness />
      <BobFitness />
      <LiliFitness />
    </dasht>
  );
}

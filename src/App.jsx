import ShooseFitness from "./pages/ShooseFitness";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/DashBoard";
import ShooseNutri from "./pages/ShooseNutri";
import ShooseMH from "./pages/ShooseMH";
import Title from "./pages/ShooseFitnessCoach";
import ShooseFitnessCoach from "./pages/ShooseFitnessCoach";
import ShooseMHSpecialists from "./pages/ShooseMHSpecialists";
import ShooseNutritionists from "./pages/ShooseNutitionists";
import { IoHelpCircle } from "react-icons/io5";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <body>
        <Dashboard />
        {/**
        
         <ShooseFitnessCoach />
         <ShooseNutritionists />
        <ShooseMHSpecialists />
        
         */}

        <h1>
          <IoHelpCircle />
        </h1>
      </body>
    </div>
  );
}

export default App;

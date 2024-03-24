import { TbActivityHeartbeat } from "react-icons/tb";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/DashBoard";
import MyFitStatus from "./Components/MyFitStatus";
import MyNutritionStatus from "./Components/MyNutritionStatus";
import MyMHStatus from "./Components/MyMHStatus";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <body>
        <Dashboard />
      </body>
    </div>
  );
}

export default App;

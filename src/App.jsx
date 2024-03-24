import ShooseFitness from "./pages/ShooseFitness";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/DashBoard";
import ShooseNutri from "./pages/ShooseNutri";
import ShooseMH from "./pages/ShooseMH";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <body>
        <Dashboard />
        <ShooseFitness />
        <ShooseNutri />
        <ShooseMH />
      </body>
    </div>
  );
}

export default App;

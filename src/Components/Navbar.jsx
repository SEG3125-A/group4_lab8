import { TbActivityHeartbeat } from "react-icons/tb";

export default function Navbar() {
  return (
    <nav className="nav">
      <b href="/" className="site-title">
        Health Up <TbActivityHeartbeat color="#44a9c0" />
      </b>
      <ul>
        <li>
          <a href="/Dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/FitnessCoaches">Fitness Coaches</a>
        </li>
        <li>
          <a href="/MentalHealthSpecialists">Mental Health Specialists</a>
        </li>
        <li>
          <a href="/Nutritionists">Nutritionists</a>
        </li>
      </ul>
    </nav>
  );
}
//test

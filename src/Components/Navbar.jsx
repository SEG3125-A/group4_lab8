import { TbActivityHeartbeat } from "react-icons/tb";

export default function Navbar() {
  return (
    <nav className="nav">
      <b href="/" className="site-title">
        Health Up <TbActivityHeartbeat color="#44a9c0" />
      </b>
      <ul>
        <li className="active">
          <a href="/Dashboard">Dashboard</a>
        </li>
        <li className="/">
          <a href="/FitnessCoaches">Fitness Coaches</a>
        </li>
        <li className="/">
          <a href="/MentalHealthSpecialists">Mental Health Specialists</a>
        </li>
        <li className="/">
          <a href="/Nutritionists">Nutritionists</a>
        </li>
      </ul>
    </nav>
  );
}
//test

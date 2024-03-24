export default function MyNutritionStatus() {
  return (
    <dash className="dash">
      <b href="/" className="site-title">
        My Nutrion Status :
      </b>
      <ul>
        <li>
          <a href="/NextWorkout">Calories allowed today : </a>
          <c href="/">1800 calories</c>
        </li>
        <li>
          <a href="/NextMeeting">My Next meeting :</a>
          <c href="/">today at 7pm</c>
        </li>
        <li>
          <a href="/MyProgram">My Program</a>
          <c href="/">Weight loss by Ruba</c>
        </li>
      </ul>
    </dash>
  );
}

export default function MyFitStatus() {
  return (
    <dash className="dash">
      <b href="/" className="site-title">
        My Fitness Status :
      </b>
      <ul>
        <li>
          <a href="/NextWorkout">My Next Workout : </a>
          <c href="/">tommorow</c>
        </li>
        <li>
          <a href="/NextMeeting">My Next Coach meeting :</a>
          <c href="/">Monday 11 May</c>
        </li>
        <li>
          <a href="/MyProgram">My Program</a>
          <c href="/">Loose weight by coach Helene</c>
        </li>
      </ul>
    </dash>
  );
}

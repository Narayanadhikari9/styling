import styles from "./mainContent.module.css";
function MainContent() {
  return (
    <maincontent>
      <br></br>
      About Restaurant
      <nav>
        <ul>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="/reservation">Reservation</a>
          </li>
          <li>
            <a href="time/location">Time/Location </a>
          </li>
        </ul>
      </nav>
    </maincontent>
  );
}
export default MainContent;

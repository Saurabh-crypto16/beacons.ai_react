import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="top__header">
        <div className="topheader__left">
          <img src="https://beacons.ai/bw_logo_full.png" alt="" />
          <div className="topheaderleft__button">
            <p>Send feedback</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqv7gS77xcBeLAWPHGhWDi6GDjrVZ9kyvSw&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <div className="topheader__right">
          <div className="topheaderright__button">
            <p>More tools</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-v5BMpwtivawnQyGYtxO1LWzQAkNa5fPeQHV4dIX4HlVDk9OGEVik2b_W6rktCDo_ns&usqp=CAU"
              alt=""
            />
            <img
              className="arrow_down"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvRqb1EeaGqKYR-5Swdo8nHyVXmisI8w1POeKLtLp84kAcyyFWvhGzcmjEAmNrbxp9dk&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="subheading">
        <Link to="/" style={{ color: "black", textDecoration: "inherit" }}>
          <div className="subheading__link">
            <p>Home</p>
          </div>
        </Link>
        <Link
          to="/Appearance"
          style={{ color: "black", textDecoration: "inherit" }}
        >
          <div className="subheading__link">
            <p>Appearance</p>
          </div>
        </Link>
        <Link
          to="/Analytics"
          style={{ color: "black", textDecoration: "inherit" }}
        >
          <div className="subheading__link">
            <p>Analytics</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

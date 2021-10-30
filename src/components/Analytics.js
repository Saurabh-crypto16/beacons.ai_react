import "./Analytics.css";
import Chart from "./Chart";

function Analytics() {
  return (
    <div className="analytics">
      <div className="analytics__top">
        <h3>Analytics</h3>
        <p>Date range:</p>
        <div className="analytics__dateselect">
          <p>Last 7 days</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6L2hRwFuAXqiQyiTJKFb1DLEe_5gQ5gRfIg&usqp=CAU"
            alt=""
          />
        </div>
        <div className="analytics__btns">
          <div
            className="btn_container"
            style={{ backgroundColor: "lightgreen" }}
          >
            <p>1</p>
            <p>Views</p>
          </div>
          <div
            className="btn_container"
            style={{ backgroundColor: "lightblue" }}
          >
            <p>0</p>
            <p>Clicks</p>
          </div>
          <div className="btn_container" style={{ backgroundColor: "red" }}>
            <p>0.0%</p>
            <p>CTR</p>
          </div>
        </div>
      </div>

      <div className="analytics__chart">
        <h3>Page Views</h3>
        <div className="chart_component">
          <Chart />
        </div>
      </div>

      <div className="analytics__clicks">
        <h3>Link clicks</h3>
        <div className="link___text">
          <p>
            Analytics may take up to 72 hours to collect enough data to begin
            displaying.
          </p>
        </div>
      </div>

      <div className="analytics__social">
        <h3>Social icon clicks</h3>
        <p>
          You do not have any social icons with clicks yet. Go to the{" "}
          <span className="text__header">Header</span>
          block to make your first social icon!
        </p>
      </div>

      <div className="analytics__bottom">
        <p>Privacy Policy | Terms of Service | Contact</p>
        <p>Beacons® is a registered trademark of Beacons AI, Inc.</p>
      </div>
    </div>
  );
}

export default Analytics;

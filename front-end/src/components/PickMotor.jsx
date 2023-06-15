import React from "react";
import { MOTOR_DATA } from "./ModelsData.js";

const PickMotor = () => {
  return (
    <section className="pick-motor">
      <div className="pick-motor-title">
        <h4>Vehicle Models</h4>
        <h1>Our rental fleet</h1>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>

      <div className="pick-motor-body">
        <img src="images/bike3.png"/>
        <div className="pick-motor-details">
          <h1>$45 <span>/ rent per day</span></h1>
          <div className="pick-motor-row">
            <span>Engine</span>
            <span>199.6 cc</span>
          </div>
          <div className="pick-motor-row">
            <span>Engine</span>
            <span>199.6 cc</span>
          </div>
          <div className="pick-motor-row">
            <span>Power</span>
            <span>19.17 PS</span>
          </div>
          <div className="pick-motor-row">
            <span>Torque</span>
            <span>17.35 Nm</span>
          </div>
          <div className="pick-motor-row">
            <span>Mileage</span>
            <span>40 kmpl</span>
          </div>
          <div className="pick-motor-row">
            <span>Brakes</span>
            <span>Double Disc</span>
          </div>
          <div className="pick-motor-row">
            <span>Tyre</span>
            <span>Tube</span>
          </div>
          <button>RESERVE NOW</button>
        </div>
      </div>
    </section>
  );
};

export default PickMotor;

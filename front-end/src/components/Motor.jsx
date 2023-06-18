import React from "react";
import MOTOR_DATA from "./ModelsData";

const Motor = ({ motorID }) => {
  // const [motorLoad, setMotorLoad] = useState(true);

  return (
    <>
      <div className="motor">
        <img src={MOTOR_DATA[motorID].img} alt="motor" />
        <div className="motor-details">
          <h1>
            ${MOTOR_DATA[motorID].price} <span>/ rent per day</span>
          </h1>
          <div className="motor-row">
            <span>Engine</span>
            <span>{MOTOR_DATA[motorID].engine}</span>
          </div>
          <div className="motor-row">
            <span>Power</span>
            <span>{MOTOR_DATA[motorID].power}</span>
          </div>
          <div className="motor-row">
            <span>Torque</span>
            <span>{MOTOR_DATA[motorID].torque}</span>
          </div>
          <div className="motor-row">
            <span>Mileage</span>
            <span>{MOTOR_DATA[motorID].mileage}</span>
          </div>
          <div className="motor-row">
            <span>Brakes</span>
            <span>{MOTOR_DATA[motorID].brakes}</span>
          </div>
          <div className="motor-row">
            <span>Tyre</span>
            <span>{MOTOR_DATA[motorID].tyre}</span>
          </div>
          <button>RESERVE NOW</button>
        </div>
      </div>
    </>
  );
};

export default Motor;

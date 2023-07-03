import { HashLink } from "react-router-hash-link";

import HeroPages from "../components/HeroPages";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import Motor1 from "../motor-images/motor-1.png";
import Motor2 from "../motor-images/motor-2.png";
import Motor3 from "../motor-images/motor-3.png";
import Motor4 from "../motor-images/motor-4.png";
import Motor5 from "../motor-images/motor-5.png";
import Motor6 from "../motor-images/motor-6.png";

const ModelsPage = () => {
  const ModelsData = [
    {
      name: "TVS Raider",
      price: "180",
      img: Motor1,
      engine: "124.8 cc",
      power: "11.38 PS",
      torque: "11.2 Nm",
      mileage: "67 kmph",
      brakes: "Disc",
      tyre: "Tubeless",
    },
    {
      name: "Royal Enfield",
      price: "260",
      img: Motor2,
      engine: "411 cc",
      power: "24.31 PS",
      torque: "32 Nm",
      mileage: "38.23 kmpl",
      brakes: "Double Disc",
      tyre: "Tube",
    },
    {
      name: "Hero XPulse",
      price: "210",
      img: Motor3,
      engine: "199.6 cc",
      power: "19.17 PS",
      torque: "17.35 Nm",
      mileage: "40 kmpl",
      brakes: "Double Disc",
      tyre: "Tube",
    },
    {
      name: "BMW G",
      price: "300",
      img: Motor4,
      engine: "313 cc",
      power: "34 PS",
      torque: "28 Nm",
      mileage: "29.26 kmpl",
      brakes: "Double Disc",
      tyre: "Tubeless",
    },
    {
      name: "Royal Enfield",
      price: "340",
      img: Motor5,
      engine: "411 cc",
      power: "24.31 PS",
      torque: "32 Nm",
      mileage: "32.04 kmpl",
      brakes: "Double Disc",
      tyre: "Tube",
    },
    {
      name: "BMW R",
      price: "500",
      img: Motor6,
      engine: "1254 cc",
      power: "136 PS",
      torque: "143 Nm",
      mileage: "15 kmpl",
      brakes: "Double Disc",
      tyre: "Tubeless",
    },
  ];

  return (
    <section>
      <HeroPages name="Motorbike Models" />

      <div className="models">
        {ModelsData.map((model, id) => (
          <div key={id} className="model-box">
            <img src={model.img} alt="motor-model" />
            <div className="model-desc">
              <div className="model-desc-title">
                <h1>{model.name}</h1>
                <h1>
                  ${model.price}
                  <span>/day</span>
                </h1>
              </div>

              <div className="model-desc-details">
                <div className="model-detail">
                  <p>
                    <i class="fa-solid fa-motorcycle"></i>&nbsp; Engine
                  </p>
                  <p>{model.engine}</p>
                </div>
                <div className="model-detail">
                  <p>
                    <i class="fa-solid fa-motorcycle"></i>&nbsp; Power
                  </p>
                  <p>{model.power}</p>
                </div>
                <div className="model-detail">
                  <p>
                    <i class="fa-solid fa-motorcycle"></i>&nbsp; Torque
                  </p>
                  <p>{model.torque}</p>
                </div>
                <div className="model-detail">
                  <p>
                    <i class="fa-solid fa-motorcycle"></i>&nbsp; Mileage
                  </p>
                  <p>{model.mileage}</p>
                </div>
              </div>
              <HashLink to="/#booking" smooth>
                <a>Book Ride</a>
              </HashLink>
            </div>
          </div>
        ))}
      </div>

      <Banner />
      <Footer />
    </section>
  );
};

export default ModelsPage;

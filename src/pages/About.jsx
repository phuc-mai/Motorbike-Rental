import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Process from "../components/Process";
import Banner from "../components/Banner";

const About = () => {
  return (
    <section className="about">
      <HeroPages name="About" />
      <section className="about-main">
        <img src="images/about.jpg" alt="about" />
        <div className="about-main-text">
          <h3>About Company</h3>
          <h1>You start the engine and your adventure begins</h1>
          <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
          <div className="about-main__stats">
            <div className="about-main__stats__box">
              <img src="images/about-1.png"/>
              <span>
                <h4>13</h4>
                <p>Motor Types</p>
              </span>
            </div>
            <div className="about-main__stats__box">
              <img src="images/about-2.png"/>
              <span>
                <h4>28</h4>
                <p>Rental Outlets</p>
              </span>
            </div>
            <div className="about-main__stats__box">
              <img src="images/about-3.png"/>
              <span>
                <h4>39</h4>
                <p>Repair Shop</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Process />
      <Banner />
      <Footer />
    </section>
  );
};

export default About;

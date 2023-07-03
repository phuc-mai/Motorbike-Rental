import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero">
      <img
        className="hero__background"
        src="images/hero-background.png"
        alt="hero-backround"
      />
      <div className="hero__content">
        <div className="hero__content__text">
          <h4>Plan your trip now</h4>
          <h1>
            Save <span>big</span> with our motorbike rental
          </h1>
          <p>
            Rent the motorbike of your dreams. Unbeatable prices, unlimited
            miles, flexible pick-up options and much more.
          </p>
          <div className="hero__content__btns">
            <LinkScroll className="hero__content__btns__book-ride" offset={-130} duration={500} smooth={true} to="booking">
              Book Ride &nbsp; &#x2713;
            </LinkScroll>
            <Link className="hero__content__btns__learn-more" to="/models">
              Learn More &nbsp; &#9658;
            </Link>
          </div>
        </div>

        <div className="hero__content__img">
          <img src="images/bike1.png" alt="bike1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

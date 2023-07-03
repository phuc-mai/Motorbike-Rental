import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__overal">
        <h3>Reviewed by People</h3>
        <h1>Client's Testimonials</h1>
        <p>
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="testimonials__details">
        <div className="testimonials__details__box">
          <p>&quot; We rented a motorbike from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. &quot;</p>
          <div className="testimonials__details__box__profile">
            <img src='images/Sunehildeep.png' alt='profile'/>
            <div className="testimonials__details__box__profile__text">
              <h3>Sunehildeep</h3>
              <p>Software Engineer</p>
            </div>
            {/* <img src='images/quote-icon.png' alt='quote-icon'/> */}
          </div>
        </div>
        <div className="testimonials__details__box">
          <p>&quot; The motorbike was in great condition and made our trip even better. Highly recommend for this motorbike rental website! &quot;</p>
          <div className="testimonials__details__box__profile">
            <img src='images/PhucMai.png' alt='profile'/>
            <div className="testimonials__details__box__profile__text">
              <h3>Phuc Mai</h3>
              <p>Software Developer</p>
            </div>
            {/* <img src='images/quote-icon.png' alt='quote-icon'/> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

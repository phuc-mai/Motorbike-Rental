import React from "react";

const ChooseUs = () => {
  return (
    <section className="choose-us">
      <img  src='images/bike3.png'/>
      <div className="choose-us__details">
        <div className="choose-us__details__left">
          <h3>Why Choose Us</h3>
          <h1>Best valued deals you will ever find</h1>
          <p>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <a href="/models">Find Details &nbsp; &#9658;</a>
        </div>
        <div className="choose-us__details__right">
          <div className="choose-us__details__right__box">
            <img src='images/why-1.png' alt='why-choose-us'/>
            <div className="choose-us__details__right__box__text">
              <h3>Cross Country Drive</h3>
              <p>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="choose-us__details__right__box">
            <img src='images/why-3.png' alt='why-choose-us'/>
            <div className="choose-us__details__right__box__text">
              <h3>No Hidden Charges</h3>
              <p>
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
          <div className="choose-us__details__right__box">
            <img src='images/why-3.png' alt='why-choose-us'/>
            <div className="choose-us__details__right__box__text">
              <h3>All Inclusive Pricing</h3>
              <p>
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;

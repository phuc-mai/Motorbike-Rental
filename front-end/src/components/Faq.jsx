import React, { useState } from "react";

const Faq = () => {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <section className="faq">
      <div className="faq__title">
        <h1>Frequently Asked Questions</h1>
        <p>
          Frequently Asked Questions About the Motorbike Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>
      <div className="faq__details">
        <div className="faq__details__box">
          <div
            id="q1"
            onClick={() => openQ("q1")}
            className={`faq__details__box__question ${getClassQuestion("q1")}`}
          >
            <p>1. What is special about comparing rental motorbike deals?</p>
            <span>&#9660;</span>
          </div>
          <div
            id="q1"
            onClick={() => openQ("q1")}
            className={`faq__details__box__answer ${getClassAnswer("q1")}`}
          >
            Comparing rental motorbike deals is important as it helps find the best
            deal that fits your budget and requirements, ensuring you get the
            most value for your money. By comparing various options, you can
            find deals that offer lower prices, additional services, or better
            car models. You can find motorbike rental deals by researching online and
            comparing prices from different rental companies.
          </div>
        </div>
        <div className="faq__details__box">
          <div
            id="q2"
            onClick={() => openQ("q2")}
            className={`faq__details__box__question ${getClassQuestion("q2")}`}
          >
            <p>2. How do I find the motorbike rental deals?</p>
            <span>&#9660;</span>
          </div>
          <div
            id="q2"
            onClick={() => openQ("q2")}
            className={`faq__details__box__answer ${getClassAnswer("q2")}`}
          >
            You can find motorbike rental deals by researching online and comparing
            prices from different rental companies. Websites such as Expedia,
            Kayak, and Travelocity allow you to compare prices and view
            available rental options. It is also recommended to sign up for
            email newsletters and follow rental motorbike companies on social media to
            be informed of any special deals or promotions.
          </div>
        </div>
        <div className="faq__details__box">
          <div
            id="q3"
            onClick={() => openQ("q3")}
            className={`faq__details__box__question ${getClassQuestion("q3")}`}
          >
            <p>3. How do I find such low rental motorbike prices?</p>
            <span>&#9660;</span>
          </div>
          <div
            id="q3"
            onClick={() => openQ("q3")}
            className={`faq__details__box__answer ${getClassAnswer("q3")}`}
          >
            Book in advance: Booking your rental motorbike ahead of time can often
            result in lower prices. Compare prices from multiple companies: Use
            websites like Kayak, Expedia, or Travelocity to compare prices from
            multiple rental motorbike companies. Look for discount codes and coupons:
            Search for discount codes and coupons that you can use to lower the
            rental price. Renting from an off-airport location can sometimes
            result in lower prices.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

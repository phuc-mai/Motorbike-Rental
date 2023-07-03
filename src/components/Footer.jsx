import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-1">
        <img src="images/logo.png" />
        <p>
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <ul>
          <li>
            <a href="tel:123456789">
              <i class="fa-solid fa-phone"></i>&nbsp; &nbsp;(123) -456-789
            </a>
          </li>
          <li>
            <a href="mailto:info@motorbikerental.com">
              <i class="fa-solid fa-envelope"></i>&nbsp;
              &nbsp;info@motorbikerental.com
            </a>
          </li>
          <li>
            <i class="fa-regular fa-copyright">&nbsp; &nbsp;</i>Motorbike Rental
            2023
          </li>
        </ul>
      </div>

      <div className="footer-2">
        <h2>COMPANY</h2>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Vehicle Models</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-3">
        <h2>BUSINESS HOURS</h2>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
        <p>
          <i class="fa-sharp fa-solid fa-location-dot"></i>&nbsp; 13 Washinton Street,
          Toronto, ON M1W 2B5 Canada
        </p>
      </div>

      <div className="footer-4">
        <h2>SUBSCRIPTION</h2>
        <p>Subscribe your Email address for latest news & updates.</p>
        <input type="email " placeholder="Enter Your Email" />
        <button>Submit</button>
      </div>
    </section>
  );
};

export default Footer;

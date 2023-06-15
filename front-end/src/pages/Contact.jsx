import HeroPages from "../components/HeroPages";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <HeroPages name="Contact" />
      <section className="contact">
        <div className="contact-overall">
          <h1>Need additional information?</h1>
          <p>
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <ul>
            <li>
              <a href="tel:123456789">
                <i class="fa-solid fa-phone"></i>&nbsp; (123) -456-789
              </a>
            </li>
            <li>
              <a href="mailto:info@motorbikerental.com">
                <i class="fa-solid fa-envelope"></i>&nbsp;
                info@motorbikerental.com
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-sharp fa-solid fa-location-dot"></i>&nbsp; 13
                Washinton Street, Toronto, ON M1W 2B5 Canada
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <form>
            <label>
              Full Name <b>*</b>
            </label>
            <input type="text" placeholder='E.g: "Joe Shmoe"' />

            <label>
              Email <b>*</b>
            </label>
            <input type="email" placeholder='E.g: "youremail@example.com"'/>

            <label>
              Tell us about it <b>*</b>
            </label>
            <textarea placeholder="Write Here.."></textarea>

            <button type="submit">
              <i class="fa-solid fa-envelope-open-text"></i>&nbsp; Send Message
            </button>
          </form>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
};

export default Contact;

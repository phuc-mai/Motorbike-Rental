import React, { useState } from "react";
import MOTOR_DATA from "./ModelsData";
import Dialog from "@material-ui/core/Dialog";


const Booking = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Take value of Booking inputs
  const [motorName, setMotorName] = useState("TVS Raider");
  const [pickPlace, setPickPlace] = useState("Downtown Toronto");
  const [dropPlace, setDropPlace] = useState("Old Montreal Town");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const handleMotorName = (e) => {
    setMotorName(e.target.value);
  };
  const handlePickPlace = (e) => {
    setPickPlace(e.target.value);
  };
  const handleDropPlace = (e) => {
    setDropPlace(e.target.value);
  };
  const handlePickDate = (e) => {
    setPickDate(e.target.value);
  };
  const handleDropDate = (e) => {
    setDropDate(e.target.value);
  };

  // Open Reservation when all inputs are fulfilled
  const openReservation = (e) => {
    const errorMsg = document.querySelector(".error-message");
    if (
      motorName === "" ||
      pickPlace === "" ||
      dropPlace === "" ||
      pickDate === "" ||
      dropDate === "" 
    ) {
      errorMsg.style.display = "flex";
    } else {
      setIsFormOpen(true);
      errorMsg.style.display = "none";
    }
  };

  // Show Motorbike Image on Reservation
  const findMotorImg = (name) => {
    const pickedMotor = MOTOR_DATA.filter((motor) => {
      return motor.name === name;
    });
    return pickedMotor[0]?.img;
  };

  // Take value of Reservation inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAdress = (e) => {
    setAddress(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleZipCode = (e) => {
    setZipCode(e.target.value);
  };

  // Hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  // Confirm Reservation
  const confirmBooking = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  return (
    <section className="booking" id="booking">
      <h1>Book Motorbike</h1>

      <p className="error-message">
        All fields required!
      </p>

      <p className="booking-done">
        Check your email to confirm an order.{" "}
        <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          openReservation()
        }}
      >
        <div className="motor-type">
          <label for="motor-name">
            <i class="fa-solid fa-motorcycle"></i>&nbsp; Your Motorbike <b>*</b>
          </label>
          <select value={motorName} onChange={handleMotorName} id="motor-name">
            <option value="TVS Raider">TVS Raider</option>
            <option value="Royal Enfield Scram 411">
              Royal Enfield
            </option>
            <option value="Hero XPulse 200T 4V">Hero XPulse</option>
            <option value="BMW G 310 GS">BMW G</option>
            <option value="Royal Enfield Himalayan">
              Royal Enfield
            </option>
            <option value="BMW R 1250 GS">BMW R</option>
          </select>
        </div>

        <div className="pickup-place">
          <label for="pick-place">
            <i class="fa-solid fa-location-dot"></i>&nbsp; Pick-up Location <b>*</b>
          </label>
          <select value={pickPlace} onChange={handlePickPlace} id="pick-place">
            <option value="Downtown Toronto">Toronto</option>
            <option value="Niagara Falls">Niagara</option>
            <option value="Ottawa's Parliament Hill">
              Ottawa
            </option>
            <option value="Banff National Park">Alberta</option>
            <option value="Capilano Suspension Bridge">
              Vancouver
            </option>
            <option value="Old Montreal Town">Montreal</option>
          </select>
        </div>

        <div className="dropoff-place">
          <label for="drop-place">
            <i class="fa-solid fa-location-dot"></i>&nbsp; Drop-off Location <b>*</b>
          </label>
          <select value={dropPlace} onChange={handleDropPlace} id="drop-place">
            <option value="Old Montreal Town">Montreal</option>
            <option value="Ottawa's Parliament Hill">
              Ottawa
            </option>
            <option value="Niagara Falls">Niagara</option>
            <option value="Banff National Park">Alberta</option>
            <option value="Downtown Toronto">Toronto</option>

            <option value="Capilano Suspension Bridge">
              Vancouver
            </option>
          </select>
        </div>

        <div className="pickup-date">
          <label for="pick-date">
            <i class="fa-regular fa-calendar-days"></i>&nbsp; Pick-up Date <b>*</b>
          </label>
          <input
            type="date"
            id="pick-date"
            value={pickDate}
            onChange={handlePickDate}
          ></input>
        </div>

        <div className="dropoff-date">
          <label for="drop-date">
            <i class="fa-regular fa-calendar-days"></i>&nbsp; Drop-off Date <b>*</b>
          </label>
          <input
            type="date"
            id="drop-date"
            value={dropDate}
            onChange={handleDropDate}
          ></input>
        </div>

        <button type="submit">Search</button>
      </form>

      <Dialog
        maxWidth={{ xs: "300px", md: '600px' }}
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      >
        <section className="reservation">
          <h1>COMPLETE RESERVATION</h1>
          <div className="reservation__note">
            <h3>
              <i class="fa-solid fa-circle-info"></i> &nbsp; Upon completing
              this reservation enquiry, you will receive:
            </h3>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>

          <div className="reservation__info">
            <div className="reservation__info__placentime">
              <h3>Location & Date</h3>
              <div className="reservation__info__placentime__details">
                <i class="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-up Date & Time</h6>
                  <p>
                    {pickDate} / <input type="time" />
                  </p>
                </div>
              </div>
              <div className="reservation__info__placentime__details">
                <i class="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropDate} / <input type="time" />
                  </p>
                </div>
              </div>
              <div className="reservation__info__placentime__details">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickPlace}</p>
                </div>
              </div>
              <div className="reservation__info__placentime__details">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropPlace}</p>
                </div>
              </div>
            </div>
            <div className="reservation__info__motor">
              <h3>
                Motorbike - <span>{motorName}</span>
              </h3>
              <img src={findMotorImg(motorName)} />
            </div>
          </div>

          <div className="personal__info">
            <h3>PERSONAL INFORMATION</h3>
            <form>
              <div className="two-col">
                <div className="first-name">
                  <label for="first-name">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="Enter your First Name"
                    value={firstName}
                    onChange={handleFirstName}
                  />
                </div>
                <div className="last-name">
                  <label for="last-name">Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Enter your Last Name"
                    value={lastName}
                    onChange={handleLastName}
                  />
                </div>
                <div className="phone">
                  <label for="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your Phone Number"
                    value={phone}
                    onChange={handlePhone}
                  />
                </div>
                <div className="age">
                  <label for="age">Age</label>
                  <input
                    id="age"
                    type="number"
                    placeholder="Enter your Age"
                    value={age}
                    onChange={handleAge}
                  />
                </div>
              </div>

              <div className="email one-col">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={handleEmail}
                />
              </div>

              <div className="adress one-col">
                <label for="address">Address</label>
                <input
                  id="address"
                  type="text"
                  placeholder="Enter your Home Street Address"
                  value={address}
                  onChange={handleAdress}
                />
              </div>

              <div className="two-col">
                <div className="city">
                  <label for="city">City</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Enter your City"
                    value={city}
                    onChange={handleCity}
                  />
                </div>
                <div className="zip-code">
                  <label for="zipcode">Zip Code</label>
                  <input
                    id="zipcode"
                    type="text"
                    placeholder="Enter your Zip Code"
                    value={zipcode}
                    onChange={handleZipCode}
                  />
                </div>
              </div>

              <div className="follow">
                <input type="checkbox" />
                <p>Please send me latest news and updates</p>
              </div>

              <button type="submit" onClick={confirmBooking}>RESERVE NOW</button>
            </form>
          </div>
        </section>
      </Dialog>
    </section>
  );
};

export default Booking;

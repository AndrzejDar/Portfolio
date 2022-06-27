import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setloading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setloading(true);
    const contact = {
      _type: "contact",
      name: "name",
      email: "email",
      message: "message",
    };

    client.create(contact).then(() => {
      setloading(false);
      setIsFormSubmited(true);
    });
  };

  return (
    <>
      <h2 className="head-text">
        <span>contact me:</span>
      </h2>
      <div className="app__footer-cards">
        <a href="mailto:andrzej.dar@gmail.com">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <p className="p-text">mail: andrzej.dar@gmail.com</p>
          </div>
        </a>
        <a href="tel: +48515066320">
          <div className="app__footer-card">
            <img src={images.mobile} alt="mobile" />
            <p className="p-text">tel: (+48) 515 066 320</p>
          </div>
        </a>
      </div>

      {!isFormSubmited ? (
        <div className="app__footer-form app-flex">
          <div className="app_flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app_flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "sending..." : "Send Message!"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);

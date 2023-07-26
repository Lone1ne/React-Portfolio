import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessModal from "./SucessModal";

emailjs.init(process.env.REACT_APP_EMAILJS_USER);

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailValid, setEmailValid] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const emailRegex = /\S+@\S+\.\S+/;
      setEmailValid(emailRegex.test(value));
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        e.target
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setShowModal(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <form onSubmit={sendEmail}>
        <div>
          <h3>Leave me a message!</h3>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            required
            value={formData.name || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            required
            value={formData.email || ""}
            onChange={handleInputChange}
          />
          {!emailValid && (
            <div className="alert alert-danger" role="alert">
              Please enter a valid email address.
            </div>
          )}
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="message"
            placeholder="Message"
            required
            value={formData.message || ""}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <SuccessModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
}

export default ContactForm;

import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:abdulmann1234@gmail.com">
        <Button className="contactMail">Contact: abdulmann1234@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
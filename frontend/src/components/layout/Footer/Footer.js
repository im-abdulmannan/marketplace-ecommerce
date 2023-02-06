import React, { Fragment } from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Andriod and IOS mobile Phone</p>
          <div>
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="Appstore" />
          </div>
        </div>

        <div className="midFooter">
          <h1>ECOMMERCE.</h1>
          <p>High Quality is our first Priority</p>

          <p>Copyrights 2022 &copy; Abdul-Mannan</p>
        </div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="https://instagram.com/abd._.mannan">Instagram</a>
          <a href="https://facebook.com/am360985">Facebook</a>
          <a href="https://twitter.com/Abdul_mannan_i">Twitter</a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;

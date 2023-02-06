import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/im-abdulmannan/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dkbdh5sen/image/upload/v1665303100/admin/IMG-20221009-WA0025_eoagzi.jpg"
              alt="Founder"
            />
            <Typography>Abdul Mannan</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by Abdul Mannan. Only with the
              purpose to serve others in Projects. Mainly focus on backend.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/im-abdulmannan/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a
              href="https://Wa.me/923030933861?text=Hi+there,+my+name+is"
              target="blank"
            >
              <WhatsAppIcon className="whatsappSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

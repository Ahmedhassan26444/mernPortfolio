import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
import myphoto from "../../images/myphoto.jpeg";
const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is simple quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img className="aboutAvatar" src={myphoto} alt="Ahmad" />

          <Typography 
          variant="h4"
          style={{margin:"0,1vmax" ,color:"black"}}
          >Ahmad Hassan</Typography>

          <Typography
          style={{margin:"0,1vmax" ,color:"black"}}
            >
                Full Stack Developer
            </Typography>
          <Typography
          style={{margin:"0,1vmax" ,color:"black"}}

          >
            Bscs Graduate From Tuf </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "30px",
              letterSpacing: "3px",
              textAlign: "justifed",
              color:"black"
            }}
          >
            Hy my name is Ahmed hassan. 
            I am Mern Stack Developer from Pakistan. 
            I Finsihed doing Bachelor in Computer Science.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>

        <Typography>
          Hey, my name is Ahmad hassan. I am Mern-Stack Developer using Html  CSS Javascript Node js  Mong db  Express  and bscs
          graduate from university of Faisalabad
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>

      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Ahmedhassan26444/" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/@AhmedHassan-ml9qp" target="_blank" rel="noreferrer">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/your-username" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
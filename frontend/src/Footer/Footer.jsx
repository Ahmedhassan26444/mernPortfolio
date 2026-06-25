import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>

        <Typography>
          Hey, my name is Ahmad hassan. I am a Full-Stack Developer and  bscs graduate
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <Typography variant="h6">Social Media</Typography>
<a href="https://github.com/Ahmedhassan26444/" target="blank">
  <BsGithub/>
</a>
<a href="www.youtube.com/@AhmedHassan-ml9qp" target="blank">
  <BsYoutube />
</a>
      <div>
      </div>
    </div>
  );
};

export default Footer;
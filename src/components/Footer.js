import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import clickSound from '../assets/sounds/click.wav';

export const Footer = () => {
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h1 onMouseEnter={playClickSound} className="logoName">Shocademy</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a onMouseEnter={playClickSound}  href="https://www.linkedin.com/in/scriptbal/"><img src={navIcon1} alt="Icon" /></a>
              <a onMouseEnter={playClickSound}  href="https://github.com/shocademy"><img src={navIcon2} alt="Icon" /></a>
              <a onMouseEnter={playClickSound}  href="https://www.instagram.com/shocademy"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p onMouseEnter={playClickSound} >Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

import { useState, useEffect, useRef } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import clickSound from '../assets/sounds/click.wav';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(clickSound);
  }, []);

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    const apiKey = ""; 
    const listId = 3; 

    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email: email,
          listIds: [listId],
          updateEnabled: true, 
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Subscription successful! 🎉");
        setEmail("");
      } else {
        const errorData = await response.json();
        setStatus("error");
        setMessage(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to connect to Brevo API.");
    }
  };

  return (
    <Col lg={12}>
      {/* <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 onMouseEnter={playClickSound}>
              Subscribe to My Newsletter<br /> & Never miss latest updates
            </h3>
            {status === 'sending' && <Alert variant="info">Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button onMouseEnter={playClickSound} type="submit">
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div> */}
    </Col>
  );
};

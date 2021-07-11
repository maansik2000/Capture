import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <ContactContainer
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Contact className="contact-section">
        <ContactForm className="contact-Form">
          <h1>Contact Us</h1>
          <form action="">
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="email" id="email" name="email" placeholder="Email" />
            <input type="tel" id="phone" name="phone" placeholder="Phone" />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
            <textarea
              id="message"
              name="message"
              rows="8"
              cols="40"
              placeholder="Your Message"
            ></textarea>
            <button type="button">Submit</button>
          </form>
        </ContactForm>
        <ContactForm2 className="contact-map">
          <Card>
            <h1>
              <span>
                <i class="fas fa-map-marker-alt"></i>
              </span>{" "}
              Address
            </h1>
            <p>San fransicso, 165, near central park</p>
          </Card>
          <Card>
            <h1>
              {" "}
              <span>
                <i class="far fa-envelope"></i>
              </span>{" "}
              Email
            </h1>
            <p>PhotographyMaster@gmail.com</p>
          </Card>
          <Card>
            <h1>
              {" "}
              <span>
                <i class="fas fa-phone"></i>
              </span>{" "}
              Phone
            </h1>
            <p>+91-9658716585</p>
          </Card>
          <Card>
            <h1>
              {" "}
              <span>
                <i class="fas fa-clock"></i>
              </span>{" "}
              Timing
            </h1>
            <p>10:00 AM - 10:00 PM </p>
          </Card>
        </ContactForm2>
      </Contact>
      <ScrollTop />
    </ContactContainer>
  );
};

const ContactContainer = styled(motion.div)`
  padding: 5rem;
`;

const Contact = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1080px) {
    display: block;
  }
`;

const Card = styled.div`
  background-color: #202224;
  padding: 20px;
  margin: 10px;
  width: 75%;
  border-radius: 20px;
  
  @media (max-width: 1080px) {
    width: 100%;
  }
  transition: all 0.2s ease;
  :hover {
    transform: translateY(-10px);
  }
`;

const ContactForm = styled.div`
  margin: 20px;
  color: white;
  display: inline-block;
  flex: 1;
  width: 100%;
  padding: 60px;
  h1 {
    color: #23d997;
    font-size: 54px;
    margin-bottom: 20px;
  }
  background-color: #202224;
  input {
    display: block;
    padding: 15px;
    background: transparent;
    margin-bottom: 20px;
    color: white;
    border: 1px solid gray;
    border-radius: 15px;
    :focus {
      outline: none;
    }
    width: 100%;
  }
  textarea {
    display: block;
    width: 100%;
    background-color: transparent;
    border: 1px solid gray;
    margin-bottom: 20px;
    color: white;
    padding: 10px;
    :focus {
      outline: none;
    }
  }
  @media (max-width: 1080px) {
    display: block;

    h1 {
      font-size: 34px;
    }
  }
  @media (max-width: 600px) {
    display: block;
    padding: 20px;
    h1 {
      font-size: 34px;
    }
  }
`;

const ContactForm2 = styled.div`
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  flex: 1;
  width: 100%;
  h1 {
    span {
      margin-right: 20px;
    }
    color: #23d997;
  }
`;

export default ContactUs;

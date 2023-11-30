import React from "react";
import profileImage from "../assets/profileImg.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";





const TopPart = () => {
  return (
    <div className="personal">
      <span className="pro">PRO</span>
      <img src={profileImage} alt="" />
      <h1 className="name">Aleksandar Kuzmanovic</h1>
      <p className="country">Serbia</p>
      <p className="stack">Front-End Web Developer</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="secondary">Following</button>
      </div>
      <div className="social">
      <FaLinkedin />
      <FaXTwitter />
      <FaGithub />
      <FaYoutube />
      <FaInstagram />
      </div>
    </div>
  );
};

export default TopPart;

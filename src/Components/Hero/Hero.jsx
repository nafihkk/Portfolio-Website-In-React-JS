import React, { useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/nafi.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Modal from './Modal'; // Import the Modal component


const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleResumeClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Muhammad Nafih K K,</span> MERN stack developer from Kerala</h1>
      <p>I am a web developer from Kerala, specializing in the MERN stack. I craft dynamic, 
        user-friendly web applications that blend functionality with design, bringing your vision to life through seamless, scalable solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleResumeClick}>My resume</div>
      </div>

      {/* Modal for the resume */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-header">
        <h2>My Resume</h2>
        </div>
        <div className="modal-body">
        <p>Thank you for your interest! Please click below to download my resume.</p>
        
        {/* Example: You can include a link to download your resume PDF */}
        <a href="https://drive.google.com/file/d/1ygxmq74RbMOSvCYSfFwlF5Er6jQvuS8x/view?usp=drive_link" download>Download Resume</a>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;

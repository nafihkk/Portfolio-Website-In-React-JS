import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [showFullContent, setShowFullContent] = useState({});

  const handleReadMoreClick = (index) => {
    setShowFullContent((prevShowFullContent) => ({
      ...prevShowFullContent,
      [index]: !prevShowFullContent[index],
    }));
  };

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              {showFullContent[index] ? (
                <div>
                  <p>{service.s_desc}</p>
                  <div className='services-readmore' onClick={() => handleReadMoreClick(index)}>
                    Read Less
                    <img src={arrow_icon} alt="" />
                  </div>
                </div>
              ) : (
                <div>
                  <p>{service.s_desc.substring(0, 90) + '...'}</p>
                  <div className='services-readmore' onClick={() => handleReadMoreClick(index)}>
                    Read More
                    <img src={arrow_icon} alt="" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
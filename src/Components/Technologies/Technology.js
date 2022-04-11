import React from 'react'
import me from '../../img/dem2.png'
import BackgroundAnimation from '../BackgroundAnimation';
import './Technology.css'

const Technology = ({ img, title,desc }) => {
  return (
    <div className="py">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={img}
              alt="Welcome to Hislordship Portfolio"
              style={{ width: "100%", height: "100%" }}
            />
            
          </div>
          <div className="flip-card-back">
            <div className="i-bg">
              
                <h1 className="dep-h1">{title}</h1>
                <p className="dep-p">{desc}</p>
                <BackgroundAnimation />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology

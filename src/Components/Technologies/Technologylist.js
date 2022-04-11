import React from 'react'
import { technologys } from "../../data";
import Technology from './Technology';
import './Technologylist.css'
const Technologylist = () => {
    return (
      <>
      <div className="pli">
        <div className="tech-desc">
          <h1 className="tech">Technologies</h1>
          <p className="tech-i">
            I've worked with a range a technologies in the web development
            world. From Back-end To Design
          </p>
        </div>
        </div>
        <div className="main">
          {technologys.map((items) => (
            <Technology key={items.id} img={items.img} title={items.title} desc={items.desc}/>
          ))}
        </div>
      </>
    );
}

export default Technologylist

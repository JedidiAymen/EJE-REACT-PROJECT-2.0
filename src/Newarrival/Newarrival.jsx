import React from "react";
import ps5Image from "./images/ps5.png";
import womenImage from "./images/women.png";
import speakersImage from "./images/speakers.png";
import perfumeImage from "./images/perfume.png";
import camionImage from "./images/camion.png";
import casqueImage from "./images/casque.png";
import valide from "./images/valide.png";
import "./Newarrival.css";

 const NewArrival = () => {
  return (
    <div className="new-arrival">
      <div className="New-header">
        <div className="New-dot"></div>
        <span className="New-label">Featured</span>
      </div>
      <div className="New-title-row">
        <h2 className="New-title">New Arrival</h2>
      </div>
      <div className="grid-container">
        <div className="item ps5">           
            <div className="text">
                <h3>PlayStation 5</h3>
                <p>Black and White version of the PS5<br></br> coming out on sale.</p>
                <a href="#">Shop Now</a>
            </div>
            <img src={ps5Image} alt="PS5" className="image" />
        </div>
        <div className="item women">     
          <div className="text">
                <h3>Women’s Collections</h3>
                <p>Featured woman collections that give<br></br> 
                   you another vibe.</p>
                <a href="#">Shop Now</a>
          </div>
          <img src={womenImage} alt="women" className="image" />
        </div>
        <div className="item speakers">      
          <div className="text">
                <h3>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <a href="#">Shop Now</a>
          </div>
          <img src={speakersImage} alt="speaker" className="image" />
        </div>
        <div className="item perfume">        
          <div className="text">
                <h3>Perfume</h3>
                <p>GUCCI INTENSE OUD EDP</p>
                <a href="#">Shop Now</a>
          </div>
          <img src={perfumeImage} alt="Perfume" className="image" />
        </div>
      </div>
      <div className="details">
        <div className="details-item camion">
        <img src={camionImage} alt="Camion" className="image" />       
          <div className="text">
            <h2>FREE AND FAST DELIVERY</h2>
            <p>Free delivery for all orders over $140</p>
          </div>
          
        </div>
        <div className="details-item casque">  
          <img src={casqueImage} alt="Casque" className="image" />      
          <div className="text">
            <h2>24/7 CUSTOMER SERVICE</h2>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="details-item valide">
          <img src={valide} alt="Valide" className="image" />        
          <div className="text">
            <h2>MONEY BACK GUARANTEE</h2>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
     <button className="arrow-btn1">⭡</button>
      
    </div>
  );
}
export default NewArrival;
import React, { useState } from "react";
import phoneIcon from "./images/phone.svg";
import computerIcon from "./images/Computer.svg";
import smartwatchIcon from "./images/smartwatch.svg";
import cameraIcon from "./images/Category-Camera.png";
import headphonesIcon from "./images/headphones.svg";
import gamingIcon from "./images/gaming.svg";
import "./Browsebycategory.css";


const CategorySection = () => {
  const [selected, setSelected] = useState("Camera");
  const categories = [
    { name: "Phones", icon: phoneIcon },
    { name: "Computers", icon: computerIcon },
    { name: "SmartWatch", icon: smartwatchIcon },
    { name: "Camera", icon: cameraIcon },
    { name: "HeadPhones", icon: headphonesIcon },
    { name: "Gaming", icon: gamingIcon },
  ];
  return (
    <div className="category-container">
      <div className="category-header">
        <div className="category-dot"></div>
        <span className="category-label">Categories</span>
      </div>
      <div className="category-title-row">
        <h2 className="category-title">Browse By Category</h2>
        <div className="category-arrows">
          <button className="arrow-btn">←</button>
          <button className="arrow-btn">→</button>
        </div>
      </div>
      <div className="category-list-centered">
        {categories.map((cat) => {
          const isSelected = selected === cat.name;

          return (
            <div
              key={cat.name}
              className={isSelected ? "category-card active" : "category-card"}
              onClick={() => setSelected(cat.name)}
            >
              <div className="category-icon">
                <img src={cat.icon} alt={cat.name} />
              </div>
              <div className="category-name">{cat.name}</div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
export default CategorySection;

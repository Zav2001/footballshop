import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./carousel.css";

function Slider() {
  const images = [
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt9e4e32bf55f76874/62d8172990cb3e3b8b387d10/adidas_DataPack_head.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    "https://www.ultrafootball.com/cdn/shop/articles/Nike_Dark_Lighting_Pack_5f92c460-ad11-461e-a060-a0a3a12a4e35_1200x630_crop_center.jpg?v=1607486854",
    "https://www.menstuff.co.za/wp-content/uploads/2023/09/Puma-Gear-Up-pack.jpg",
  ];

  return (
    <Fade pauseOnHover infinite autoplay duration={3000}>
      {images.map((image) => {
        return (
          <div className="each-slide-effect">
            <div
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </div>
        );
      })}
    </Fade>
  );
}

export default Slider;

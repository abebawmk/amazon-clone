import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="001"
            title="Bank Account Math: Life Skills Math Series
              by Sue LaRoy, Christina Reville, et al."
            price={8.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91Am7w+WX6L._SY342_.jpg"
            alt=""
          />
          <Product
            id="002"
            title="LESOWN 5 inch IPS Small Hdmi Monitor VESA Metal Shell 800x480 Mini LCD Screen Portable Display Monitor"
            price={67}
            rating={5}
            image="https://m.media-amazon.com/images/I/41UlqA0JA9L._AC_.jpg"
          />
          <Product
            id="003"
            title="Brand: HARLEY-DAVIDSON
              HARLEY-DAVIDSON Men's Retro Tank Graphic Slim Fit Tee, Blue"
            price={25}
            rating={5}
            image="https://m.media-amazon.com/images/I/813WDF6bMeL._AC_UX679_.jpg"
            alt=""
          />
        </div>
        <div className="home_row">
          <Product
            id="1001"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            alt=""
          />
          <Product
            id="1022"
            title="Devon & Jones Men's Crown Collection Gingham Check> BURGUNDY D640"
            price={45.34}
            rating={5}
            image="https://m.media-amazon.com/images/I/71LRFPIN6+L._AC_UX569_.jpg"
            alt=""
          />
          <Product
            id="1088"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            alt=""
          />
        </div>
        <div className="home_row">
          <Product
            id="2005"
            title="The Road to React: Your journey to master plain yet pragmatic React.js"
            price={29.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51EyrsWbMGL._SL1294_.jpg"
            alt=""
          />
          <Product
            id="2033"
            title="OMEN by HP 2023 Newest 16 Gaming Laptop, 16.1 QHD 165Hz Display, Intel 14-Core i9-12900H, 16GB DDR5 RAM, 1TB SSD, NVIDIA GeForce RTX 3060 Graphics, Backlit Keyboard, Thunderbolt 4, Windows 11 Home"
            price={1249.49}
            rating={4}
            image="https://m.media-amazon.com/images/I/61j-xshyIyL._AC_SL1105_.jpg"
            alt=""
          />
        </div>
        <div className="home_row">
          <Product
            id="3050"
            title="Turtle Beach Recon 50 Gaming Headset for Nintendo Switch, Xbox Series X|S, Xbox One, PS5, PS4, PlayStation, Mobile, & PC with 3.5mm – Removable Mic, 40mm Speakers – Red/Blue"
            price={21.09}
            rating={4}
            image="https://m.media-amazon.com/images/I/61VnJxnkNeL._SL1348_.jpg"
            alt=""
          />
          <Product
            id="3160"
            title="Insta360 Link - PTZ 4K Webcam with 1/2 Sensor, AI Tracking, Gesture Control, HDR, Noise-Canceling Microphones, Specialized Modes, Webcam for Laptop,."
            price={299.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51gEoIixgJL._AC_SL1500_.jpg"
            alt=""
          />
          <Product
            id="3520"
            title="Garmin Forerunner 265S Running Smartwatch, Colorful AMOLED Display, Training Metrics and Recovery Insights, Whitestone and Neo Tropic 42 mm"
            price={449.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71-wnp+C-eL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

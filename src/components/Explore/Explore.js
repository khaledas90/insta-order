import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./Explore.css";
import img1 from "../../img/Rectangle 25.png";
import img2 from "../../img/Rectangle 26.png";
import img3 from "../../img/Rectangle 27.png";
import img4 from "../../img/Rectangle 28.png";
import img5 from "../../img/Rectangle 29.png";
import img6 from "../../img/Rectangle 30.png";
import img7 from "../../img/Rectangle 31.png";

export default function Explore() {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    console.log("Swiper initialized:", swiper);

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="Explore">
      <div className="content_head">
        <p>Explore our newly Products collection</p>
        <h1>OUR COLLECTION</h1>
      </div>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={img1} alt="Product 1" />
          </div>
          <div className="swiper-slide">
            <img src={img2} alt="Product 2" />
          </div>
          <div className="swiper-slide">
            <img src={img3} alt="Product 3" />
          </div>
          <div className="swiper-slide">
            <img src={img4} alt="Product 4" />
          </div>
          <div className="swiper-slide">
            <img src={img5} alt="Product 5" />
          </div>
          <div className="swiper-slide">
            <img src={img6} alt="Product 6" />
          </div>
          <div className="swiper-slide">
            <img src={img7} alt="Product 7" />
          </div>
          <div className="swiper-slide">
            <img src={img1} alt="Product 8" />
          </div>
          <div className="swiper-slide">
            <img src={img2} alt="Product 9" />
          </div>
          <div className="swiper-slide">
            <img src={img3} alt="Product 10" />
          </div>
          <div className="swiper-slide">
            <img src={img4} alt="Product 11" />
          </div>
          <div className="swiper-slide">
            <img src={img5} alt="Product 12" />
          </div>
        </div>
      </div>
    </div>
  );
}

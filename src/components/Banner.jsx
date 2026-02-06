import React, { useEffect, useState } from "react";
import "./Banner.css";

const bannerImages = [
  "https://cdn.dribbble.com/userupload/10608480/file/original-2286c207033c127c7748fc391e852e75.png?resize=752x&vertical=center",
  "https://media.fashionnetwork.com/cdn-cgi/image/format=auto/m/9bbd/9239/870e/e447/99b3/8373/ab91/11fa/889e/3896/3896.jpeg",
  "https://hyyzo.com/blog/content/images/2024/05/flipkart-upcoming-sale.webp",
  "https://digiosmosis.com/wp-content/uploads/2020/07/banner-1-1.jpg",
  "https://tri3d.in/wp-content/uploads/2021/06/FlipkartBanner-01.png",
  "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/flipkart-big-billion-days-sale.jpg",
  "https://storiesflistgv2.blob.core.windows.net/stories/2021/05/FKSfooterbanner_new__.jpg",
  "https://rebatecouponcodes.com/wp-content/uploads/2024/06/Flipkart-Banner.jpg",
  "https://cdn0.zingoy.com/cdn-cgi/image/width=auto,format=auto/production/uploads/campaign_image/mobile_banner/118/Flipkart-Big-Billion-Days-Sale-640-x-160_lrwz1i.jpg",
  "https://www.shopickr.com/wp-content/uploads/2016/10/flipkart-big-billion-day-last-day-sale-6-october-2016-banner-1.jpg"
];

function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000); // auto change every 3 sec

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner-container">
      <img
        src={bannerImages[index]}
        alt="banner"
        className="banner-img"
      />
    </div>
  );
}

export default Banner;

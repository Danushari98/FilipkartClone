import React from "react";
import "./OffersSection.css";
import { useNavigate } from "react-router-dom";

const offers = [
  {
    title: "Mobiles Big Sale",
    img: "https://s3b.cashify.in/gpro/uploads/2021/09/15140000/Best-Smartphone-Deals-on-Flipkart-Big-Billion-Day-Sale.jpg",
    offer: "Up to 40% OFF",
    link: "/mobiles"
  },
  {
    title: "Laptop Bonanza",
    img: "https://www.shopickr.com/wp-content/uploads/2020/07/flipkart-laptop-mega-sale-2020.jpg",
    offer: "Up to 55% OFF",
    link: "/laptops"
  },
  {
    title: "Smart TV Fest",
    img: "https://www.hindustantimes.com/ht-img/img/2025/09/19/1600x900/logo/TV_banner_1758284969773_1758285003383.png",
    offer: "Up to 60% OFF",
    link: "/tvs"
  },
  {
    title: "Home Furniture",
    img: "https://cdn3.desidime.com/cdn-cgi/image/fit=crop,f=auto,onerror=redirect,w=1200,h=1200,q=90/topics/photos/2010587/original/FlipkartBigBillionDays2025Top50DealsOfferstoBuy1.png",
    offer: "Min 30% OFF",
    link: "/furniture"
  },
  {
    title: "Kitchen Essentials",
    img: "https://rukminim2.flixcart.com/image/480/640/l0h1g280/kitchen-tool-set/q/2/d/spatula-3pcs-orange-flipkart-smartbuy-original-imagc92vu7zmmhke.jpeg?q=90",
    offer: "Up to 70% OFF",
    link: "/kitchen"
  },
  {
    title: "Fashion Deals",
    img: "https://pbs.twimg.com/media/FjNs_SHagAI6yvJ.jpg",
    offer: "Under ₹499",
    link: "/fashion"
  },
  {
    title: "Beauty Products",
    img: "https://rukminim2.flixcart.com/image/480/640/kwcfngw0/makeup-kit/l/q/x/original-makeup-kit-combo-pack-box-of-16-beauty-products-for-all-original-imag9fcmhdajryng.jpeg?q=90",
    offer: "Buy 1 Get 1",
    link: "/beauty"
  },
  {
    title: "Grocery Savings",
    img: "https://pbs.twimg.com/media/FBBQ-CzVkAQur4q.jpg",
    offer: "Min 20% OFF",
    link: "/grocery"
  },
  {
    title: "Headphones & Audio",
    img: "https://rukminim2.flixcart.com/fk-p-flap/824/586/image/cc12b8a4642a606f.jpg?q=90",
    offer: "Up to 50% OFF",
    link: "/audio"
  },
  {
    title: "Smart Watches",
    img: "https://images.gizbot.com/img/2022/09/flipkart-big-billion-days-sale-on-smartwatches-1663830131.jpg",
    offer: "Starting ₹899",
    link: "/watches"
  }
];

function OffersSection() {
  const navigate = useNavigate();

  return (
    <div className="offers-container">
      <h2 className="offers-title">🔥 Today’s Top Offers</h2>

      <div className="offers-grid">
        {offers.map((item, index) => (
          <div
            className="offer-card"
            key={index}
            onClick={() => navigate(item.link)}
          >
            <img src={item.img} alt={item.title} className="offer-img" />
            <h3 className="offer-name">{item.title}</h3>
            <p className="offer-text">{item.offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OffersSection;

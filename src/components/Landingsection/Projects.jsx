import React from "react";
import Anime from "../../assets/Project/Anime.webp";
import API from "../../assets/Project/API.webp";
import Drink from "../../assets/Project/Drink.webp";
import Health from "../../assets/Project/Health.webp";
import Fashion from "../../assets/Project/Fashion.webp";
import Glamor from "../../assets/Project/Glamor.webp";
import Jewll from "../../assets/Project/Jewll.webp"; // Fixed Import Name
import Jobringer from "../../assets/Project/Jobringer.webp";
import Jwells from "../../assets/Project/Jwells.webp";
import Kploy from "../../assets/Project/Kploy.webp";
import NFT from "../../assets/Project/NFT.webp";
import Payment from "../../assets/Project/Payment.webp";
import Pizza from "../../assets/Project/Pizza.webp";
import Raikar from "../../assets/Project/Raikar.webp";
import Shopify from "../../assets/Project/Shopify.webp";
import Shopping from "../../assets/Project/Shopping.webp";

const images = [
  Anime, API, Drink, Health, Fashion, Glamor, Jewll, Jobringer,
  Jwells, Kploy, NFT, Payment, Pizza, Raikar, Shopify, Shopping
];

const Projects = () => {
  return (
    <div className="py-36  mx-auto overflow-hidden">
      <div className="w-full inline-flex flex-nowrap">
        {[...Array(2)].map((_, index) => (
          <ul
            key={index}
            className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-[340px] animate-infinite-scroll"
            aria-hidden={index === 1}
          >
            {images.map((src, i) => (
              <li key={i}>
                <img className="h-60 w-150 max-w-full rounded-lg outline outline-8 outline-white" src={src} alt={`Project ${i + 1}`} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Projects;

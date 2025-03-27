import React from "react";
import Anime from "../../assets/Project/anime.webp";
import API from "../../assets/Project/api.webp";
import Drink from "../../assets/Project/drink.webp";
import Health from "../../assets/Project/health.webp";
import Fashion from "../../assets/Project/fashion.webp";
import Glamor from "../../assets/Project/glamor.webp";
import Jewll from "../../assets/Project/jewll.webp"; // Fixed Import Name
import Jobringer from "../../assets/Project/jobringer.webp";
import Jwells from "../../assets/Project/jwells.webp";
import Kploy from "../../assets/Project/kploy.webp";
import NFT from "../../assets/Project/nft.webp";
import Payment from "../../assets/Project/payment.webp";
import Pizza from "../../assets/Project/pizza.webp";
import Raikar from "../../assets/Project/raikar.webp";
import Shopify from "../../assets/Project/shopify.webp";
import Shopping from "../../assets/Project/shopping.webp";

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

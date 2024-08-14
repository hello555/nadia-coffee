import React from "react";
import "./Home.css";

import bannerImage from "../assets/Nadia_Art.png";
import signatureImage from "../assets/nadia_signature.png";
import productImage1 from "../assets/product-moonrise-blend.png";
import productImage2 from "../assets/product-sunrise-blend.png";

import ProductFeature from "../components/ProductFeature";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <div className="banner-image-container">
          <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>
        <div className="text-content">
          <div className="banner-company-name">
            <h1>nadia</h1>
            <h1>coffee</h1>
          </div>
          <div className="banner-quote">
            <p>using coffee as a medium to release energy into the world</p>
          </div>
          <div className="quote-image-container">
            <img src={signatureImage} alt="signature" className="quote-image" />
          </div>
        </div>
      </div>
      <h2>Featured Products</h2>
      <div className="promo-section">
        <div className="promo-text">
          <h1 className="promo-header">
            try our <br></br>custom blends
          </h1>
          <div className="promo-description">
            <p>specially made to suit your mood</p>
          </div>
        </div>
        <div className="product-grid">
          <ProductFeature
            imageSrc={productImage1}
            productName="Moonrise Nadia Blend"
            description="This blend can be expressed in two words: sweet butter. With nutty, toasted almost, the texture of this coffee is so smooth, it'll leave a buttery coat in your mouth."
          />
          <ProductFeature
            imageSrc={productImage2}
            productName="Sunrise Nadia Blend"
            description="This blend is filled with hints of acidity that will explode in your mouth, but are followed with a sweet and deep body that lingers after you swallow"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

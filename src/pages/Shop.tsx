import React from "react";
import "./Shop.css";
import ProductFeature from "../components/ProductShop";

import bannerImage from "../assets/shop-banner-pic-shadow.png";
import productImage1 from "../assets/product-ethiopia-yirgacheffe-packaging.png";
import productImage2 from "../assets/product-kenya-aa-top-gold-packaging.png";
import productImage3 from "../assets/product-moonrise-blend-packaging.png";
import productImage4 from "../assets/product-sunrise-blend-packaging.png";

const ShopPage: React.FC = () => {
  return (
    <div className="shop-container">
      <div className="shop-banner">
        <div className="shop-banner-image-container">
          <img src={bannerImage} alt="Banner" className="shop-banner-image" />
        </div>
        <div className="shop-text-content">
          <div className="shop-banner-header">
            <h1 className="shop-banner-header-text">check out</h1>
            <h1 className="shop-banner-header-text">our products</h1>
          </div>
          <div className="shop-quote">
            <p>
              pick from multiple kinds of blends, comes in 100g if you just want
              to try it out first
            </p>
          </div>
        </div>
      </div>
      <h2 className="product-shop-header">Products</h2>
      <div className="product-grid">
        <ProductFeature
          imageSrc={productImage4}
          productName="Sunrise Nadia Blend 100g"
          price="₩ 12,000"
          onClick={() =>
            (window.location.href =
              "https://smartstore.naver.com/nadiacoffee/products/10329313217")
          }
        />
        <ProductFeature
          imageSrc={productImage3}
          productName="Moonrise Nadia Blend 100g"
          price="₩ 11,000"
          onClick={() =>
            (window.location.href =
              "https://smartstore.naver.com/nadiacoffee/products/10322740585")
          }
        />
        <ProductFeature
          imageSrc={productImage2}
          productName="Kenya AA Top Gold 100g"
          price="₩ 10,000"
          onClick={() =>
            (window.location.href =
              "https://smartstore.naver.com/nadiacoffee/products/10322733789")
          }
        />
        <ProductFeature
          imageSrc={productImage1}
          productName="Ethiopia Yirgacheffe G1 Koke Honey 100g"
          price="₩ 10,000"
          onClick={() =>
            (window.location.href =
              "https://smartstore.naver.com/nadiacoffee/products/10322735752")
          }
        />
        <ProductFeature
          imageSrc={productImage4}
          productName="Sunrise Nadia Blend 200g"
          price="₩ 24,000"
          onClick={() =>
            (window.location.href =
              "https://smartstore.naver.com/nadiacoffee/products/10329391473")
          }
        />
        <ProductFeature
          imageSrc={productImage3}
          productName="Moonrise Nadia Blend 200g"
          price="₩ 22,000"
          onClick={() =>
            (window.location.href =
              "https://smartstore.naver.com/nadiacoffee/products/10302742392")
          }
        />
        <ProductFeature
          imageSrc={productImage2}
          productName="Kenya AA Top Gold 200g"
          price="₩ 20,000"
          onClick={() =>
            (window.location.href =
              "https://smartstore.naver.com/nadiacoffee/products/10299555128")
          }
        />
        <ProductFeature
          imageSrc={productImage1}
          productName="Ethiopia Yirgacheffe G1 Koke Honey 200g"
          price="₩ 20,000"
          onClick={() =>
            (window.location.href =
              "https://smartstore.naver.com/nadiacoffee/products/10299578797")
          }
        />
      </div>
    </div>
  );
};

export default ShopPage;

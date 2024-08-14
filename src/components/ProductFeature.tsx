import React from "react";
import "./ProductFeature.css";

interface ProductFeatureProps {
  imageSrc: string;
  productName: string;
  description: string;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({
  imageSrc,
  productName,
  description,
}) => {
  return (
    <div className="product-card">
      <img src={imageSrc} alt="Product" className="product-image" />
      <p className="product-name">{productName}</p>
      <p className="product-description">{description}</p>
      <a href="/shop">
        <button className="buy-now-button">Buy Now</button>
      </a>
    </div>
  );
};

export default ProductFeature;

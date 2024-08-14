import React from "react";
import "./ProductShop.css";

import shareIcon from "../assets/share.png";
import shoppingCartIcon from "../assets/shopping-cart.png";

interface ProductShopProps {
  imageSrc: string;
  productName: string;
  price: string;
  onClick: () => void;
}

const ProductFeature: React.FC<ProductShopProps> = ({
  imageSrc,
  productName,
  price,
  onClick,
}) => {
  return (
    <div className="product-shop-card" onClick={onClick}>
      <div className="icon-container">
        <img src={shareIcon} alt="Share" />
        <img src={shoppingCartIcon} alt="Add to Cart" />
      </div>
      <img src={imageSrc} alt="Product" className="product-shop-image" />
      <div className="product-shop-info">
        <p className="product-shop-name">{productName}</p>
        <p className="product-shop-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductFeature;

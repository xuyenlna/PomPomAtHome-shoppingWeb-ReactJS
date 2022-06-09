import React from "react";
import { useParams } from "react-router-dom";
import "./PageDetail.scss";
import "./component/AddToCart/AddToCart";
import LinkTitle from "./component/LinkTitle/LinkTitle";
import Carousel from "./component/Carousel/Carousel";
import ProductInfo from "./component/ProductInfo/ProductInfo";
import RelatedProduct from "./component/RetaltedProduct/RelatedProduct";
import DetailAndCare from "./component/DetailAndCare/DetailAndCare";
import useProductDetails from "./hook/useProductDetails";
import Loading from "../../components/Loading/Loading";
import productApi from "../../api/productsApi";

export default function PageDetail() {
  const { productId } = useParams();
  const { product, loading } = useProductDetails(productId);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="pageDetail">
      {/* title link */}
      <LinkTitle product={product} />

      <div className="row product__detail">
        {/* carousel */}
        <Carousel product={product} />

        {/* product info */}
        <ProductInfo product={product} />
      </div>

      {/* detail and care */}
      <DetailAndCare product={product} />

      {/* related product */}
      <RelatedProduct product={product} />
    </div>
  );
}

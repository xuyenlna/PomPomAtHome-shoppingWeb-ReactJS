import React, { useEffect, useState } from "react";
import productApi from "../../../api/productsApi";

export default function useProductDetailsWithNameAndColor(
  productName,
  colorName
) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productApi.filter(productName, colorName);
        setProduct(result);
      } catch (error) {
        console.log("fail to fetch product detail data", error);
      }
      setLoading(false);
    })();
  }, [productName, colorName]);

  return { product, loading };
}

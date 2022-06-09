import React, { useEffect, useState } from "react";
import productApi from "../../../api/productsApi";

export default function useProductDetails(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productApi.get(productId);
        setProduct(result);
      } catch (error) {
        console.log("fail to fetch product detail data", error);
      }
      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}

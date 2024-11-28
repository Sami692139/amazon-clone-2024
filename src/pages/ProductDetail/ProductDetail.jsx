import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LaOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

const ProductDetail = () => {
  
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { productId } = useParams();
    //  console.log(productId);
  useEffect(()=>{
    setIsLoading(true)

  axios.get(`${productUrl}/products/${productId}`)
    .then((res) => {
      // console.log(res.data)
      setProduct(res.data);
      setIsLoading(false)
     
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false)
    });
  },[])
  console.log(product)

  return (
    <LayOut>
      {isLoading ? (<Loader />) : 
      (<ProductCard
       product={product}
        flex = {true}
        renderDesc= {true}
        renderAdd={true}
        />)}
    </LayOut>
  );
};

export default ProductDetail;

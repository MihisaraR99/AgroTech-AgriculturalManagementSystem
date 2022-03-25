import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Store.css";
import StoreProductSingle from "./StoreProductSingle";

const StoreProducts = () => {
  let params = useParams();
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/store/products/${params.category}`)
      .then((res) => {
        setProducts(res.data.products);
      });

    console.log(products);
  }, []);

  return (
    <div className="store-container">
      <h1 class="display-2 p-4 px-5">
        {params.category.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
      </h1>

      <div className="products-list row p-5">
        {products &&
          products.map((prod) => (
            <StoreProductSingle
              key={prod._id}
              img={prod.image}
              title={prod.name}
              price={prod.price}
              id={prod._id}
            />
          ))}
      </div>
    </div>
  );
};

export default StoreProducts;

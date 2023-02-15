import React from "react";
import { useEffect } from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import useMounted from "../components/useMounted";

const ProductList = () => {
  const {
    filtered_products: products,
    grid_view,
    // updateTestState,
  } = useFilterContext();
  const mounted = useMounted();

  console.log(mounted, "product list");

  if (products.length < 1) {
    return (
      <h5 style={{ texTransform: "none" }}>
        Sorry no product matched your search
      </h5>
    );
  } else if (grid_view === false) {
    return <ListView products={products}></ListView>;
  }

  return <GridView products={products}></GridView>;
};

export default ProductList;

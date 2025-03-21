import { useEffect, useState } from "react";
import { VerticalSpace } from "../../components";
import RecipesHeader from "./RecipesHeader.jsx";
import RecipesTable from "./RecipesTable";

const Recipes = () => {
  const [dataSource, setDataSource] = useState([]);
  const [filters, setFilters] = useState([]);

  const getTable = () => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data?.carts?.flatMap((cart) =>
          cart.products.map((product, index) => ({
            key: `${cart.id}-${product.id}`,
            id: `${cart.id}-${product.id}`,
            recipeName: product.title,
            category: product.title,
            type: "Bulk Recipe",
            recipeYield: index + 1,
            serving: +cart.discountedTotal,
            recipeCost: +cart.totalQuantity,
            foodCost: +cart.totalProducts,
          }))
        );
        setDataSource(formattedData);
        setFilters([]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setDataSource([]);
      });
  };

  useEffect(() => {
    getTable();
  }, []);

  return (
    <>
      <RecipesHeader
        getTable={getTable}
        filters={filters}
        setFilters={setFilters}
      />
      <VerticalSpace />
      <div className="table-border"></div>
      <VerticalSpace />
      <RecipesTable getTable={getTable} dataSource={dataSource} />
    </>
  );
};

export default Recipes;

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory, cantidadValue) => {
    let create = !categories.find((category) => {
      return category[0].toLowerCase() === newCategory.toLowerCase();
    });

    create && setCategories([[newCategory, cantidadValue], ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid
          key={category[0]}
          category={category[0]}
          cantidad={category[1]}
        />
      ))}
    </>
  );
};

export default GifExpertApp;

import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifs, addGif } from "../helpers/getGifs";

export const GifGrid = ({ category, cantidad }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category, cantidad);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  const onDelete = (id) => {
    setImages((image) => image.filter((e) => e.id != id));
  };

  const addImage = async () => {
    const newObject = await addGif(category, images);
    setImages([...images, newObject]);
  };

  return (
    <div>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} onDelete={onDelete} />
        ))}
        <div className="addGif">
          <button onClick={() => addImage(category)}>1+</button>
        </div>
      </div>
    </div>
  );
};

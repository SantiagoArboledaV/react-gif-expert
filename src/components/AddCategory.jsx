import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const [cantidadValue, setCantidadValue] = useState(10);

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onCantidadChange = ({ target }) => {
    setCantidadValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return "";

    onNewCategory(inputValue.trim(), cantidadValue);
    setInputValue("");
  };

  return (
    <div className="form-input">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />

        <input
          type="number"
          placeholder="Cantidad"
          value={cantidadValue}
          onChange={onCantidadChange}
        />

        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

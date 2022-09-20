const apiKey = "T3Ttg1Wp7uQ8xsb4eDrthAY5L7rh1GWJ";
const url = "https://api.giphy.com/v1/gifs/";
const random = "random?api_key=";

export const getGifs = async (category, limit = 1) => {
  const urlSearch = `${url}search?api_key=${apiKey}&q=${category}&limit=${limit}`;

  const peticion = await fetch(urlSearch);

  const { data } = await peticion.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
    limit: limit,
  }));

  return gifs;
};

export const addGif = async (category, images) => {
  let startOn = images[images.length - 1] ? images[images.length - 1].limit : 1;
  let newEntry;

  do {
    const urlSearch = `${url}search?api_key=${apiKey}&q=${category}&limit=${startOn}`;

    const peticion = await fetch(urlSearch);

    const { data } = await peticion.json();

    newEntry = data[data.length - 1];

    startOn++;
  } while (images.find((e) => e.id == newEntry.id));

  const gifs = {
    id: newEntry.id,
    title: newEntry.title,
    url: newEntry.images.downsized_medium.url,
    limit: startOn,
  };

  return gifs;
};

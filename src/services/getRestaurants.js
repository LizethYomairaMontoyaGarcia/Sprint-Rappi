import axios from "axios";

export const getRestaurants = async () => {
  try {
    const { data } = await axios.get("https://climbing-workable-milkshake.glitch.me/restaurants");
    return data;
  } catch (error) {
    console.log("Error al obtener los restaurantes", error);
    return [];
  }
};

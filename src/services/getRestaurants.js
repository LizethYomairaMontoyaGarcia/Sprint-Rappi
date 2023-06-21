import axios from "axios";

export const getRestaurants = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/restaurants");
    return data;
  } catch (error) {
    console.log("Error al obtener los restaurantes", error);
    return [];
  }
};

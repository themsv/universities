import axios from "axios";

export const getUniversitiesByCountry = async (_country) => {
  const apiUrl = `http://universities.hipolabs.com/search?country=${_country}`;
  console.log(apiUrl);
  const response = await axios.get(apiUrl);
  const data = await response.data;

  return data.filter((eachData, index) => eachData && index < 10);
};

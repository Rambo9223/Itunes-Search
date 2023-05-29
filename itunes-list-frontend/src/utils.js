import axios from "axios";
/*Base function to test if the api returns the correct data using the 
supplied base url */

export const BASE_URL = "https://itunes.apple.com/search?limit=1&term=all+the+small+things&media=music";

export const fetchData = async () => {
  try {
    return (await axios.get(`${BASE_URL}`));// if success return object
  } catch (e) {
    return [];// if unsucessful return empty array
  }
};
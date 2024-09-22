import axios from "axios";

export const fetchData = async (url) => {
  try {
    const cachedData = JSON.parse(localStorage.getItem(url));
    const curDate = Math.floor(new Date().getTime() / 1000);

    if (cachedData && cachedData.time_next_update_unix > curDate) {
      return cachedData;
    }

    const response = await axios.get(url);
    const data = response.data;

    localStorage.setItem(url, JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return cachedData ? JSON.parse(cachedData) : null;
  }
};

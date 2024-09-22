import { fetchData } from "../utils/fetchCaching";

const apiUrl = "https://v6.exchangerate-api.com/v6";

export const getExchangeRate = (currency1, currency2) => {
  const response = fetchData(
    `${apiUrl}/${
      import.meta.env.VITE_ExchangeRate_API_KEY
    }/pair/${currency1}/${currency2}`
  )
    .then((res) => res.conversion_rate)
    .catch(function (error) {
      console.log(error);
      return null;
    });

  return response;
};

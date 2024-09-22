import axios from "axios";

export const getExchangeRate = (currency1, currency2) => {
  const response = axios
    .get(
      `https://v6.exchangerate-api.com/v6/${
        import.meta.env.VITE_ExchangeRate_API_KEY
      }/pair/${currency1}/${currency2}`
    )
    .then((res) => res.data.conversion_rate)
    .catch(function (error) {
      console.log(error);
      return null;
    });
  return response;
};

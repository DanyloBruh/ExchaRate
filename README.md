# ExchaRate

The Exchange Rate project is a web application that allows users to receive current exchange rates in real time. 

The application supports exchange rates for the most popular world currencies, such as USD, EUR, UAH.

The exchange rate is obtained from the [ExchangeRate-API](https://www.exchangerate-api.com)

## Used libraries:
1. axios
2. react-select
3. react

## Run Locally

1. Install dependencies:

```bash
  npm install
```

2. Create an .env file in the root of the project.

3. Get an API key:

- Visit the [ExchangeRate-API](https://www.exchangerate-api.com) site.
- Register an account to generate an API key.

4. Save the API key to an **.env** file:

- Open the **.env** file.
- Add a line with your API key in the following format:

```bash
  VITE_ExchangeRate_API_KEY=your_api_key_here
```
Replace **your_api_key_here** with the key you received.

5. Run the project in development mode:

```bash
  npm run dev
```

## Authors

- [@danyloB](https://github.com/DanyloBruh)   

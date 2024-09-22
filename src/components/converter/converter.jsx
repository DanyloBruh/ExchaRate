import style from "./converter.module.css";
import usd from "../../assets/flags/United States of America - US.png";
import euro from "../../assets/flags/European Union.png";
import ua from "../../assets/flags/Ukraine - UA.png";
import { useEffect, useState } from "react";
import Input from "../input/input";
import SelectCurrency from "../select/select";
import { getExchangeRate } from "../../api/api";

const options = [
  { value: "USD", label: "USD", image: usd },
  { value: "EUR", label: "EUR", image: euro },
  { value: "UAH", label: "UAH", image: ua },
];

const Converter = () => {
  const [selectedFirstCurrency, setSelectedFirstCurrency] = useState(
    options[0]
  );
  const [selectedSecondCurrency, setSelectedSecondCurrency] = useState(
    options[2]
  );

  const [inputFirstCurrency, setInputFirstCurrency] = useState(1);
  const [inputSecondCurrency, setInputSecondCurrency] = useState("");

  const [currencyConverterValue, setCurrencyConverterValue] = useState(null);

  const setSecondCurrency = (currency, converterValue) => {
    setInputSecondCurrency((currency * converterValue).toFixed(3));
  };

  const setFirstCurrency = (currency, converterValue) => {
    setInputFirstCurrency((currency / converterValue).toFixed(3));
  };

  useEffect(() => {
    const setExchangeRate = async () => {
      const currency = await getExchangeRate(
        selectedFirstCurrency.value,
        selectedSecondCurrency.value
      );
      if (currency) {
        setCurrencyConverterValue(currency);
        setSecondCurrency(inputFirstCurrency, currency);
      }
    };
    if (selectedFirstCurrency && selectedSecondCurrency) {
      setExchangeRate();
    }
  }, [selectedFirstCurrency, selectedSecondCurrency]);

  const handlerFirstCurrency = (e) => {
    let value = e.target.value;
    value = value.replace(",", ".");
    const numericValue = value.replace(/[^0-9.]/g, "");
    const dotCount = (numericValue.match(/\./g) || []).length;

    if (dotCount > 1) {
      value = numericValue.slice(0, numericValue.lastIndexOf("."));
    } else {
      value = numericValue;
    }
    setInputFirstCurrency(value);
    if (currencyConverterValue) {
      setSecondCurrency(+value, currencyConverterValue);
    }
  };

  const handlerSecondCurrency = (e) => {
    let value = e.target.value;
    value = value.replace(",", ".");
    const numericValue = value.replace(/[^0-9.]/g, "");
    const dotCount = (numericValue.match(/\./g) || []).length;

    if (dotCount > 1) {
      value = numericValue.slice(0, numericValue.lastIndexOf("."));
    } else {
      value = numericValue;
    }
    setInputSecondCurrency(value);
    if (currencyConverterValue) {
      setFirstCurrency(+value, currencyConverterValue);
    }
  };

  const onChangeSelectedFirstCurrency = () => {
    let firstCurrency = selectedFirstCurrency;
    setSelectedFirstCurrency(selectedSecondCurrency);
    setSelectedSecondCurrency(firstCurrency);
  };

  return (
    <main className={style.content}>
      <div className={style["converter-block"]}>
        <h1 className={style.title}>Currency converter</h1>
        <div className={style.converter}>
          <div className={style["converter__input-group"]}>
            <SelectCurrency
              value={selectedFirstCurrency}
              data={options.filter(
                (option) => option.value !== selectedSecondCurrency.value
              )}
              defaultValue={options[0]}
              onChange={(e) => setSelectedFirstCurrency(e)}
            />
            <Input value={inputFirstCurrency} onChange={handlerFirstCurrency} />
          </div>
          <div className={style["converter__exchange-button-wrapper"]}>
            <button
              className={style["converter__exchange-button"]}
              onClick={onChangeSelectedFirstCurrency}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 118.25"
                  xmlSpace="preserve"
                >
                  <path d="M75,0.7l23.2,23.2c1,1,1,2.6,0,3.5L75,50.7c-1.6,1.6-4.3,0.5-4.3-1.8V34.5H2.5C1.1,34.5,0,33.3,0,32l0-12.1  c0-1.4,1.1-2.5,2.5-2.5l68.2,0V2.5C70.7,0.3,73.4-0.8,75,0.7z" />
                  <path d="M29.3,45.6v14.8h68.2c1.4,0,2.5,1.1,2.5,2.5v12.1c0,1.4-1.1,2.5-2.5,2.5H29.3V92c0,2.2-2.7,3.4-4.3,1.8  L1.8,70.6c-1-1-1-2.6,0-3.5L25,43.9C26.6,42.3,29.3,43.4,29.3,45.6z" />
                </svg>
              </span>
            </button>
          </div>
          <div className={style["converter__input-group"]}>
            <SelectCurrency
              value={selectedSecondCurrency}
              data={options.filter(
                (option) => option.value !== selectedFirstCurrency.value
              )}
              defaultValue={options[2]}
              onChange={(e) => setSelectedSecondCurrency(e)}
            />
            <Input
              value={inputSecondCurrency}
              onChange={handlerSecondCurrency}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Converter;

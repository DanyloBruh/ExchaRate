import style from "./header.module.css";
import logo from "../../assets/logo.png";
import USA from "../../assets/flags/United States of America - US.png";
import euro from "../../assets/flags/European Union.png";
import { useEffect } from "react";
import { useState } from "react";
import { getExchangeRate } from "../../api/api";

const Header = () => {
  const [euroExchangeRate, setEuroExchangeRate] = useState(null);
  const [usdExchangeRate, setUsdExchangeRate] = useState(null);

  useEffect(() => {
    const setExchangeRate = async () => {
      const euro = await getExchangeRate("EUR", "UAH");
      const usd = await getExchangeRate("USD", "UAH");
      setEuroExchangeRate(euro);
      setUsdExchangeRate(usd);
    };
    setExchangeRate();
  }, []);
  return (
    <header className={style.header}>
      <div className={style["header__logo"]}>
        <img
          className={style["header__img"]}
          src={logo}
          alt="ExchaRate logo"
        />
        <span className={style["header__title"]}>ExchaRate</span>
      </div>
      <div className={style["exchange-rate"]}>
        <div className={style["exchange-rate__item"]}>
          <img src={USA} />
          <span>{usdExchangeRate ? usdExchangeRate : "--.--"}</span>
        </div>
        <div className={style["exchange-rate__item"]}>
          <img src={euro} />
          <span>{euroExchangeRate ? euroExchangeRate : "--.--"}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

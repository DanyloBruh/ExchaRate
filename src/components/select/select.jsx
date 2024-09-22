import "./select.css";
import Select from "react-select";

const SelectCurrency = ({ value, data, defaultValue, onChange }) => {
  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      options={data}
      formatOptionLabel={(currency) => (
        <div className="currency-option">
          <span className="currency-option__label">{currency.label}</span>
          <img
            className="currency-option__img"
            src={currency.image}
            alt="country-image"
          />
        </div>
      )}
    />
  );
};

export default SelectCurrency;

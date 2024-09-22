import style from "./input.module.css";

const Input = ({ value, onChange }) => {
  return (
    <div className={style.field}>
      <input
        type="text"
        inputMode="decimal" 
        value={value}
        onChange={onChange}
        className={style['field__input']}
      />
      <div className={style['field__line']} />
    </div>
  );
};

export default Input;

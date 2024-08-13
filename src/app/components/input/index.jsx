import Styles from "./input.module.scss";

const Input = ({ type, placeholder, pattern, required, messageError, onBlur, name, id, onChange, value }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      title={messageError}
      pattern={pattern}
      required={required}
      className={Styles.input}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
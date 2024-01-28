import Styles from "./input.module.scss";

const Input = ({ type, placeholder, pattern, required, messageError }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            title={messageError}
            pattern={pattern}
            required={required}
            className={Styles.input}
        />
    );
};

export default Input;
import "./styles.css";

const InputField = () => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Wprowadź zadanie"
        className="input__box"
      />
      <button className="input_submit" type="submit">Go</button>
    </form>
  );
};

export default InputField;

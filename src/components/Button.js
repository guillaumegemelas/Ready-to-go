const Button = ({ textColor, backGround, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="switchMode"
        style={{ color: textColor, backgroundColor: backGround }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

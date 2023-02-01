const Button = ({ textColor, backGround, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="switch1"
        style={{ color: textColor, backgroudColor: backGround }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

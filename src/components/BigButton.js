const BigButton = ({ textColor, backGround, text }) => {
  return (
    <div>
      <button
        className="switchbutton"
        style={{ color: textColor, backgroundColor: backGround }}
      >
        {text}
      </button>
    </div>
  );
};

export default BigButton;

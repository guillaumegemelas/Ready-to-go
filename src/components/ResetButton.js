const ResetButton = ({ textColor, backGround, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="reset"
        style={{ color: textColor, backgroundColor: backGround }}
      >
        {text}
      </button>
    </div>
  );
};

export default ResetButton;

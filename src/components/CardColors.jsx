import "../styles/ColorCard.css";

function CardColors({ colors, onCopy }) {
  const scaleSteps = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div className="Colors">
      {colors.map((color, index) => (
        <div className="ColorCard" key={index}>
          <div className="ColorCardTitle">
            <div
              className="ColorCardPreview"
              style={{ backgroundColor: color.color || color }}
            ></div>
            <h3>{scaleSteps[index]}</h3>
          </div>
          <div className="ColorCardContent">
            <p>{color.color || color}</p>
            <button
              className="copyButton"
              onClick={() => onCopy(color.color || color)}
            >
              <i className="fas fa-copy"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardColors;

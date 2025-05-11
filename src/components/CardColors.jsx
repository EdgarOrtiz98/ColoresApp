import "../styles/ColorCard.css";

function CardColors({ colors }) {
  const scaleSteps = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div className="Colors">
      {colors.map((color, index) => (
        <div className="ColorCard" key={index}>
          <div className="ColorCardTitle">
            <div
              className="ColorCardPreview"
              style={{ backgroundColor: color }}
            ></div>
            <h3>{scaleSteps[index]}</h3>
          </div>
          <div className="ColorCardContent">
            <p>{color}</p>
            <button
              className="copyButton"
              onClick={() => navigator.clipboard.writeText(color)}
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

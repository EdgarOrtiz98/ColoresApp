import "../styles/ColorCard.css";

function CardColors({ colors }) {
  return (
    <div className="Colors">
      {colors.map((color, index) => (
        <div className="ColorCard" key={index}>
          <div className="ColorCardTitle">
            <div
              className="ColorCardPreview"
              style={{ backgroundColor: color }}
            ></div>
            <h3>{(index + 1) * 100}</h3>
          </div>
          <div className="ColorCardContent">
            <p>{color}</p>
            <button className="copyButton">
              <i className="fas fa-copy"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default CardColors;

import { useState, useEffect } from "react";
import "./styles/App.css";
import CardsColor from "./components/CardColors.jsx";
import { syncColorPicker } from "./scripts/Colores.js";
import { generateColorShades } from "./scripts/ToneGenerator.js";
import {
  getRandomHexColor,
  handleColorChange
} from "./scripts/App.js";

function App() {
  const [colorShades, setColorShades] = useState([]);
  const [hexValue, setHexValue] = useState("");
  const [showToast, setShowToast] = useState(false);

  function handleCopyColor(color) {
    navigator.clipboard.writeText(color);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }

  useEffect(() => {
    const randomColor = getRandomHexColor();
    setHexValue(randomColor);
    const shades = generateColorShades(randomColor);
    setColorShades(shades);
    syncColorPicker();
  }, []);
  return (
    <>
      {showToast && <div className="toast">¡Color copiado!</div>}
      <div className="Container">
        <h1>ColoresApp</h1>
        <div className="InputHexa">
          <div className="InputTitle">
            <h2>Agregar Color</h2>
            <p>HEX</p>
          </div>
          <div className="InputSearch">
            <div className="InputGroup">
              <input
                type="color"
                className="colorPicker"
                id="colorPicker"
                value={hexValue}
                onChange={handleColorChange}
              />
              <input
                type="text"
                id="hexOutput"
                className="textInput"
                value={hexValue}
                placeholder="Codigo Hexadecimal"
                maxLength="7"
                pattern="^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$"
                title="El código hexadecimal debe comenzar con '#' y contener 3 o 6 dígitos hexadecimales."
              />
            </div>
            <button className="InputButton">Agregar Color</button>
          </div>
        </div>
        <div className="InputTitle">
          <h2>Paleta de Colores</h2>
          <p className="exportPalette">Exportar</p>
        </div>
      </div>
      <CardsColor colors={colorShades} onCopy={handleCopyColor} />
    </>
  );
}

export default App;

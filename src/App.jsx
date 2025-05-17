import { useState, useEffect } from "react";
import "./styles/App.css";
import CardsColor from "./components/CardColors.jsx";
import { syncColorPicker } from "./scripts/Colores.js";
import { generateColorShades } from "./scripts/ToneGenerator.js";
import { getRandomHexColor, handleColorChange } from "./scripts/App.js";
// import { handleExportPalette } from "./scripts/Export.js";

function App() {
  const [colorShades, setColorShades] = useState([]);
  const [hexValue, setHexValue] = useState("");
  const [showToast, setShowToast] = useState(false);

  function handleExportPalette() {
    const dataStr = JSON.stringify(colorShades, null, 2); // Convierte el array a texto JSON bonito
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "paleta_colores.json"; // Nombre del archivo
    link.click();

    URL.revokeObjectURL(url); // Limpieza
  }

  function generateRandomColor() {
    const randomColor = getRandomHexColor();
    setHexValue(randomColor);
    const shades = generateColorShades(randomColor);
    setColorShades(shades);
  }

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
            <button className="InputButton" onClick={generateRandomColor}>
              Generar Color
            </button>
          </div>
        </div>
        <div className="InputTitle">
          <h2>Paleta de Colores</h2>
          <p className="exportPalette" onClick={handleExportPalette}>
            Exportar
          </p>
        </div>
      </div>
      <CardsColor colors={colorShades} onCopy={handleCopyColor} />
    </>
  );
}

export default App;

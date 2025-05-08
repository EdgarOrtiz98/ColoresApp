import { useState } from "react";
import "./styles/App.css";
import CardsColor from "./components/CardColors.jsx";

function App() {
  return (
    <>
      <div className="Container">
        <h1>ColoresApp</h1>
        <div className="InputHexa">
          <div className="InputTitle">
            <h2>Agregar Color</h2>
            <p>HEX</p>
          </div>
          <div className="InputSearch">
            <div className="InputGroup">
              <input type="color" className="colorPicker" />
              <input
                type="text"
                className="textInput"
                placeholder="Codigo Hexadecimal"
                maxLength="7"
                pattern="^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$"
                title="El código hexadecimal debe comenzar con '#' y contener 3 o 6 dígitos hexadecimales."
                required
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
      <CardsColor />
    </>
  );
}

export default App;

export function getRandomHexColor() {
  const randomColor =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
  return randomColor;
}

export function handleColorChange(e) {
  const selectedColor = e.target.value;
  setHexValue(selectedColor);
  const shades = generateColorShades(selectedColor);
  setColorShades(shades);
}

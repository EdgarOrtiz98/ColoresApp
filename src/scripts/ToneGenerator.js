export function generateColorShades(baseColor) {
  const shades = [];
  for (let i = 1; i <= 9; i++) {
    const factor = i * 0.1;
    shades.push(shadeColor(baseColor, 1 - factor));
  }
  return shades;
}

function shadeColor(color, factor) {
  const r = Math.round(parseInt(color.substring(1, 3), 16) * factor);
  const g = Math.round(parseInt(color.substring(3, 5), 16) * factor);
  const b = Math.round(parseInt(color.substring(5, 7), 16) * factor);
  return `#${[r, g, b]
    .map((c) => c.toString(16).padStart(2, "0"))
    .join("")}`;
}

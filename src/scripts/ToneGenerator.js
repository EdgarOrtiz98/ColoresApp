export function generateColorShades(baseColor) {
  const shades = [];
  const scaleSteps = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const baseIndex = 4;

  for (let i = 0; i < scaleSteps.length; i++) {
    const diff =baseIndex - i;
    const factor = diff * 0.15;

    const newColor = interpolateColor(baseColor, factor);
    shades.push(newColor);
  }

  return shades;
}

function interpolateColor(hex, factor) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  let newR, newG, newB;

  if (factor < 0) {
    // oscurecer hacia negro
    newR = r * (1 + factor);
    newG = g * (1 + factor);
    newB = b * (1 + factor);
  } else {
    // aclarar hacia blanco
    newR = r + (255 - r) * factor;
    newG = g + (255 - g) * factor;
    newB = b + (255 - b) * factor;
  }

  return (
    "#" +
    [newR, newG, newB]
      .map((c) => Math.round(c).toString(16).padStart(2, "0"))
      .join("")
  );
}

export function syncColorPicker() {
  const colorPicker = document.getElementById("colorPicker");
  const hexOutput = document.getElementById("hexOutput");

  if (colorPicker && hexOutput) {
    // Color Picker → Hex input
    colorPicker.addEventListener("input", () => {
      hexOutput.value = colorPicker.value.toUpperCase();
    });

    // Hex input → Color Picker
    hexOutput.addEventListener("input", () => {
      const hex = hexOutput.value;
      const isValidHex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
      if (isValidHex) {
        colorPicker.value = hex;
      }
    });
  }
}

export function handleExportPalette() {
  const dataStr = JSON.stringify(colorShades, null, 2); // Convierte el array a texto JSON bonito
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "paleta_colores.json"; // Nombre del archivo
  link.click();

  URL.revokeObjectURL(url); // Limpieza
}

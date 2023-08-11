export function getRandomColor() {
  const blue = Math.floor(Math.random() * 256);
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  const color = `rgb(${red},${green},${blue})`;

  return color;
}

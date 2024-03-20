export const colors = {
  "Map": "#134999",
  "Postcard": "#8c6383",
  "Print": "#3f3f3f",
  "Magazine": "#4f4f4f",
  "Poster": "#404f33",
  "Pamphlet": "#182f5b",
  "Business Card": "#004419",
  "Sticker": "#a82f41",
  "Ticket": "#cc5f30",
  "Book": "#81bdf9",
  "Bracelet": "#03040c"
}

export function parametricEquation(cx, cy, r, a) {
  const degreesToRadians = deg => (deg * Math.PI) / 180.0;
  const x = cx + r * Math.cos(degreesToRadians(a))
  const y = cy + r * Math.sin(degreesToRadians(a))
  return [x, y]
}
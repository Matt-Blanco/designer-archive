export const colors = {
  "Map": "#2d36bc",
  "Postcard": "#7eb0d5",
  "Print": "#b33dc6",
  "Magazine": "#27aeef",
  "Poster": "#87bc45",
  "Pamphlet": "#bdcf32",
  "Business Card": "#ffa300",
  "Sticker": "#ea5545",
  "Ticket": "#b2e061",
  "Book": "#f46a9b",
  "Bracelet": "#00bfa0"
}

export function parametricEquation(cx, cy, r, a) {
  const degreesToRadians = deg => (deg * Math.PI) / 180.0;
  const x = cx + r * Math.cos(degreesToRadians(a))
  const y = cy + r * Math.sin(degreesToRadians(a))
  return [x, y]
}

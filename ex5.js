// filter

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "away",
  "silent",
  "generate",
  "stunning",
  "complete",
];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

console.log(words.filter((word) => word.startsWith("e"))); // TODO [ 'elite', 'exuberant']

// Usa el método filter para filtrar las palabras que empiezan por vocal
// BONUS: Usa una expresión regular!

console.log(words.filter()); // TODO [ 'elite', 'exuberant', 'away']

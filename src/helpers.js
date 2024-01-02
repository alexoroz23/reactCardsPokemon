import { v4 as uuid } from "uuid";

/* Select a random element from an array of values. */
function choice(values) {
  // Generate a random index within the length of the array.
  const randIdx = Math.floor(Math.random() * values.length);
  // Return the randomly selected element.
  return values[randIdx];
}

/* Format response data from the Deck of Cards API,
 * extracting just the image URL and assigning a unique identifier using UUID. */
function formatCard(data) {
  return {
    // Extract the image URL from the API response.
    image: data.cards[0].image,
    // Generate a unique identifier using UUID (Universally Unique Identifier).
    id: uuid()
  };
}

/* Format response data from the Pokemon API,
 * extracting the front image, back image,
 * and an array of relevant stat information. Assign a unique identifier using UUID. */
function formatPokemon(data) {
  return {
    // Generate a unique identifier using UUID.
    id: uuid(),
    // Front and back images of the Pokemon.
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    // Name of the Pokemon.
    name: data.name,
    // Array of relevant stat information.
    stats: data.stats.map(stat => ({
      // Numeric value of the stat.
      value: stat.base_stat,
      // Name of the stat.
      name: stat.stat.name
    }))
  };
}

export { choice, formatCard, formatPokemon };

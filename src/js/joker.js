import joker from "give-me-a-joke";

export function dadJoke() {
  return new Promise(function (resolve, reject) {
    try {
      joker.getRandomDadJoke(function (joke) {
        resolve(joke);
      });
    } catch (error) {
      // Intentionally defining 'reject' for future use
      reject(error);
    }
  });
}


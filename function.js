// function logItems(array) {
//   let log = "";
//   for (let i = 0; i < array.length; i++) {
//     log += `${i + 1}-${array[i]}`;
//   }
//   return log;
// }
// console.log(logItems(["Mango", "Poly", "Ajax"]));

// function calculateEngravingPrice(
//   message,
//   pricePerWord
// ) {
//   const words = message.trim().split("");
//   return words.length * pricePerWord;
// }
// console.log(calculateEngravingPrice("hello", 4));

function findLongestWord(string) {
  const words = string.trim().split("");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.log(findLongestWord("Hello i word i IT"));

function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + "...";
}

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return (
    lowerCaseMessage.includes("spam") ||
    lowerCaseMessage.includes("sale")
  );
}

// const numbers = [];
// let input;

// do {
//   input = prompt("Введіть число:");

//   if (input === null) break;

//   const number = Number(input);
//   if (isNaN(number)) {
//     alert(
//       "Було введено не число, попробуйте ще раз"
//     );
//     continue;
//   }

//   numbers.push(number);
// } while (true);

// if (numbers.length > 0) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   console.log(
//     `Загальна сума чисел дорівнює ${total}`
//   );
// }

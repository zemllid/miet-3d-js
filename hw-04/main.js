//Задание 1
const originalArray = [1, 2, 3, 4, 5, 6];
const evenArray = originalArray.filter((number) => {
  return number % 2 == 0;
});
console.log(evenArray);

//Задание 2
const decreasingArray = (n) => {
  if (n < 1 || !Number.isInteger(n)) {
    console.log("Ошибка");
  } else
    while (n > 0) {
      console.log(n);
      n--;
    }
};
decreasingArray(5);

//Задание 3
const frogDay = ["Сегодня", "не", "среда", "мои", "чуваки"];
const lengths = frogDay.map((word) => {
  return word.length;
});
console.log(lengths);

//Задание 4
const games = [
  "Outer wilds",
  "Hollow knight",
  "Hyper light drifter",
  "Делать диплом",
];
function whatToDo(arr) {
  arr.forEach((game, i) => {
    console.log(`${i + 1}. ${game}`);
  });
}
console.log("Во что поиграть?");
whatToDo(games);

//Задание 5
function filterGreaterThan(arr, n) {
  return arr.filter((number) => number > n);
}
console.log(filterGreaterThan([10, 20, 30, 40, 50], 25));

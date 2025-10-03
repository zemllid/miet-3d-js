//Задание 1
let adminName, userName;
userName = "Габбро";
adminName = userName;
alert(adminName);

//Задание 2
let planetName, currentUserName;
let timeloopNumber, shipState;

//Задание 3
const product = {
  name: "фонарик",
  price: 12,
};
product.category = "источник света";
product.price = 10000;
console.log(product);

//Задание 4
const student = {
  name: "Рибек",
  age: 20,
  courses: ["Космосоплавание", "Археология", "История Номаи"],
  address: {
    city: "Камелёк",
    street: "Водопадная",
    number: 3,
  },
};
student.courses[3] = "JavaScript";
student.address.city = "Пустотная сфера";
student.courses.splice(0, 1);
student.grades = {
  Археология: 4,
  "История Номаи": 5,
  JavaScript: 3,
};

console.log(`Информация о студенте программы Покорителей дикого космоса:`);
console.log(`Имя: ${student.name}`);
console.log(`Возраст: ${student.age}`);
console.log(`Город: ${student.address.city}`);
console.log(
  `Адрес: ${student.address.street} ул., д.${student.address.number}`
);
console.log(
  `Изучаемые курсы: ${student.courses[0]}, ${student.courses[1]}, ${student.courses[2]}`
);
console.log(
  `Оценки по курсам: { Археология: ${student.grades.Археология}, История Номаи: ${student.grades["История Номаи"]}, JavaScript: ${student.grades.JavaScript} }`
);

//Задание 6
function greet(name) {
  console.log("Привет, " + name + "!");
}

function sum(a, b) {
  return a + b;
}

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function calculateArea(width, height) {
  return width * height;
}

greet("Шпат");
console.log(sum(5, 3));
console.log(isEven(4));
console.log(calculateArea(5, 10));

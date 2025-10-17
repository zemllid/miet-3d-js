//Задание 1
const car = {
  brand: "Марка №1",
  model: "Лучшая",
  year: 2222,
  getDescription() {
    console.log(`${this.brand} ${this.model}, выпущен в ${this.year} году.`);
  },
};
car.getDescription();

//Задание 2.1
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} была написана ${this.author} в ${this.year} году`;
  }

  static compareAge(book1, book2) {
    if (book1.year < book2.year) {
      return `${book1.title} была издана раньше, чем ${book2.title}`;
    } else if (book1.year > book2.year) {
      return `${book2.title} была издана раньше, чем ${book1.title}`;
    } else {
      return `${book1.title} и ${book2.title} изданы в одном году`;
    }
  }
}
const book1 = new Book("Война и мир", "Лев Толстой", 1869);
console.log(book1.getSummary());

//Задание 2.2
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
  getSummary() {
    return `${this.title} было написано ${this.author} в ${this.year} году, ${this.month}`;
  }
}
const mag1 = new Magazine(
  "National Geographic",
  "National Geographic Society",
  1888,
  "Июль"
);
console.log(mag1.getSummary());

//Задание 2.3

const book2 = new Book("Анна Каренина", "Лев Толстой", 1877);
console.log(Book.compareAge(book1, book2));

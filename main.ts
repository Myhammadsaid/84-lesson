console.log("TypeScript");

/*
let add: (a: number, b: number) => number = (a: number, b: number): number =>
  a + b;
console.log(add(10, 20));
*/

// ============== encapsulation =====================

/*
class User {
  public name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  since() {
    let year = new Date().getFullYear() - this.age;
    return year;
  }
}

let user: User = new User("Behruz", 2009);

console.log(
  `I am ${user.name} and I am ${
    user.age
  } years old. I am ${user.since()} years old.`
);
*/

/*
class Car {
  public name: string;
  readonly brand: string;
  price: number;
  constructor(name: string, brand: string, price: number) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  }

  since() {
    let price = `My car is ${this.name.toUpperCase()} brand ${
      this.brand
    } and its price is ${this.price}$`;
    return price;
  }
}

let car: Car = new Car("B680", "Tayota", 1000);

console.log(car.since());
*/

/*
class Animal {
  private sheep: string;
  public monkey: string;
  protected goat: string;
  constructor(sheep: string, monkey: string, goat: string) {
    this.sheep = sheep;
    this.monkey = monkey;
    this.goat = goat;
  }

  eat() {
    let animal = `${this.sheep} and ${this.monkey} and ${this.goat}`;
    return animal;
  }
}

let animal: Animal = new Animal("sheep", "monkey", "goat");

console.log(animal.eat());
*/

/*
class smartphones {
  iphone: string;
  samsung: string;
  iphoneram: string;
  samsungram: string;
  constructor(
    iphone: string,
    samsung: string,
    iphoneram: string,
    samsungram: string
  ) {
    this.iphone = iphone;
    this.samsung = samsung;
    this.iphoneram = iphoneram;
    this.samsungram = samsungram;
  }
  lower() {
    let lower = `The ${this.iphone.toUpperCase()} has ${this.iphoneram.toLowerCase()} RAM or the ${this.samsung.toUpperCase()} has ${this.samsungram.toLowerCase()} RAM`;
    return lower;
  }
}

let phones: smartphones = new smartphones("Iphone", "Samsung", "8GB", "16GB");
console.log(phones.lower());
*/

/*
class noutboock {
  prosesor: string;
  ram: string;
  constructor(prosesor: string, ram: string) {
    this.prosesor = prosesor;
    this.ram = ram;
  }
  lower() {
    let lower = `this prosesor ${this.prosesor} and this ram ${this.ram}`;
    return lower;
  }
}

let noutboock2: noutboock = new noutboock("Intel Core i5", "8GB");
console.log(noutboock2.lower());
*/

// ============== inheritance =====================

/*
class Student extends User {
  group: string;
  constructor(name: string, age: number, group: string) {
    super(name, age);
    this.group = group;
  }
  lower() {
    let lower = `name is ${this.name.toLowerCase()}`;
    return lower;
  }
}

let behruz: Student = new Student("Behruz", 2009, "N50");

console.log(
  `My ${behruz.lower()}. I am ${behruz.since()} years old. My group ${
    behruz.group
  }`
);
*/

/*
class Rating extends Car {
  readonly rating: number;
  constructor(name: string, brand: string, price: number, rating: number) {
    super(name, brand, price);
    this.rating = rating;
  }
  upper() {
    let upper = `My car is ${this.name.toUpperCase()} brand ${
      this.brand
    } and its price is ${this.price}$ rating ${this.rating}`;
    return upper;
  }
}

let CarRating: Rating = new Rating("cls500", "Mercedes Benz", 15000, 10);

console.log(CarRating.upper());
*/

/*
class kong extends Animal {
  public kong: string;
  constructor(sheep: string, monkey: string, goat: string, kong: string) {
    super(sheep, monkey, goat);
    this.kong = kong;
  }

  truthey() {
    let truth = `${
      this.kong.includes("k")
        ? `New animal ${this.kong.toUpperCase()} Animals: ${this.eat().toUpperCase()}`
        : `Animals: ${this.eat()}`
    }`;
    return truth;
  }
}

let animals: kong = new kong("sheep", "monkey", "goat", "kong");

console.log(animals.truthey());
*/

/*
class rating extends smartphones {
  readonly rating1: number;
  public rating2: number;
  constructor(
    iphone: string,
    samsung: string,
    rating1: number,
    rating2: number
  ) {
    super(iphone, samsung);
    this.rating1 = rating1;
    this.rating2 = rating2;
  }
  ratings() {
    let ratings = `${this.iphone.toUpperCase()} rating ${
      this.rating1
    } or ${this.samsung.toUpperCase()} rating ${this.rating2}`;
    return ratings;
  }
}

let phones1: rating = new rating("Iphone", "Samsung", 10, 9);
console.log(phones1.ratings());
*/

/*
class upgrade extends noutboock {
  public upgrade: string;
  constructor(prosesor: string, ram: string, upgrade: string) {
    super(prosesor, ram);
    this.upgrade = upgrade;
  }
  up() {
    let up = `${this.prosesor.toUpperCase()} and ${this.ram.toUpperCase()} and Upgrade ram ${this.upgrade.toUpperCase()}`;
    return up;
  }
}

let upgrade1: upgrade = new upgrade("Intel Core i5", "8GB", "16GB");
console.log(upgrade1.up());
*/

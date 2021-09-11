abstract class Animal {
  abstract makeSound(): string;
  abstract eatFood(): string;
}

class Cat extends Animal {
  makeSound() {
    return "meow";
  }

  eatFood() {
    return "tuna";
  }
}

class Dog extends Animal {
  makeSound() {
    return "woof";
  }

  eatFood() {
    return "chicken";
  }
}

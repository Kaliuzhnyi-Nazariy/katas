class Dinglemouse {
  constructor() {
    this.name = this.age = this.sex = 0;
  }
  sentence = ["Hello."];

  setAge(age) {
    const index = this.sentence.findIndex(
      (sent) => sent == `I am ${this.age}.`
    );
    if (index != -1) {
      this.sentence.splice(index, 1, `I am ${age}.`);
    } else {
      this.sentence.push(`I am ${age}.`);
    }

    this.age = age;
    return this;
  }

  setSex(sex) {
    const index = this.sentence.findIndex(
      (sent) => sent == `I am male.` || sent == "I am female."
    );
    if (index != -1) {
      this.sentence.splice(index, 1, `I am ${sex == "M" ? "male" : "female"}.`);
    } else {
      this.sentence.push(`I am ${sex == "M" ? "male" : "female"}.`);
    }

    this.sex = sex;
    return this;
  }

  setName(name) {
    const index = this.sentence.findIndex(
      (sent) => sent == `My name is ${this.name}.`
    );
    if (index != -1) {
      this.sentence.splice(index, 1, `My name is ${name}.`);
    } else {
      this.sentence.push(`My name is ${name}.`);
    }

    this.name = name;
    return this;
  }

  hello() {
    return this.sentence.join(" ");
  }
}

let dm = new Dinglemouse().setAge(18).setSex("M").setName("Bob").setSex("M");

console.log(dm.hello());

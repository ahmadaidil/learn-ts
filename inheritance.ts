class Human {
  sex: string;
  constructor(sex: string) {
    this.sex = sex;
  }
  identify(): string {
    return `My sex is ${this.sex}`;
  }
}

class Woman extends Human {
  constructor(sex: string = 'woman') {
    super(sex);
  }
  cooking(): string {
    return 'woman is cooking ...';
  }
}

class Man extends Human {
  constructor(sex: string = 'man') {
    super(sex);
  }
  playing(): string {
    return 'man is playing ...';
  }
}

const woman = new Woman();
const man = new Man();

console.log(woman.identify());
console.log(man.identify());
console.log(woman.cooking());
console.log(man.playing());

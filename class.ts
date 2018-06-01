class Word {
  word: string;
  constructor(word: string) {
    this.word = word;
  }
  getWord(): string {
    return this.word;
  }
}

const words = new Word('Hello World !');
console.log(words.getWord());

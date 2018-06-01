type NumbOrArrNumb = number | number[];

const showNumber = (numb: NumbOrArrNumb) : void => {
  if (typeof numb === 'number') console.log(numb);
  else console.log(numb.join(', '));
};

const number: number = 4;
const arrNumber: number[] = [1, 2, 3, 4];

showNumber(number);
showNumber(arrNumber);

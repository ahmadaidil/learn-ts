interface Data {
  message: string;
  no: number;
}

const showData = (data: Data) : void => {
  console.log(`Msg No ${data.no}, ${data.message}`);
};

showData({ message: 'Pee ka bo!', no: 666 });

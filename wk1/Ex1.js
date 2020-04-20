const greetText = "Hi there ";
let gretter = (myArray, counter) => {
  for (let index of myArray) {
    console.log(greetText + index);
  }
};
gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);

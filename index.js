function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage:
  countDown(10);

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names)
{
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]} for the wonderful birthday gift!`);
  }

  return names;
}

writeCards(names);

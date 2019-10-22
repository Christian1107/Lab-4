let name = "Christian Christian";
let age = 17;
let birthDay = "November 7";
let detroitGC = true;
let lifeEvents = [
  "I was born in Detroit, Michigan.",
  "I went to Depsa ECE.",
  "I started learning piano when I was eight. And I started playin baseball when I was 3.",
  "I'm a student of the front-end bootcamp."
];

if (detroitGC === true) {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Detroit, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthDay +
      "."
  );
} else {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthDay +
      "."
  );
}

for (let i = 0; i < lifeEvents.length; i++) console.log(lifeEvents[i]);

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !==5`);
    counter++;
  } else {
    counter++;
    console.log(`${randomNumber} 5===5`);
    {
      break;
    }
  }
}

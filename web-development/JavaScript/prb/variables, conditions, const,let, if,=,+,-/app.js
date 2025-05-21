// 1
// Erstelle eine Variable myCity mit dem Wert "Berlin" und gib sie mit 
// console.log() aus.
let myCity = "Berlin";
console.log(myCity);

// 2
// Deklariere eine Variable weather, aber weise ihr noch keinen Wert zu. Gib sie 
// mit console.log() aus.
let weather;
console.log(weather);

// 3
// Weise weather den Wert "sunny" zu und gib sie erneut aus.
weather = "sunny";
console.log(weather);

// 4
// Erstelle eine Konstante planet mit dem Wert "Earth" und gib sie aus.
const planet = "Earth";
console.log(planet);

// 5
// Versuche, planet auf "Mars" zu ändern. Was passiert?
/*planet = "Mars";
console.log(planet);
*/

// 6
// Erstelle zwei Variablen numberOne = 10 und numberTwo = 5, gib ihre Summe mit 
// console.log() aus.
let numberOne = 10;
let numberTwo = 5;
console.log(numberOne + numberTwo);

// 7
// Erstelle isRaining = true und gib den Wert mit console.log() aus.
let isRaining = true;
console.log(isRaining);

// 8
// Erstelle temperature = 15. Wenn temperature > 20, gib "Warm" aus, sonst "Cold".
let temperature = 15;
if (temperature > 20) {
  console.log("Warm");
} else {
  console.log("Cold");
}

// 9
// Erstelle age = 21. Wenn age >= 18, gib "You can vote" aus, sonst "You are too 
// young to vote".
let age = 21;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You are too young to vote");
}

// 10
// Erstelle name = "Lina". Wenn name === "Lina", gib "Welcome, Lina" aus.
let name = "Lina";
if (name === "Lina") {
  console.log("Welcome, Lina");
} else {
  console.log("Hello");
}

// 11
// Erstelle price = "1200" (als String) und gib sie aus.
let price = "1200";
console.log(price);

// 12
// Erstelle score = 85. Gib "A", "B" oder "C" aus, je nach Höhe des Werts.
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// 13
// Erstelle language = "JavaScript". Wenn language !== "Python", gib "I prefer 
// something else" aus.
let language = "JavaScript";
if (language !== "Python") {
  console.log("I prefer something else");
}

// 14
// Erstelle myVar = null und gib sie aus.
let myVar = null;
console.log(myVar);

// 15
// Erstelle isSunny = false. Wenn true, gib "Go outside" aus, sonst "Stay inside".
let isSunny = false;
if (isSunny == true) {
  console.log("Go outside");
} else {
  console.log("Stay inside");
}

// 16
// Erstelle bigNumber = 123456789123456789n und gib sie aus.
let bigNumber = 123456789123456789n;
console.log(bigNumber);

// 17
// Erstelle a = 7, b = "7". Vergleiche mit == und ===, gib "loose" oder "strict" 
// aus.
let a = 7;
let b = "7";
if (a == b) {
  console.log("loose");
}
if (a === b) {
  console.log("strict");
}

// 18
// Erstelle color = "blue". Gib "Stop", "Go" oder "Wait" abhängig vom Wert aus.
let color = "blue";
if (color == "red") {
  console.log("Stop");
} else if (color == "green") {
  console.log("Go");
} else {
  console.log("Wait");
}

// 19
// Erstelle userAge = 3 und gib je nach Alter eine passende Nachricht aus (mehrere 
// else if).
let userAge = 3;
if (userAge > 90) {
  console.log("Very very Old");
} else if (userAge > 70) {
  console.log("Old");
} else if (userAge > 50) {
  console.log("I´m catching up your age soon");
} else if (userAge > 25) {
  console.log("You have golden years");
} else if (userAge > 18) {
  console.log("Party");
} else if (userAge > 3) {
  console.log("You are Child");
} else {
  console.log("Ga ga gu!!");
}

// 20
// Deklariere const laptop = "Sony" und versuche, laptop = "Lenovo" zu machen.
/*const laptop = "Sony";
laptop = "Lenovo";
*/

// 21
// Erstelle undefinedVar, weise keinen Wert zu, gib sie aus.
let undefinedVar;
console.log(undefinedVar);

// 22
// Erstelle emptyBox = null und gib sie aus.
let emptyBox = null;
console.log(emptyBox);

// 23
// Erstelle person = "Maryna" und age = 90. Wenn age === 90, gib "You are the same 
// age as my Grandma" aus. Wenn zusätzlich person === "Maryna", gib "Are you my 
// Grandma?" aus. Nutze verschachtelte if-Blöcke.
const person = "Maryna";
let age2 = 90;
if (age2 === 90) {
  console.log("You are the same age as my Grandma");
  if (person === "Maryna") {
    console.log("Are you my Grandma?");
  }
}

// 24
// Erstelle nr = 50. Gib sie aus, multipliziere mit 3 und gib den neuen Wert aus.
let nr = 50;
console.log(nr);
nr = nr * 3;
console.log(nr);

// 25
// Erstelle myCar = "Ferrari" und firstName = "Marcel". Gib beides in einem 
// console.log() aus.
let myCar = "Ferrari";
let firstName = "Marcel";
console.log(`${firstName} ${myCar}`);

// 26
// Erstelle isMale = false, gib sie aus. Weise true zu und gib sie erneut aus.
let isMale = false;
console.log(isMale);
isMale = true;
console.log(isMale);

// 27
// Erstelle isHappy = true. Wenn true, gib "🙂" aus, sonst "🙁".
let isHappy = true;
if (isHappy) {
  console.log("🙂");
} else {
  console.log("🙁");
}

// 28
// Erstelle food = "Pizza". Gib "Yummy Burger", "Yummy Pizza" oder "I'm hungry" 
// abhängig vom Wert aus.
let food = "Pizza";
if (food == "Burger") {
  console.log("Yummy Burger");
} else if (food == "Pizza") {
  console.log("Yummy Pizza");
} else {
  console.log("I´m hungry");
}

// 29
// Erstelle firstName = "Andrea". Ersetze den Wert durch "Lina" und gib beide 
// Werte mit console.log() aus.
let firstName2 = "Andrea";
console.log(firstName2);
firstName2 = "Lina";
console.log(firstName2);

// 30
// Erstelle eine Variable color, gib ihr "Orange" als Wert. Weise danach "Red" zu 
// und gib beides mit console.log() aus.
let color2 = "Orange";
console.log(color2);
color2 = "Red";
console.log(color2);

// 31
// Erstelle myNumber = 77. Gib den Wert aus, dann ersetze ihn durch 100, dann 
// durch 2 * 90, dann durch myNumber + 5. Gib alle Zwischenwerte mit console.log() 
// aus.
let myNumber = 77;
console.log(myNumber);
myNumber = 100;
console.log(myNumber);
myNumber = 2 * 90;
console.log(myNumber);
myNumber = myNumber + 5;
console.log(myNumber);

// 32
// Erstelle country = "Germany", ersetze sie mit "Spain", gib beide Werte aus.
let country = "Germany";
console.log(country);
country = "Spain";
console.log(country);

// 33
// Versuche, eine Konstante const myCity; ohne Zuweisung zu deklarieren. Was 
// passiert?
/*const myCity2;
console.log(myCity2);
*/

// 34
// Erstelle eine Variable bool = true und gib sie mit console.log() aus.
let bool2 = true;
console.log(bool2);

// 35
// Erstelle isMale = false und gib den Wert aus.
let isMale1 = false;
console.log(isMale1);

// 36
// Schreibe ein if (true) mit einer Ausgabe deiner Wahl und ein if (false) mit 
// einer anderen. Erkläre dir selbst, welches läuft.
let lernenNervt = true;
let binDumm = false;
if (lernenNervt) {
    console.log("Davon werd ich besser!");
} else {
    console.log("Auf keinen Fall!");
};

if (false) {
    console.log("Das wird nicht angezeigt.");
};

// 37
// Schreibe if (1 === 1) und if (1 === 5) mit passenden Ausgaben.
let eins = 5;
if (eins === 1) {
    console.log("Ist das eine eins?");
} else if (eins === 5) {
    console.log("Wenn die eins eine 5 ist...");
};

// 38
// Schreibe if (7 == "7") und if (2 === "2") mit passenden Ausgaben.
let sieben = "7";
let zwei = "2";
if (sieben == "7") {
    console.log("Sieben ist ein String");
};

if (zwei === "2") {
    console.log("Zwei ist gleich `2`");
} else {
    console.log("Zwei ist nicht gleich `2`");
};

// 39
// Schreibe if (30 >= 30) und if (12 <= 7) mit passenden Ausgaben.
let c = 35;
let d = 16;
if (c >= 30) {
    console.log("Was passiert hier?");
};

if (d <= 7) {
    console.log("Kleiner oder gleich");
};

// 40
// Erstelle let age = 41, ersetze es mit 16. Verwende dann if (age > 18) für 
// "You can drink Beer", sonst "You Cannot drink Beer".
let age1 = 41;
age1 = 16;
if (age1 >= 18) {
    console.log("You can drink Beer");
} else {
    console.log("You Cannot drink Beer");
};

// 41
// Erstelle let str = "Hello" und gib sie aus.
let str = "Hello";
console.log(str);

// 42
// Erstelle let nr = 50 und gib sie aus.
let nr3 = 50;
console.log(nr3);

// 43
// Erstelle ein Array mit drei Lieblingsfarben und gib das gesamte Array mit 
// console.log() aus.
let arr = ["Orange", "Braun", "Schwarz"];
console.log(arr);

// 44
// Erstelle ein Objekt person mit den Eigenschaften name, age und city, gib es aus.
let person5 = {
    name: "lina",
    age: 23,
    city: "Berlin",
};
console.log(person5);

// 45
// Verwende console.log() mit einem Emoji deiner Wahl.
let emoji = "🙂";
console.log(emoji);

// 46
// Schreibe einen Kommentar mit // und einen Mehrzeiler mit /* ... */.
// Das ist Aufgabe 46
/* Ich weiss gar nicht was ich alles über mehrere Zeilen schreiben soll, ich mag
solche Áufgaben gar nicht, LOL
*/

// 47
// Erstelle let x = 5 und let y = 3, gib die Differenz (x - y) aus.
let e = 5;
let f = 3;
console.log(e - f);

// 48
// Erstelle let myString = "JavaScript" und gib "I love JavaScript" mit 
// console.log() aus, indem du myString einbaust.
let myString3 = "JavaScript";
console.log(`I love ${myString3}`);

// 49
// Erstelle let emptyString = "". Wenn emptyString truthy ist, gib "Has content" 
// aus, sonst "Is empty".
let emptyString = "";
if (emptyString) {
    console.log("Has content");
} else {
    console.log("Is empty");
};

// 50
// Erstelle let testValue = undefined. Wenn testValue nicht definiert ist 
// (== undefined), gib "No value" aus.
let testValue = undefined;
if (testValue == undefined) {
    console.log("No value");
};
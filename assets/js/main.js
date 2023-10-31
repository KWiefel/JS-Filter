// ======================= Array-Level-1_1 ==============================

// In dieser Übung lernst du, wie du Arrays in JavaScript definieren kannst.
// Erstelle 3 Arrays mit den Namen: person, friends und favoriteFood.
// In jedes dieser Arrays kommen 3 Werte. Bei person Angaben zu deiner Person, bei friends kommen deine Freund:innen rein und bei favoriteFood deine 3 Lieblingsgerichte.
// Lasse dir jedes Array in der Konsole ausgeben.

const personArr = ["Konstantin", "Wiefel", 28];
const friendsArr = ["Tobi", "Mo", "Heiko"];
const favoriteFoodArr = ["Reis", "Eis", "Hünchen"];

console.log(personArr);
console.log(friendsArr);
console.log(favoriteFoodArr);

// ======================= Array-Level-1_2 ==============================

// Lasse Dir aus deinen vorhin erstellten arrays person, friends und favoriteFood die einzelnen Werte in der Konsole ausgeben

console.log(personArr[2]);
console.log(friendsArr[1]);
console.log(favoriteFoodArr[0]);

// ======================= Array-Level-1_3 ==============================

// Verwende die length-Methode, um zu überprüfen, wie viele Werte sich in deinen Arrays befinden.
// Lasse das Ergebnis in der Konsole ausgeben.
// Achte darauf, welches Ergebnis dir die Methode in der Konsole anzeigt.

console.log(personArr.length);
console.log(friendsArr.length);
console.log(favoriteFoodArr.length);

// ======================= Array-Level-1_4 ==============================

// Lernziel: Verstehen und Anwenden der Array-Methode push().
// Erstelle ein Array und ergänze es mit der Array-Methode push(). Mit push() kannst du einen oder mehrere Werte gleichzeitig an das Ende eines Arrays hinzufügen.
// Verwende push(), um mindestens 2 neue Werte zu deinem Array hinzuzufügen.
// Verwende console.log(), um den Inhalt und die Länge deines Arrays vor und nach dem Hinzufügen neuer Werte anzuzeigen. Beobachte die Veränderungen in der Konsole.

console.log(personArr);
console.log(personArr.length);

personArr.push(178, "Grün");

console.log(personArr);
console.log(personArr.length);

// ======================= Array-Level-1_5 ==============================

// Entferne jeweils einen Wert aus deinen arrays und lasse dir den entfernten Wert in der Konsole ausgeben. Zur besseren Darstellung haben wir uns das array nochmal vor dem pop() ausgeben lassen, dann den entfernten Wert und dann das array nochmal. Schau dir die Ergebnisvorschau an.

console.log(personArr);

const newPersonArr = personArr.pop();
console.log(newPersonArr);

const newFriendsArr = friendsArr.pop();
console.log(newFriendsArr);

const newFavoriteFoodArr = favoriteFoodArr.pop();
console.log(newFavoriteFoodArr);

// ======================= Array-Level-1_6 ==============================

// Entferne aus jedem deinem person array den ersten Wert und lasse dir diesen in der Konsole ausgeben. Auch hier haben wir zum besseren Verständnis uns das array vorher und danach in der Konsole ausgeben lassen.

console.log(personArr);

const minusPersonArr = personArr.shift();
console.log(minusPersonArr);
console.log(personArr);

// ======================= Array-Level-1_7 ==============================

// Füge deinem array friends und favoriteFood mindestens 2 Werte hinzu und lasse dir diesen in der Konsole ausgeben. Auch hier haben wir zum besseren Verständnis uns das array vorher und danach in der Konsole ausgeben lassen.

console.log(friendsArr);

friendsArr.unshift("Henni", "Sven");
console.log(friendsArr);

console.log(favoriteFoodArr);

favoriteFoodArr.unshift("Nudel", "Schocki");
console.log(favoriteFoodArr);

// ======================= Array-Level-1_9 ==============================

// Erstelle ein Array und ordne es einer Variablen zu.
// Array mit Werte: 23, 54, 75;
// Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
// Verwende die Unshift-Methode, um 5 Werte an der Vorderseite deines Arrays hinzuzufügen.
// Verwende die Pop-Methode, um 2 Werte von der Rückseite deines Arrays zu entfernen.
// Verwende die Shift-Methode, um 2 Werte von der Vorderseite deines Arrays zu entfernen.

const numArr = [23, 54, 75];
console.log(numArr);

numArr.push(1, 2, 3, 4, 5);
console.log(numArr);

numArr.unshift(1, 2, 3, 4, 5);
console.log(numArr);

numArr.pop();
numArr.pop();
console.log(numArr);

numArr.shift();
numArr.shift();
console.log(numArr);

// ======================= Filter-Level-1_8 ==============================

// Schreibe eine Funktion geradeZahlen(), wobei die elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die geraden Zahlen zeigt
// Schreibe eine Funktion ungeradeZahlen(), wobei die elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die ungeraden Zahlen zeigt
// Gib die Ergebnisse nun in der Konsole aus.

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const geradeZahlen = numberArr.filter((elt) => {
  if (elt % 2 === 0) {
    return elt;
  }
});

console.log(`gerade Zahlen: ${geradeZahlen}`);

const ungeradeZahlen = numberArr.filter((elt) => {
  if (elt % 2 !== 0) {
    return elt;
  }
});

console.log(`ungerade Zahlen: ${ungeradeZahlen}`);

// ======================= Filter-Level-1_8-2 ==============================

// Schreibe eine Funktion, die das vorgegebene Array woerter durchläuft.
// Die Funktion soll zunächst alle Zeichenketten filtern, die die 6  Zeichen oder weniger  in der Länge haben.
// Gib das Ergebnis nun in der Konsole aus.

const woerter = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];

const checkWoerter = woerter.filter((elt) => {
  if (elt.length <= 6) {
    return elt;
  }
});

console.log(checkWoerter);

// ES6 Schreibweise
const checkWoerterArrow = woerter.filter((elt) => (elt.length <= 6 ? elt : ""));
console.log(checkWoerterArrow);

// ======================= Filter-Level-1_8-4 ==============================

// Schreibe eine Funktion, die das vorgegebene Array zahlen durchläuft.
// Die Funktion soll zunächst alle Zahlen filtern, die kleiner als 20 sind.
// Gib das Ergebnis nun in der Konsole aus.

const zahlen = [12, 25, 7, 18, 30, 5];

const checkZahlen = zahlen.filter((elt) => (elt < 20 ? elt : ""));
console.log(checkZahlen);

const map = checkZahlen.map((elt) => elt * 2);
console.log(map);

// ======================= Filter-Level-1_8-3 ==============================

// In dieser Übung verwenden wir filter(), um bestimmt Elemente zu entfernen und um ein neues Array mit den verbleibenden Elementen zu erstellen.
// Ziel ist es alle “null” und “undefined”-Elemente zu entfernen.
// Schreibe die Funktion myHeros.
// Gib das Ergebnis nun in der Konsole aus.

const heroArr = [
  "Superman",
  "Batman",
  undefined,
  ,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  ,
  null,
];

console.log(heroArr);

const checkHeroArr = heroArr.filter((elt) =>
  typeof elt !== 0 || typeof elt !== undefined ? elt : ""
);
console.log(checkHeroArr);

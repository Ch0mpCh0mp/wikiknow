// 1
// Was bedeutet „falsy“ in JavaScript?
// Es wird immer nach true gefragt, und bestimmte antworten sind dann grundsätzlich 
// false während ander dann immer true sind.

// 2
// Ist der String "0" ein truthy oder ein falsy Wert? Warum?
// Es sollte ein true Wert sein, da es ein gefüllter String ist

// 3
// Was passiert, wenn du in einer if-Bedingung den Wert null prüfst?
// Es müsste false sein, das null immer false ist

// 4
// Ist 0n das Gleiche wie 0? Wie wird es in if behandelt?
// Sie werden beide als false Werte gewertet, obwohl das eine eine number und 
// das andere als big int gezählt wird

// 5
// Warum gibt if ("") false zurück?
// Weil es ein leerer Strang ist und der immer false gewertet wird

// 6
// Wird NaN als truthy oder falsy bewertet?
// Wird wie undefinded als false Wert gewertet

// 7
// Was wird im Code if (false) { ... } else { ... } ausgegeben?
// Da das was in der Klammer auf truth getestet wird, sollte es true raus kommen
// ❌ Hier hast du dich vertan.
// Du schreibst: „es sollte true rauskommen“.
// Aber: false ist falsy, also wird nicht der if-Block, sondern der else-Block 
// ausgeführt.

// 8
// Wie unterscheidet sich ein leerer String "" von einem String mit Inhalt " "?
// Eins ist ein leerer Strang und deswegen false, das andere deswegen true

// 9
// Ist undefined truthy oder falsy?
// false

// 10
// Was ist der Unterschied zwischen 0 und "0" in Bezug auf truthy/falsy?
// Alle zahlen ausser 0 oder -0 sind false und das andere als gefüllter String 
// also true gewertet

// 🧠 JavaScript – BigInt Fragen & Antworten

// 1
//  Warum ist `BigInt` eingeführt worden?
// Um **große Ganzzahlen** sicher darstellen und berechnen zu können, die über das
// Limit normaler JavaScript-Zahlen hinausgehen.

// Erklärung:
// Der `Number`-Typ in JavaScript basiert auf 64-bit Gleitkommazahlen (IEEE 754) 
// und kann nur bis zu einer gewissen Größe exakt rechnen. Danach verliert man 
// Präzision. `BigInt` ermöglicht es, extrem große Ganzzahlen ohne 
// Genauigkeitsverlust zu verwenden.



// 2
//  Was ist die größte sichere Ganzzahl bei normalen Zahlen (`Number`)?
// `Number.MAX_SAFE_INTEGER` = **9007199254740991**

// Erklärung:
// Diese Zahl ist die größte Ganzzahl, bei der JavaScript garantieren kann, dass 
// Rechenoperationen korrekt sind. Darüber hinaus können Rechenergebnisse ungenau 
// werden.

// 3 
// Was passiert, wenn du über `Number.MAX_SAFE_INTEGER` hinaus rechnest?
// Es kann zu **ungenauen oder falschen Ergebnissen** kommen.

// Beispiel:
// js
// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // ❌ auch 9007199254740992 (falsch!)

// ✅ JavaScript – Truthy & Falsy: Fragen 4–10 mit Antworten & Erklärungen

// 4 
// Ist `0n` das Gleiche wie `0`? Wie wird es in `if` behandelt?
// Sie sind **nicht identisch**, aber verhalten sich im `if`-Statement gleich.

// Erklärung: 
// - `0` ist ein **Number**
// - `0n` ist ein **BigInt**
// Beide sind **falsy** in logischen Bedingungen:

// js
//if (0)   → false
// if (0n)  → false

// ✅ JavaScript – Truthy & Falsy: Fragen 5–10 mit Antworten & Erklärungen

// 5 
// Warum gibt `if ("")` false zurück?
// Weil `""` ein leerer String ist und in JavaScript als falsy gilt.

// Erklärung:
// Ein leerer String enthält keine Zeichen. In logischen Prüfungen wie `if ("")` 
// wird er automatisch in `false` umgewandelt. Deshalb wird der Code im `if`-Block 
// übersprungen.

// js
// if ("") {
//   console.log("Das wird nicht ausgeführt");
// }

// 6 
// Wird `NaN` als truthy oder falsy bewertet?
// Falsy

// Erklärung:
// `NaN` steht für "Not a Number" und ist einer der fest definierten 
// **falsy Werte** in JavaScript. Wenn du `NaN` in einer Bedingung verwendest, 
// z. B. in `if (NaN)`, wird der Ausdruck als `false` behandelt, also wird der `
// else`-Block ausgeführt.

// 7 
// Was wird im Code `if (false) { ... } else { ... }` ausgegeben?
// Der `else`-Block wird ausgeführt.

// Erklärung:
// Da `false` ein **falsy** Wert ist, wird der `if`-Block **übersprungen**. 
// JavaScript führt stattdessen den `else`-Block aus.

// js
// if (false) {
//   console.log("Das läuft nicht");
// } else {
//   console.log("Das läuft"); // ✅ Das wird ausgeführt
// }

// 8
//  Wie unterscheidet sich ein leerer String `""` von einem String mit Inhalt `" "`?
// `""` ist falsy, `" "` ist truthy.

// Erklärung:
// Ein leerer String (`""`) enthält **gar kein Zeichen** und wird deshalb als 
// **falsy** gewertet.  
// Ein String mit einem Leerzeichen (`" "`) enthält **ein sichtbares Zeichen (ein 
// Space)** – deshalb gilt er als **truthy**.

// js
// if ("") {
//   console.log("fällt aus"); // wird nicht ausgeführt
// }

// if (" ") {
//   console.log("wird ausgeführt"); // ✅ truthy
// }

// 9
// Ist `undefined` truthy oder falsy?
// Falsy

// Erklärung:
// `undefined` bedeutet, dass einer Variablen **kein Wert zugewiesen** wurde. In 
// logischen Ausdrücken wie `if (undefined)` wird `undefined` als **false** 
// behandelt.

// js
// let a;

// if (a) {
//   console.log("truthy");
// } else {
//   console.log("falsy"); // ✅ Das wird ausgeführt
// }

// 10 
// Was ist der Unterschied zwischen `0` und `"0"` in Bezug auf truthy/falsy?
// `0` ist falsy, `"0"` ist truthy.

// Erklärung:
// - `0` ist eine **Zahl**, und die Zahl **null** gilt in JavaScript als **falsy**.
// - `"0"` ist ein **nicht-leerer String** (enthält das Zeichen `"0"`), also wird er als **truthy** bewertet – auch wenn er wie eine Null aussieht.

// js
// if (0) {
//   console.log("wird nicht ausgeführt"); // falsy
// }

// if ("0") {
//   console.log("wird ausgeführt"); // ✅ truthy
// }

/* --------------------------------------------------------------------------- */

// 🧠 JavaScript – Übungsfragen: String → Number Umwandlung

// Thema: `Number()`, `parseInt()`, `+`

// Beantworte die folgenden Fragen **ohne eine Konsole oder Lösungshilfe**.
// Überlege dir, wie sich JavaScript intern bei der Typumwandlung verhält.

// 1 
// Was gibt `Number("42")` zurück?
// 42

// 2 
// Was passiert bei `parseInt("123abc")`?
// 123

// 3 
// Welcher Wert ergibt sich aus `Number("123abc")`?
// nan

// 4 
// Warum ergibt `Number("")` den Wert `0`, aber `parseInt("")` `NaN`?
// Weil ein leerer String bei Numnber nichts und daher den Wert 0 bekommt, und bei
// parseInt wird zumindest eine Zahl am Anfang gebraucht damit es arbeiten kann,
// die in einem leeren String nicht gegeben ist, und deswegen ein nan bekommt

// 5
// Was ist das Ergebnis von `parseInt("  0050  ")`?
// Leerzeichen am Anfang werden Ignoriert, daher 50

// 6
// Was passiert bei `+true`?
// Ist die Kurzform von Number(), deswegen 1

// 7
// Welcher Typ hat das Ergebnis von `+ "100"`?
// Ist number

// 8
// Was ergibt `parseInt("17.89")` im Vergleich zu `Number("17.89")`?
// parse gibt nur Ganzzahlen aus, hier also 17 und number dann 17.89

// 9
// Was passiert bei `Number("abc123")` und warum?
// NaN weil Buchstaben mit drin sind

// 10 Warum ergibt `+"000123"` eine gültige Zahl, obwohl der String mit Nullen 
// beginnt? 
// Weil die nullen zahlen sind
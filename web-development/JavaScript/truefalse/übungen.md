Section 1: Truthy/Falsy| Eingabe-String         | `Number()`         | `parseInt()`        | `parseFloat()`      | `+input`            | Bemerkung                                                                 |
|------------------------|--------------------|----------------------|----------------------|----------------------|---------------------------------------------------------------------------|
| `""`                   | `0`                | `NaN`                | `NaN`                | `0`                  | Leerer String → `Number` & `+` geben 0, aber `parseInt/Float` NaN        |
| `" "`                  | `0`                | `NaN`                | `NaN`                | `0`                  | Leerzeichen → wie leerer String                                           |
| `"123"`                | `123`              | `123`                | `123`                | `123`                | Normaler Zahlenstring                                                     |
| `"  123  "`            | `123`              | `123`                | `123`                | `123`                | Whitespace wird automatisch entfernt                                      |
| `"123abc"`             | `NaN`              | `123`                | `123`                | `NaN`                | `parseInt/Float` lesen bis zum ersten ungültigen Zeichen                 |
| `"abc123"`             | `NaN`              | `NaN`                | `NaN`                | `NaN`                | Ungültiger Start → alles ist NaN                                          |
| `"123.45"`             | `123.45`           | `123`                | `123.45`             | `123.45`             | `parseInt` bricht am Punkt ab                                            |
| `"123,45"`             | `NaN`              | `123`                | `123`                | `NaN`                | Komma wird als ungültig gewertet (außer lokalisiert!)                    |
| `"0xF"`                | `15`               | `15`                 | `0`                  | `15`                 | Hexadezimal-Notation → `parseFloat` gibt 0 zurück, andere erkennen Hex   |
| `"08"`                 | `8`                | `8`                  | `8`                  | `8`                  | Führende Null → dezimal (in modernem JS, früher evtl. oktal!)            |
| `"true"`               | `NaN`              | `NaN`                | `NaN`                | `NaN`                | Kein numerisch interpretierbarer String                                  |
| `"null"`               | `NaN`              | `NaN`                | `NaN`                | `NaN`                | `"null"` ist nicht `null`                                                |
| `null` (als Wert)      | `0`                | `NaN`                | `NaN`                | `0`                  | `null` als Wert → `Number(null)` ergibt 0                                |
| `"Infinity"`           | `Infinity`         | `NaN`                | `Infinity`           | `Infinity`           | `parseInt` versteht `"Infinity"` nicht                                   |
| `"123.45abc"`          | `NaN`              | `123`                | `123.45`             | `NaN`                | `parseFloat` ist tolerant, `Number/+` sind strenger                      |
| `"00123"`              | `123`              | `123`                | `123`                | `123`                | Führende Nullen sind kein Problem                                         |
| `"1e3"`                | `1000`             | `1`                  | `1000`               | `1000`               | Exponentialnotation wird erkannt außer von `parseInt`                    |




Was gibt Boolean(" ") zurück?
true

Was gibt Boolean(0n) zurück?
false

Was gibt Boolean([]) zurück?
true

Was gibt Boolean(undefined) zurück?
false

Was gibt Boolean("false") zurück?
true

Was gibt Boolean(null) zurück?
false

Was gibt Boolean(1) zurück?
true

Was gibt Boolean("0") zurück?
true

Was gibt Boolean({}) zurück?
true

Was gibt Boolean(NaN) zurück?
false

----------------------------------------------



Was ergibt Number("500")?
500

Was ergibt Number("13.7")?
13.7

Was ergibt Number("90abc")?
nan

Was ergibt Number("0")?
0

Was ergibt Number(" ")?
1

Was ergibt Number(true)?
1

Was ergibt Number(false)?
0

Was ergibt Number(null)?
nan

Was ergibt Number(undefined)?
nan

Was ergibt Number("4444z")?
nan

-----------------------------------------------

Was ergibt parseInt("33px")?
33

Was ergibt parseInt("55.99")?
55

Was ergibt parseInt("0.9")?
0

Was ergibt parseInt("abc123")?
nan

Was ergibt parseInt("99")?
99

Was ergibt parseInt("-300")?
-33

Was ergibt parseInt("123abc456")?
123

Was ergibt parseInt("12 34")?
12

Was ergibt parseInt("")?
nan

Was ergibt parseInt(true)?
nan

------------------------------------------------

Was ergibt parseFloat("44.55abc")?
44.55

Was ergibt parseFloat("007.1")?
007.1

Was ergibt parseFloat("90")?
9

Was ergibt parseFloat("5.5.5")?
5.5.5

Was ergibt parseFloat("abc5.5")?
nan

------------------------------------------------

Was ergibt +("100")?
100

Was ergibt +("0")?
0
Was ergibt +("-50")?
-50

Was ergibt +("")?
0

Was ergibt +("123abc")?
nan

------------------------------------------------

Welcher Typ ergibt sich bei typeof (120 + "")?
string

Was ergibt typeof String(70)?
number

Was ergibt typeof (true + "")?
string

Was ergibt typeof (null + "")?
string

Was ergibt typeof ((10).toString())?
string

------------------------------------------------

Was ergibt Boolean("undefined")?
1

Was ergibt Boolean("")?
0

Was ergibt Boolean(100n)?
1

Was ergibt Boolean(false)?
0

Was ergibt Boolean("true")?
1

----------------------------------------------

"5" == 5
true

"5" === 5
false

null == undefined
true

null === undefined
false

0 == false
true

0 === false
true

"0" == false
true

"" == 0
true

"" === 0
true

false == undefined
false

----------------------------------------------

console.log("10" + 5);
"105"

console.log("10" - 5);
5

console.log(10 + true);
11

console.log("true" == true);
false

console.log(1 + "1" + 1);
111

console.log(1 + 1 + "1");
111

console.log("5" * "2");
10

console.log("5px" - 2);
nan

console.log(null + 1);
1

console.log(undefined + 1);
nan
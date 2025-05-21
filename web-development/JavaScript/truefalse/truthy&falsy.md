Truthy & Falsy Werte

True ist immer:

    - true
    - "Hey" ein nicht leerer String
    - "0" String, nicht Zahl
    - 123 nicht null als Zahl
    - alle Zahlen mit n ausser die null (0n)
    - [] und {} gelten auch immer als true
    - " " ist kein leerer String und damit auch true
    - umgerechnet als number immer 1
    - functions

Alles andere ist immer false:

    - false
    - 0
    - -0 (gibt wegen Divisionen auch null negativ)
    - 0n (BigInt null, alle anderen n Zahlen sind true)
    - "" (also ein leerer String)
    - null 
    - undfined
    - NaN
    - umgerechnet als number immer 0


In JavaScript wird jeder Wert intern in einen Boolean-Wert umgewandelt, wenn er in einem logischen Kontext verwendet wird, z. B. in:

    - if (value) { ... }

    - Schleifenbedingungen wie while (value)

    - dem logischen Operator && oder ||

Einige Werte ergeben dabei false, alle anderen ergeben true. Man nennt das „type coercion“ (automatische Typumwandlung).

Falsy Werte (geben false zurück):

    Wert	                                        Beschreibung

    false	                                        der boolesche Wert false
    0	                                            die Zahl 0
    -0	                                            negative Null
    0n	                                            BigInt Null
    ""	                                            leerer String
    null	                                        „kein Wert“
    undefined	                                    nicht definierter Wert
    NaN	                                            „Not a Number“


Alle anderen Werte gelten als truthy, z. B.:

    nicht-leere Strings:                            "0", "false", "abc"

    Zahlen ungleich 0:                              42, -7, 3.14

    Objekte:                                        {}, []

    Funktionen
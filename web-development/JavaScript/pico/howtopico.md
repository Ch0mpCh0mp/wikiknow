Anleitung zur Nutzung von picoprompt

1.  Installiere picoprompt:
    npm install picoprompt

2.  Erstelle eine JavaScript Datei:
    Zum Beispiel: index.js

3.  Importiere picoprompt in deine Datei:
    import prompt from `picoprompt`;   

4.  Verwende prompt() zum Einholen von Eingaben:
    Beispiel:
    const name = prompt(`Wie heißt du? `);
    console.log(`Hallo, ${name}!`);

5. Starte das Programm im Terminal:
    node index.js

6. Wenn du type: "module" in deiner package.json stehen hast, kannst du import     verwenden. Falls nicht, nutze require().

// ----------------------------------------------------------------------------

Hier noch Beispiele wie man mit 

    -   Auswahlmenüs(prompt.select) umgeht
    -   mehrere Fragen (einfach nacheinander abfragen)

umgeht:

7.  Auswahlmenü mit prompt.select:
    const prompt = require('picoprompt');

    const farbe = prompt.select('Wähle eine Farbe:', ['Rot', 'Grün', 'Blau']);
    console.log(`Du hast ${farbe} gewählt.`);

8.  mehrere Fragen nacheinander:
    
    const prompt = require('picoprompt');

    const name = prompt('Wie heißt du? ');
    const alter = prompt('Wie alt bist du? ');
    const hobby = prompt('Was ist dein Hobby? ');

    console.log(`Name: ${name}, Alter: ${alter}, Hobby: ${hobby}`);

9.  Bonus: in Funktionen gekapselt:
    
    function userInfo() {
        const name = prompt('Name: ');
        const stadt = prompt('Stadt: ');
        const tier = prompt.select('Lieblingstier?', ['Hund', 'Katze', 'Vogel']);

        return { name, stadt, tier };
    }

    const user = userInfo();
    console.log(user);

# HTML Forms - Alles, was du wissen musst

## 1. Was sind Forms?
HTML-Forms (Formulare) dienen dazu, Benutzereingaben zu sammeln und an einen Server zu senden. Sie bestehen aus Eingabefeldern, Buttons und anderen Elementen, die eine Interaktion ermöglichen.

---
## 2. Grundstruktur eines Formulars
```html
<form action="/ziel-url" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <button type="submit">Absenden</button>
</form>
```
### Wichtige Attribute:
- **`action`**: URL, an die die Formulardaten gesendet werden.
- **`method`**:
  - `GET`: Daten werden in der URL sichtbar.
  - `POST`: Daten werden sicher im Hintergrund gesendet.
- **`name`**: Schlüssel für die Datenübertragung (wichtig für die Serververarbeitung).
- **`id` & `for`**: Verbinden `label` mit `input` (für bessere Usability).
- **`required`**: Verhindert das Absenden ohne Eingabe.

---
## 3. Formularelemente & ihre Typen
### Texteingaben
```html
<input type="text" name="username" placeholder="Dein Name" required>
```
- `placeholder`: Zeigt einen Beispieltext im Feld an.
- `maxlength` & `minlength`: Begrenzen die Zeichenanzahl.

### Passwortfeld
```html
<input type="password" name="password" required>
```
- **Passwörter werden nicht im Klartext angezeigt.**

### E-Mail-Feld
```html
<input type="email" name="email" required>
```
- **Überprüft die Eingabe auf ein E-Mail-Format.**

### Telefonnummer
```html
<input type="tel" name="phone">
```
- **Ermöglicht eine Eingabe für Telefonnummern.**

### Zahlenfeld
```html
<input type="number" name="age" min="18" max="99">
```
- `min` & `max` definieren erlaubte Werte.

### Datum und Uhrzeit
```html
<input type="date" name="birthdate">
<input type="time" name="appointment">
```

### Checkboxen (Mehrfachauswahl)
```html
<input type="checkbox" id="red" name="color" value="rot">
<label for="red">Rot</label>
```
- **Mehrere Werte möglich, wenn `name="color"` mehrfach genutzt wird.**

### Radiobuttons (Nur eine Auswahl möglich)
```html
<input type="radio" id="male" name="gender" value="male">
<label for="male">Männlich</label>
```
- **`name` muss bei einer Gruppe gleich sein, damit nur eine Option gewählt wird.**

### Dropdown-Menü
```html
<select name="country">
    <option value="de">Deutschland</option>
    <option value="at">Österreich</option>
</select>
```

### Textarea
```html
<textarea name="message" rows="4" cols="50"></textarea>
```
- **Mehrzeilige Texteingabe.**

### Datei-Upload
```html
<input type="file" name="uploadfile">
```

### Schieberegler
```html
<input type="range" name="volume" min="0" max="100">
```

### Farbauswahl
```html
<input type="color" name="favcolor">
```

---
## 4. Buttons
### Absenden-Button
```html
<button type="submit">Absenden</button>
```

### Reset-Button
```html
<button type="reset">Zurücksetzen</button>
```
- **Setzt alle Eingaben im Formular zurück.**

### Standard-Button
```html
<button type="button">Klick mich</button>
```
- **Hat keine Formularfunktion, kann per JavaScript gesteuert werden.**

---
## 5. Formulare barrierefrei gestalten
- **`label` mit `for` verwenden**, um Eingaben zugänglich zu machen.
- **`fieldset` und `legend` nutzen**, um verwandte Felder zu gruppieren.
- **`aria-label` oder `aria-describedby` für Screenreader verwenden.**

---
## 6. CSS für Formulare
```css
form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
    max-width: 500px;
    margin: auto;
}

label {
    display: block;
    font-weight: bold;
    margin-top: 10px;
}

input, select, textarea, button {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
```
---
## 7. Sicherheitstipps
- **Formulare validieren** (HTML5 + JavaScript, Server-Side-Check!).
- **CSRF-Schutz** nutzen (z. B. durch Tokens).
- **Daten verschlüsseln** (`HTTPS` verwenden).

---
## 8. Fazit
HTML-Forms sind essenziell für Interaktionen im Web. Mit den richtigen Techniken und Sicherheitsmaßnahmen können sie sicher und benutzerfreundlich gestaltet werden!


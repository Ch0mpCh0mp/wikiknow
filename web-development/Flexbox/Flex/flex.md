# Flexbox: flex-basis, flex-grow und flex-shrink

## Einführung
Flexbox ist ein Layout-Modell in CSS, das es ermöglicht, Elemente flexibel anzuordnen. Die drei wichtigsten Eigenschaften für die Größenverteilung sind:
- `flex-basis` (Startgröße eines Elements)
- `flex-grow` (Wachstumsverhalten bei zusätzlichem Platz)
- `flex-shrink` (Schrumpfungsverhalten bei Platzmangel)

Diese Eigenschaften bestimmen, wie sich Flex-Items innerhalb eines Flex-Containers verhalten.

<!-- Was bedenken bei Flexbox?

Der Schlüssel bei Flexbox ist zu verstehen, wie die Main Axis (Hauptachse) und die Cross Axis (Querachse) funktionieren.

- Die Main Axis wird durch flex-direction bestimmt:

    - row = Hauptachse ist HORIZONTAL (von links nach rechts)
    - column = Hauptachse ist VERTIKAL (von oben nach unten)

- Die Cross Axis wird immer automatisch senkrecht zur Main Axis bestimmt:

    - Bei row ist die Querachse vertikal
    - Bei column ist die Querachse horizontal -->

---

## 1. flex-basis
**Definition:**
`flex-basis` legt die Anfangsgröße eines Flex-Items fest, bevor `flex-grow` oder `flex-shrink` angewendet wird.

**Werte:**
- `auto` – Nutzt `width` oder `height` des Elements, falls vorhanden.
- Feste Werte (`px`, `%`, `em` etc.) – Setzt eine definierte Größe.

**Beispiel in `styles.css`:**
```css
/* Das erste Element startet mit einer Breite von 100px */
.basis-100 { flex-basis: 100px; }
/* Das zweite Element startet mit einer Breite von 200px */
.basis-200 { flex-basis: 200px; }
/* Das dritte Element nimmt den Platz basierend auf Inhalt oder width ein */
.basis-auto { flex-basis: auto; }
```

---

## 2. flex-grow
**Definition:**
`flex-grow` bestimmt, wie stark ein Element im Verhältnis zu anderen Flex-Items wächst, wenn zusätzlicher Platz verfügbar ist.

**Werte:**
- `0` (Standard) – Das Element wächst nicht über `flex-basis` hinaus.
- `1` oder größer – Das Element wächst im Verhältnis zur Summe aller `flex-grow`-Werte.

**Beispiel in `styles.css`:**
```css
/* Dieses Element wächst einmal */
.grow-1 { flex-grow: 1; }
/* Dieses Element wächst doppelt so stark */
.grow-2 { flex-grow: 2; }
/* Dieses Element wächst dreimal so stark */
.grow-3 { flex-grow: 3; }
```

---

## 3. flex-shrink
**Definition:**
`flex-shrink` bestimmt, wie stark ein Element im Verhältnis zu anderen schrumpft, wenn nicht genug Platz vorhanden ist.

**Werte:**
- `1` (Standard) – Das Element schrumpft bei Bedarf.
- `0` – Das Element schrumpft nicht.
- Höhere Werte – Das Element schrumpft stärker als andere Elemente.

**Beispiel in `styles.css`:**
```css
/* Dieses Element schrumpft normal */
.shrink-1 { flex-shrink: 1; }
/* Dieses Element schrumpft dreimal so stark */
.shrink-3 { flex-shrink: 3; }
/* Dieses Element schrumpft fünfmal so stark */
.shrink-5 { flex-shrink: 5; }
```

---

## 4. Kombination von flex-basis, flex-grow und flex-shrink
Die Kurzform für diese drei Eigenschaften lautet:
```css
flex: <flex-grow> <flex-shrink> <flex-basis>;
```
**Beispiel:**
```css
.item {
    flex: 1 1 200px; /* flex-grow: 1, flex-shrink: 1, flex-basis: 200px */
}
```

---

## 5. Tipps & Tricks
- `flex: 1;` ist eine Kurzform für `flex-grow: 1; flex-shrink: 1; flex-basis: 0;` und verteilt den Platz gleichmäßig.
- Nutze `flex-shrink: 0;`, wenn ein Element nicht schrumpfen soll.
- Verwende `flex-basis: auto;` für eine automatische Berechnung basierend auf `width` oder `height`.
- Teste verschiedene `flex-grow`-Werte, um das optimale Layout zu finden.

---

## 6. Testen des Codes
Die Demo-Dateien bestehen aus:
- **`index.html`** (Struktur der Flexbox-Container)
- **`styles.css`** (Flexbox-Styling mit ausführlichen Kommentaren)

Zum Testen einfach die `index.html` im Browser öffnen.


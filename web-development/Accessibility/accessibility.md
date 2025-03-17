SELF STUDY:

1. Untertitel und Transkripte für Audio und Videos:

Diese sind wichtig für Barrierefreiheit, damit Menschen mit Hörbehinderungen Inhalte verstehen können. Sie verbessern außerdem die allgemeine Benutzererfahrung (z.B. für nicht-Muttersprachler oder in lauten/leisen Umgebungen).

    Arten von Untertiteln

    1. Geschlossene Untertitel (Closed Captions, CC)

        - Können ein- und ausgeschaltet werden
        - Enthalten gesprochene Inhalte sowie relevante Geräusche (z.B. "Musik spielt")
        - Werden z.B. mit <track kind="captions" srclang="de" src="untertitel.vtt"> im HTML5 <video> -Tag mit eingebunden

    2. Offene Untertitel (Open Captons)

        - Sie sind fest ins Video eingebrannt und können nicht deaktiviert werden
        - Vorteil: Funktionert überall, auch wenn keine CC-Unterstützung vorhanden ist

    3. Live Untertitel

        - Werden in Echtzeit generiert (z.B. bei Live-Streams, mit AI oder menschlichen Schreibern).

    Transkripte

        - Eine Textversion des gesprochenen Inhalt eines Videos oder Audios
        - Ermöglichen Suchmaschinen, den Inhalt zu indexieren (z.B. ein Transkript bei einem Video ermöglicht Google den Text zu durchforsten und in den Suchergebnissen anzuzeigen)
        - Können manuell oder automatisch erstellt werden (z.B. mit YouTube oder AI-Tools wie Otter.ai)
        - Sollten am besten eine strukturierte Formatierung haben (z.B. wer spricht + gesprochenet Text)

    Tools & Formate

        - WebVTT (.vtt) = Standardformat für HTML5-Videos
        - SRT (.srt) = Weit verbreitet für Videos (YouTube, VLC, etc.)
        - Transkript-Generatoren: YouTube-Automatik, Descript, Otter.ai, Sonix

    Best Practices

        - Synchronisation sollte zeitgleich genau sein
        - Gute Lesbarkeit (kurze Sätze, max. 2 Zeilen)
        - Geräusche sollten beschrieben werden (z.B. Tür knallt)
        - Farbige oder formatierte Untertitel helfen Menschen mit Sehbehinderungen



2. ARIA (Accessible Rich Internet Applications):

ARIA hilft dabei, interaktive Webinhalte für Screenreader und andere Assistenztechnologien nutzbar zu machen. Es ergänzt HTML5, wenn native Semantik nicht ausreicht.

Wichtge ARIA-Rollen, Attribute und Eigenschaften

ARIA besteht aus drei Hauptbereichen:

    ARIA-Rollen (role)

        - Definiert, welche Funktion ein Element hat
        - Beispiel:
        <div role="button" tabindex="0">Klick mich</div>
        - Häufige Rollen:
            - role="alert"  = Für Meldungen
            - role="navigation" = Markiert Navigationselemente
            - role="dialog" = Definiert ein Dialogfenster

    ARIA-Zustände & Eigenschaften (aria-*)

        - Geben den aktuellen Zustand eines Elements an (z.B. sichtbar oder nicht)
        - Beispiel:
        
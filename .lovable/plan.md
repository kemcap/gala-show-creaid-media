# Gezielte Finalisierung der bestehenden Gala-Show-Website

## Ziel
Den vorhandenen dunklen Pyrotechnik-Look, die Typografie, Farbwelt, Seitenstruktur und alle funktionierenden Bereiche beibehalten. Nur die angefragten Inhalte und Darstellungen optimieren.

## Geplante Anpassungen

### 1. Leistungs-Einstieg im oberen Bereich
- Den bestehenden Einführungstext durch den vorgegebenen Leistungsumfang ersetzen.
- Fontänen, Feuerbälle, Bodennebel, Gold Streams, Rauchsäulen, Verbundfeuerwerke, Konfetti und Fachpersonal klar und hochwertig lesbar hervorheben.
- Bestehendes Hero-Layout, Bild, Parallax-Effekt und Buttons unverändert lassen.

### 2. Bereich „Vermietung“
- Bestehende Vermietungs-Karte und Bildgestaltung beibehalten.
- Inhalte auf Fontänen bis 5,60 m, Feuerbälle und Flammen, Bodennebel-Maschinen, Multicolor-Konfetti und Streamer, Rauchsäulen bis 70 m sowie zertifiziertes Fachpersonal aktualisieren.
- Das professionelle Sorglos-Paket klar hervorheben.
- Abstände und Listenaufteilung für Desktop und Mobilgeräte optimieren.

### 3. Kompakter Videobereich
- Einen wiederverwendbaren Video-Auswahlbereich erstellen.
- Genau ein großes Hauptvideo anzeigen; keine automatische Wiedergabe.
- Darunter einen schmalen horizontalen Thumbnail-Slider mit den vier angegebenen YouTube-Videos einbauen.
- Beim Klick auf ein Thumbnail das Hauptvideo wechseln und die aktive Auswahl dezent hervorheben.
- Pfeilnavigation auf Desktop und horizontales Wischen/Scrollen auf Mobilgeräten ermöglichen.
- Die Videoliste zentral als leicht erweiterbare Datenstruktur anlegen.

### 4. Zwei Galerievarianten für den Korrekturabzug
- Beide Varianten direkt untereinander und eindeutig als „Variante A – Slider“ und „Variante B – Galerie“ kennzeichnen.
- Variante A: großer ruhiger Foto-Slider mit Pfeilen, dezenten Übergängen und Swipe-Unterstützung.
- Variante B: vorhandene Lightbox-Funktion in einem kompakteren, hochwertigen Grid weiterverwenden.
- Bestehende sechs Bilder nutzen; keine neuen oder fremden Bilder ergänzen.
- Beide Varianten bewusst als temporären Vergleich darstellen.

### 5. Kontaktformular
- Auf Name, E-Mail-Adresse, Telefonnummer, Veranstaltungsdatum und Nachricht reduzieren.
- Alle fünf Felder als Pflichtfelder mit sinnvollen Längenbegrenzungen vorbereiten.
- Bestehenden Mailversand beibehalten und die Eingaben vor dem Öffnen des Mailprogramms prüfen.
- CTA auf „Unverbindlich anfragen“ ändern.
- Bestehende Formularoptik beibehalten und Lesbarkeit sowie Bedienbarkeit optimieren.

## Technische Umsetzung
- Bestehende Komponenten und Design-Tokens weiterverwenden; keine neue Farb- oder Typografierichtung.
- Für Video- und Fotoauswahl kleine, fokussierte React-Komponenten mit lokalem Zustand erstellen.
- Pfeile über die bestehenden Schaltflächen-Komponenten umsetzen; mobile Slider über natives horizontales Scrollen mit Snap-Verhalten.
- YouTube-Vorschaubilder laden erst bei Bedarf; der eigentliche Player wird erst nach einem bewussten Klick aktiviert.
- Bestehende Startseiten-Metadaten inhaltlich an den erweiterten Leistungsumfang anpassen.

## Prüfung
- Desktop- und Mobilansicht auf Überlappungen, Textfluss, Slider-Bedienung und Galerie-Lightbox prüfen.
- Wechsel zwischen allen vier Videos, Pfeilnavigation und Swipe/Scroll-Verhalten testen.
- Kontaktformular mit fehlenden und vollständigen Pflichtfeldern testen.
- Sicherstellen, dass Hero, Navigation, Referenzen, Footer, WhatsApp-Button und Impressum unverändert funktionieren.

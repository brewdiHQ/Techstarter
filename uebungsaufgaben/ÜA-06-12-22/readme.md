# Übung 6: Objektorientierte Programmierung mit JavaScript

## Manuel Fischer | 06. 12. 2022

### :one: Was versteht man unter Objektorientierung?

:white_check_mark: Ein System wird durch das Zusammenspiel von Objekten definiert. Objekte sind logische Komponenten oder Einheiten, denen Attribute und Methoden zugeordnet werden können.
In der Programmierung definiert man Code in logischen Einheiten (z.B. Klassen), anstelle eines sequentiellen Scripts, was es erlaubt, die Redundanz von Code deutlich zu reduzieren.

---

### :two: Inwiefern ist der objektorientierte Ansatz in JavaScript ungewöhnlich?

:white_check_mark: Objektorientierte Programmierung ist nicht historisch in JavaScript verankert, sondern wurde erst später hinzugefügt, um die Funktion anderer Programmiersprachen nachzuahmen und JavaScript zu erweitern und zu modernisieren.
Es gibt erst seit wenigen Jahren Klassen, vorher gab es nur Objekte. JavaScript benutzt Prototyp-basierte Vererbung, anstelle von Klassen-basierter Vererbung.

---

### :three: Was versteht man unter den grundlegenden Konzepten der Objektorientierung?

:white_check_mark: Verkapselung<br>
Klassen sind voneinander getrennt und in sich so weit wie möglich geschlossen (wie eine Kapsel).<br>
:heavy_exclamation_mark: Abstraktion<br>
Komplexe Zusammenhänge werden durch Abstraktion simplifiziert. So kann das Interface oder das äußere Konstrukt übersichtlich bleiben.<br>
:heavy_exclamation_mark: Vererbung<br>
Klassen werden so formuliert, dass ähnliche Komponenten voneinander abstammen oder von einer gemeinsamen Parent-Class erben.<br>
:heavy_exclamation_mark: Polymorphismus<br>
Hängt mit Vererbung zusammen. Das Interface von Objekten soll kompatibel bleiben, so dass Objekte ausgetauscht werden können, ohne die Funktion zu beeinträchtigen.

---

### :four: Beschreibe folgende Begriffe in Stichworten

Abstraktion
Klasse
Methode
Objekt
Polymorphie
Prototyp
Property / Eigenschaft

:white_check_mark:<br>
:white_check_mark:<br>
:white_check_mark:<br>
:white_check_mark:<br>

---

### :five: Kochrezept

Definiere ein Objekt “Kochrezept” mit den Eigenschaften Zutaten, Schwierigkeitsgrad, Dauer sowie den Fähigkeiten mischen, zubereiten, anrichten

## :white_check_mark:

---

### :six: Passwortgenerator

Erstelle mittels objektorientierter Programmierung einen Passwortgenerator. Beachte dabei die gegebenen Anforderungen sowie nachfolgende Grafik

:bangbang: Anforderungen :bangbang:

- Beim Klicken auf den “generiere” Button wird ein neues Passwort erstellt
- Die Länge des Passworts kann über das Frontend vorgegeben werden.
- Bei der Initialisierung beträgt die Passwortlänge 7 Zeichen
- Ein Passwort besteht aus Großbuchstaben, Kleinbuchstaben, Zahlen und Sonderzeichen <br>
  :fire:[Herausforderung] Über das Frontend kann festgelegt werden, welche Art von Zeichen das Passwort enthält <br>
  :fire:[Herausforderung] Neben dem Ausgabefeld befindet sich ein “Copy” Button, sodass das neu generierte Passwort direkt in die Zwischenablage kopiert wird

![Alt text](./img/protoPass.png)

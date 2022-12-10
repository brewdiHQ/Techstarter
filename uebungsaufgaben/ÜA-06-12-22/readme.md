# Übung 6: Objektorientierte Programmierung mit JavaScript

## Manuel Fischer | 06. 12. 2022

### :one: Was versteht man unter Objektorientierung?

:white_check_mark: Bei der Objektorientierten Programmierung, kurz OOP, werden Daten und Programmcode in übersichtlichen, wiederverwendbaren Modulen – sprich Objekten – gekapselt. Dies reduziert den Programmieraufwand und hilft, Fehler zu vermeiden. (dev-insider.de)

---

### :two: Inwiefern ist der objektorientierte Ansatz in JavaScript ungewöhnlich?

:white_check_mark: Objektorientierte Programmierung ist nicht historisch in JavaScript verankert, sondern wurde erst später hinzugefügt, um die Funktion anderer Programmiersprachen nachzuahmen und JavaScript zu erweitern und zu modernisieren.
Es gibt erst seit wenigen Jahren Klassen, vorher gab es nur Objekte. JavaScript benutzt Prototyp-basierte Vererbung, anstelle von Klassen-basierter Vererbung. (Benjamin P.)

---

### :three: Was versteht man unter den grundlegenden Konzepten der Objektorientierung?

:heavy_exclamation_mark: Verkapselung<br>
Als Datenkapselung bezeichnet man in der Programmierung das Verbergen von Implementierungsdetails. Der direkte Zugriff auf die interne Datenstruktur wird unterbunden und erfolgt statt dessen über definierte Schnittstellen. Objekte können den internen Zustand anderer Objekte nicht in unerwarteter Weise lesen oder ändern. Ein Objekt hat eine Schnittstelle, die darüber bestimmt, auf welche Weise mit dem Objekt interagiert werden kann. Dies verhindert das Umgehen von Invarianten des Programms.<br>
:heavy_exclamation_mark: Abstraktion<br>
Jedes Objekt im System kann als ein abstraktes Modell eines Akteurs betrachtet werden, der Aufträge erledigen, seinen Zustand berichten und ändern und mit den anderen Objekten im System kommunizieren kann, ohne offenlegen zu müssen, wie diese Fähigkeiten implementiert sind<br>
:heavy_exclamation_mark: Vererbung<br>
Vererbung heißt vereinfacht, dass eine abgeleitete Klasse die Methoden und Objekte der Basisklasse ebenfalls besitzt, also „erbt“. Somit kann die abgeleitete Klasse auch darauf zugreifen. Neue Arten von Objekten können auf der Basis bereits vorhandener Objekt-Definitionen festgelegt werden. Es können neue Bestandteile hinzugenommen werden oder vorhandene überlagert werden. Wird keine Vererbung zugelassen, so spricht man zur Unterscheidung oft auch von objektbasierter Programmierung.<br>
:heavy_exclamation_mark: Polymorphie<br>
Verschiedene Objekte können auf die gleiche Nachricht unterschiedlich reagieren. Wird die Zuordnung einer Nachricht zur Reaktion auf die Nachricht erst zur Laufzeit aufgelöst, dann wird dies auch späte Bindung genannt.

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

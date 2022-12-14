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
Als Datenkapselung bezeichnet man in der Programmierung das Verbergen von Implementierungsdetails. Der direkte Zugriff auf die interne Datenstruktur wird unterbunden und erfolgt statt dessen über definierte Schnittstellen. Objekte können den internen Zustand anderer Objekte nicht in unerwarteter Weise lesen oder ändern. Ein Objekt hat eine Schnittstelle, die darüber bestimmt, auf welche Weise mit dem Objekt interagiert werden kann. Dies verhindert das Umgehen von Invarianten des Programms.
<br>

<p>
:heavy_exclamation_mark: Abstraktion<br>
Jedes Objekt im System kann als ein abstraktes Modell eines Akteurs betrachtet werden, der Aufträge erledigen, seinen Zustand berichten und ändern und mit den anderen Objekten im System kommunizieren kann, ohne offenlegen zu müssen, wie diese Fähigkeiten implementiert sind
<br>
<p>
:heavy_exclamation_mark: Vererbung<br>
Vererbung heißt vereinfacht, dass eine abgeleitete Klasse die Methoden und Objekte der Basisklasse ebenfalls besitzt, also „erbt“. Somit kann die abgeleitete Klasse auch darauf zugreifen. Neue Arten von Objekten können auf der Basis bereits vorhandener Objekt-Definitionen festgelegt werden. Es können neue Bestandteile hinzugenommen werden oder vorhandene überlagert werden. Wird keine Vererbung zugelassen, so spricht man zur Unterscheidung oft auch von objektbasierter Programmierung.
<br>
<p>
:heavy_exclamation_mark: Polymorphie<br>
Verschiedene Objekte können auf die gleiche Nachricht unterschiedlich reagieren. Wird die Zuordnung einer Nachricht zur Reaktion auf die Nachricht erst zur Laufzeit aufgelöst, dann wird dies auch späte Bindung genannt. (wiki.byte-welt.net)

---

### :four: Beschreibe folgende Begriffe in Stichworten

Abstraktion
Klasse
Methode
Objekt
Polymorphie
Prototyp
Property / Eigenschaft

:white_check_mark:<br> siehe Aufgabe 3<br>

<p>
:white_check_mark:<br> Die Klasse repräsentiert einen Bauplan, der als Grundlage der objektorientierten Programmierung oder OOP dient. Sie liefert die Definition dessen, was ein bezeichnetes Objekt innerhalb dieses Programmierstils ausmacht.<br>
<p>
:white_check_mark:<br>Methoden stellen in der objektorientierten Programmierung bestimmte Operationen oder Unterprogramme dar, die als Funktionen das Verhalten der Objekte definieren. Die Methoden des Objekts bilden den Rahmen dafür, wie Objekte miteinander in Verbindung treten.<br>
<p>
:white_check_mark:<br>Ein Objekt ist nichts anderes als eine in sich geschlossene Komponente, die aus Methoden und Eigenschaften besteht, um Daten nützlich zu machen. Es hilft Ihnen, das Verhalten der Klasse zu bestimmen.<br>
<p>
:white_check_mark:<br>Die Vererbung dient in der objektorientierten Programmierung, kurz OOP, unter anderem dazu, eine neue Klasse als Erweiterung bereits existierender Klassen zu entwickeln. Die bestehende Klasse ist als Basis- oder Superklasse bekannt. Die neue, erbende Klasse nennt sich Subklasse.<br>
<p>
:white_check_mark:<br>Software Prototyping hilft dabei, aus den ersten Anforderungen ein solides Konzept und schließlich eine fertige, voll funktionsfähige Software zu entwickeln. Dabei gibt es verschiedene Arten des Prototypenbaus.<br>
- Explorative Prototypen
- Experimentelle Prototypen
- Evolutionäre Prototypen
- Vertikale Prototypen
- Horizontale Prototypen<br>
- <p>
:white_check_mark:<br>Attribute sind in der objektorientierten Programmierung die Eigenschaften, die Objekte innerhalb einer Klasse annehmen können. Es handelt sich um Beschreibungen der Daten. Objekte einer Klasse haben dieselben Attribute, ihre Werte können sich jedoch unterscheiden.<br>
<p>

---

### :five: Kochrezept

Definiere ein Objekt “Kochrezept” mit den Eigenschaften Zutaten, Schwierigkeitsgrad, Dauer sowie den Fähigkeiten mischen, zubereiten, anrichten

## :white_check_mark:

siehe Code ./Aufgabe-5

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

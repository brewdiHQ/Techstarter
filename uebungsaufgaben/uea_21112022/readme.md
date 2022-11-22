Übung: Grundlagen Programmierung 3 - JavaScript Basics
Manuel Fischer | 21. 11. 2022

1.  Wozu dienen in JavaScript die Schlüsselworte let, var und const?
<details>
<summary>Antwort</summary>

> let: Die Let-Deklaration deklariert eine blockbezogene lokale Variable und initialisiert 
> sie optional mit einem Wert. 
> Beispiel: let Vorname = Stephan;

> var: Die var-Anweisung deklariert eine funktionsbezogene oder global bezogene Variable 
> und initialisiert sie optional mit einem Wert. Bespiel: var Nachname = Müller;

> const: Die const-Deklaration erstellt blockbezogene Konstanten, ähnlich wie Variablen, 
>        die mit dem Schlüsselwort let deklariert werden. Der Wert einer Konstante kann 
>        nicht durch Neuzuweisung geändert und nicht erneut deklariert werden

</details>

2.  Worin unterscheiden sich die Schlüsselworte let, var und const?
<details>
<summary>Antwort</summary>

> Ich hoffe ich habe diese Frage schon in Antwrt 1 beantwortet!?

</details>

3.  Was bedeutet dynamisch typisiert?
<details>
<summary>Antwort</summary>

> Dynamische Typisierung bezeichnet ein Schema der Typisierung von Programmiersprachen, bei der Typ-Prüfungen vorrangig zur Laufzeit eines Programms stattfinden. Im Gegensatz wird bei der statischen Typisierung die Typ-Prüfung bereits zum Zeitpunkt der Kompilierung durchgeführt. (Quelle: https://de.wikipedia.org/wiki/Dynamische_Typisierung). Besser kann man es nicht erklären!

</details>

4.  Welche Datentypen sind in JavaScript vorhanden?
<details>
<summary>Antwort</summary>

> Insgesamt verfügt JavaScript über 6 Datentypen. Diese sind entweder "einfach" oder "primitiv". Es handelt sich hierbei um:

>* Undefined
>* Null
>* Boolean (Wahrheitswert, true oder false)
>* String (eine Zeichenkette)
>* Symbol (ein spezieller Datentyp zum erstellen von eindeutigen Keys)
>* Number (eine Zahl, mit oder Nachkommastelle)

</details>

5.  Betrachte nachfolgenden Quellcode und beschreibe sein Ergebnis

```<!DOCTYPE html>
<html>
    <head>
        <script>
            function addiere(wert1 = 0, wert2 = 0){
                console.log(wert1 + wert2)
            }            
        </script>
    </head>
    <body>

    </body>
</html>
```

<details>
<summary>Antwort</summary>

> ~~ Wir sehen hier eine, in einer Standard html Datei eingebettete, JavaScript Funktion. Die Funktion heißt "addiere". Sie wird mit dem Schlüsselwort function angesprochen und mit der Namensergänzung "addiere" aufgerufen. Die Funktion "addiere" beinhaltet eine Rechenanweisung mit zwei initialisierten Variablen (wert1=0 und wert2=0). Das Ergebnis dieser Rechenanweisung (eine addition), wird abschließend in der Konsole ausgegeben. Das Ergbenis dieser Rechenanweisung ist: 0 (0+0=0)~~

</details>

6.  Entwickle eine Funktion, um den Inhalt einer Bestellliste auszugeben.
    Liste: Kapern, Senf, Butter, Eier, Hackfleisch, Kartoffeln, Zwiebeln
    Bedingung: Die Funktion darf nur einen Parameter haben 
7.  Bring Deine Liste in aus Aufgabe 6 mittels JavaScript in alphabetische Reihenfolge      
    beginnend bei A
8.  [Anspruchsvoller] Gebe das aktuelle Datum und die Uhrzeit aus. Dein Ergebnis sollte 
    folgendem Format entsprechen: [TT.MM.JJJJ | hh:mm:ss] 

9.  [Herausforderung, wirklich] Navigationsmenü auf einer Website
    Problem: Du betreust eine Website bestehend aus den folgenden Seiten: Hauptseite (index.html), Produkt, Über uns, Datenschutz, AGB. Alle Seiten sind in separaten HTML Dateien angelegt. Auf allen Seiten soll sich ein identisches Navigationsmenü befinden, sodass du das Menü nur an einer Stelle pflegen musst, aber es auf allen Seiten angezeigt wird.
    Bedingung: Für die Lösung dürfen nur CSS, HTML und JavaScript genutzt werden 

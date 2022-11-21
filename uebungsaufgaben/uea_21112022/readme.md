Übung: Grundlagen Programmierung 3 - JavaScript Basics
Manuel Fischer | 21. 11. 2022

1.  Wozu dienen in JavaScript die Schlüsselworte let, var und const?
<details>
<summary>Antwort</summary>

> let: Die Let-Deklaration deklariert eine blockbezogene lokale Variable und initialisiert 
> sie optional mit einem Wert. Beispiel: let Vorname = Stephan;

var: Die var-Anweisung deklariert eine funktionsbezogene oder global bezogene Variable und 
     initialisiert sie optional mit einem Wert. Bespiel: var Nachname = Stephan; 

const:  Die const-Deklaration erstellt blockbezogene Konstanten, ähnlich wie Variablen, die 
        mit dem Schlüsselwort let deklariert werden. Der Wert einer Konstante kann nicht durch Neuzuweisung geändert und nicht erneut deklariert werden

</details>

2.  Worin unterscheiden sich die Schlüsselworte let, var und const?
3.  Was bedeutet dynamisch typisiert?
4.  Welche Datentypen sind in JavaScript vorhanden?
5.  Betrachte nachfolgenden Quellcode und beschreibe sein Ergebnis

<details>
<summary><!DOCTYPE html>
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
</html></summary>
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

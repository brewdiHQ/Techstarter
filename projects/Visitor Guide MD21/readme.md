---

Manuel Fischer | 11. 12. 2022

# Zielsetzung

Für das “**\*Museum des 21. Jahrhunderts**” (**MD21**)\* soll ein Visitor
Guide geschaffen werden. Der Visitor Guide stellt dabei den zentralen
Kommunikationskanal des Museums mit den Buchser\*innen dar. Der Visitor
Guide soll für die Allgemeinheit kostenlos über das Internet abrufbar
sein. Der Visitor Guide stellt vertiefende Informationen zu ausgewählten
Objekten, Sammlungen und Ausstellungen bereit. Die Informationen können
in den gängigen Dateiformaten für Text, Bilder, Grafik,Video und Audio
vorliegen.

**Leitgedanken**

Für Design und Umsetzung des Visitor Guide gelten folgenden grundlegende
Prinzipien:

1.  **Mobile First:** Die Umsetzung muss zuallererst auf mobilen Endgeräten erfolgen und erst nachgelagert über stationäre Computer möglich sein.

2.  **Design for all**: Grundlegende Designs richten sich auch und in besondere Weise an Menschen mit Behinderung, z.B sehbehinderte oder blinde Menschen

3.  **Form follows Function**: Die “Funktion” steht im Vordergrund, das optische Erscheinungsbild unterstützt die angestrebte Funktion

4.  **Customer Centricity**: Ein hoher Nutzen für die BesucherInnen sowie eine gesteigerte hedonische Qualität sind für den Erfolg des Visitor Guides von größter Bedeutung

**Anforderungen**

- Der Visitor Guide (VG) ist auf Basis von Open Source Software entwickelt.

- Für den VG werden möglichst Standard Web-Formate verwendet (HTML, CSS, JavaScript)

- Die vertiefenden Informationen zu Ausstellungen, Sammlungen, Objekten sollte einfach aber möglichst umfangreich gehalten sein

- Der VG stellt den zentralen Kommunikationskanal des MD21 dar. Daher verfügt er neben vertiefenden Informationen zu den kulturellen Inhalten auch über folgendes: Impressum, Kontakt, AGB

- Der VG verfügt über die möglichkeit einzelne Objekte darzustellen, sowie Objekte im Kontext einer Ausstellung oder einer Sammlung

- Informationen zu Objekten, Ausstellungen, Sammlung können via Barcode abgerufen werden.

- Informationen zu Objekten, Ausstellungen und Sammlungen können über eine maximal fünfstellige Ziffernfolge abgerufen werden.

- Informationen zu Objekten, Ausstellungen und Sammlungen können als vollständige Liste (“alles anzeigen”) sowie Liste der Kategorie (alle Objekte anzeigen, alle Ausstellungen anzeigen, alle Sammlungen anzeigen) angezeigt werden.

- Ist ein Objekt Teil einer Sammlung oder Ausstellung ist stets der Wechsel in die beinhaltende Sammlung / Ausstellung möglich

- Sammlungen können zahlreiche Objekte enthalten und Teil einer Ausstellung sein.

- Sammlungen können nicht in Sammlungen enthalten sein

- Ausstellungen können Sammlungen und Objekte enthalten. Ausstellungen können keine Ausstellungen enthalten und auch nicht Teil einer Sammlung sein.

- Informationen zu Objekten beginnen mit einem führenden O z.B: O7D3G

- Informationen zu Ausstellungen beginnen mit einem führenden A, z.B A12DF

- Informationen zu Sammlungen beginnen mit einem führenden S, z.B S78F3

- Zulässige Zeichen sind: \[A-Z\], \[0-9\].

- _Optional:_ Ein Angebot in einfacher Sprache (deutsch) sowie in Englisch ist wünschenswert

**Inhalte**

Basis der Inhalte des MD21 sind:

- Europeana

  - [_https://www.europeana.eu/de/collections/time/21-21st-century_](https://www.europeana.eu/de/collections/time/21-21st-century)

- Museum für angewandte Kunst (MAK) in Wien:

  - [_https://www.mak.at/_](https://www.mak.at/)

  - [_https://artsandculture.google.com/partner/mak-austrian-museum-of-applied-arts_](https://artsandculture.google.com/partner/mak-austrian-museum-of-applied-arts)

- Museum Europäischer Kulturen (MEK)

  - [_https://www.smb.museum/museen-einrichtungen/museum-europaeischer-kulturen/home/_](https://www.smb.museum/museen-einrichtungen/museum-europaeischer-kulturen/home/)

  - [_https://artsandculture.google.com/story/iQWxjmBpV_0rKQ_](https://artsandculture.google.com/story/iQWxjmBpV_0rKQ)

**Konzeptphase**

Die Konzeption starten am Montag (12.12.2022)

**Projekt Zwischenstand**

Eine Projektzwischenstand ist am Sonntag (18.12.2022) abzugeben.

Der Projektzwischenstand umfasst:

- Click-Dummy

- Konzept

- Ersten Prototype

- Offene Punkte Liste

**Präsentation**

Die Präsentation des Zwischenstandes erfolgt am Montag (19.12) in der
Zeit von 8 bis 12:00 Uhr.

# Fragen & Antworten

## Wofür steht MD?

MD steht für **M**useum **d**es … 21 Jahrhunderts

## Wie soll Design for all Umgesetzt werden?

- HTML Elementen nutzen für das wofür sie gedacht wurden?

- Alt-Tags in Bildern verwenden

- Responsive Design z.B Textgröße auch sehr groß möglich

- ggf. Zoom-Button vorsehen

- ggf. Vorlesen durch “Automatik”

## Soll ein Corporate Identity genutzt werden?

- Farben werden bereitgestellt

- Logo wird bereitgestellt

- Fonts werden benannt

# Ist die App nur innerhalb des Gebäudes verfügbar?

Die App ist von überall und zu jederzeit verfügbar

## Was ist unter Punkt 3 mit dem Begriff "nachgelagert" gemeint?

Unter “nachgelagrt meint man Funktionen die wichtig aber nicht oberste
Priorität haben sollten aber bedacht werden

## Worauf achtet man, wenn man eine hohe hedonische Qualität im VG erreichen möchte?

Es soll den NutzerInnen Spass machen die App zu verwenden

## Wie geht das mit Barcode auf Objekten setzen und lesen, müssen wir ein bestimmtes Protokoll dafür entwickeln? RFID-Protokoll etwas?

So einfach wie möglich. Die Standard-JS API nutzen

## Was heist: Farben werden bereitgestellt, bitte? Eine Farbpalette sollen wir als feature programmieren ??

Farbencodes, Farbpalette, die in der App verwendet werden sollten,
werden als Farbcode in RGB(Hex) bereitgestellt. (=&gt; Adobe Color
Wheel, Google Fonts)

## Werden Benutzerdaten erhoben?

Analytics ist derzeit nicht erforderlich, gerne optional.

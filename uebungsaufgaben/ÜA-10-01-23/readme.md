# Übung 3: Node.js

## Manuel Fischer | 10. 01. 2023

## :question: Wie kannst du Express in deiner nodejs Umgebung verfügbar machen? (2 Punkte)

:white_check_mark: Express über npm installieren. Vzgw. mit dem Befehl

```
$ npm install express
```

Abschliessend das FW in den Code importieren bzw einbinden:

```
const express = require('express');
```

## :question: Was versteht man unter MVC? (5 Punkte)

:white_check_mark: MVC steht für "Model-View-Controller" und ist ein Architekturmuster für die Entwicklung von Anwendungen, insbesondere für benutzerorientierte Anwendungen wie Webanwendungen und Smartphone-Apps. MVC trennt die Anwendung in drei Schichten:

Model: Das Modell repräsentiert die Daten und die Geschäftslogik der Anwendung. Es enthält die Regeln für die Verwaltung und Validierung der Daten sowie die Geschäftslogik für die Verarbeitung der Daten.

View: Die View ist die Benutzeroberfläche der Anwendung. Es enthält die Elemente, die der Benutzer sieht und mit denen er interagieren kann, wie z.B. Formulare, Schaltflächen, Listen usw.

Controller: Der Controller ist der Vermittler zwischen dem Modell und der View. Es nimmt Anfragen von der View entgegen, verarbeitet sie mit dem Modell und gibt die Antwort an die View zurück. Er ist dafür verantwortlich die Daten aus dem Modell in eine formatierte Ansicht (View) zu übersetzen und die Interaktion des Benutzers mit der Anwendung zu steuern.

## :question: Erstelle eine sinnvolle Verzeichnisstruktur für eine Express-Anwendung und beschreibe den Zweck / das Ziel der einzelnen Verzeichnisse (10 Punkte)

:white_check_mark:

```
VISITOR-GUIDE23-APP/
|
+-- views/          # Hier werden die Ansicht-Templates gespeichert
|   |
|   +-- home.pug    # Home-Ansicht
|   +-- user.pug    # User-Ansicht
|
+-- routes/         # Hier werden die Routen-Module der Anwendung gespeichert
|   |
|   +-- index.js    # Hauptrouten
|
+-- public/         # Hier werden statische Dateien wie Bilder, CSS und JavaScript gespeichert
|   |
|   +-- images/
|   +-- styles/
|   +-- scripts/
|
+-- package.json    # Enthält die Abhängigkeiten und Scripts des Projekts
+-- server.js    #  Enthält den express Server
```

In dieser einfachen Verzeichnisstruktur sind die Ansichts- und Routen-Module direkt in ihren eigenen Verzeichnissen organisiert. Statische Dateien werden im Verzeichnis "public" gespeichert. Der Einstiegspunkt der Anwendung ist in "server.js" zu finden.

## :question:Template Engines (9 Punkte)

### :question: Was versteht man unter Template Engine?

:white_check_mark:

### :question: Nenne 5 Engines für Express

### :question: Was sind “partials” und wozu dienen sie?

:white_check_mark:
"Partials" sind kleinere, wiederverwendbare Teile einer Ansicht, die von mehreren Ansichten innerhalb einer Anwendung verwendet werden können. Sie ermöglichen es, sich wiederholende Elemente in der Benutzeroberfläche in einer einzigen Stelle zu definieren und zu pflegen, anstatt diese immer wieder in jeder Ansicht zu duplizieren.

## :question: Was ist eine Middleware in Express? (5 Punkte)

:white_check_mark:

## :question: Wie können mittels Express statische Dateien eingebunden werden? (3 Punkte)

## :question: Erstelle eine minimale Express App, die mit Aufruf von localhost:3500/ das Datum und die aktuelle Uhrzeit ausgibt. (10 Punkte)

## :question: Was bewirken folgende Zeilen? (3 Punkte)

```
import express from 'express'
import {router as bookrouter} from './books/index.js'
```

```
const app = express();
```

```
app.listen(3005, () => {console.log(`Express App listen on ${port}`)})
app.use(express.static("public"))
app.use('/books, bookrouter)
```

## :question: Erstelle mit dem express-generator die Anwendung "a-Sample-App" und nutze PUK als Templates engine (5 Punkte).

### :question: Wie sieht der Aufruf aus?

### :question: Was ist das Ergebnis?

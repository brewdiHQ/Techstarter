# Übung 3: Node.js

## Manuel Fischer | 10. 01. 2023

## Wie kannst du Express in deiner nodejs Umgebung verfügbar machen? (2 Punkte)

## Was versteht man unter MVC? (5 Punkte)

## Erstelle eine sinnvolle Verzeichnisstruktur für eine Express-Anwendung und beschreibe den Zweck / das Ziel der einzelnen Verzeichnisse (10 Punkte)

## Template Engines (9 Punkte)

### Was versteht man unter Template Engine?

### Nenne 5 Engines für Express

### Was sind “partials” und wozu dienen sie?

## Was ist eine Middleware in Express? (5 Punkte)

## Wie können mittels Express statische Dateien eingebunden werden? (3 Punkte)

## Erstelle eine minimale Express App, die mit Aufruf von localhost:3500/ das Datum und die aktuelle Uhrzeit ausgibt. (10 Punkte)

## Was bewirken folgende Zeilen? (3 Punkte)

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

## Erstelle mit dem express-generator die Anwendung "a-Sample-App" und nutze PUK als Templates engine (5 Punkte).

### Wie sieht der Aufruf aus?

### Was ist das Ergebnis?

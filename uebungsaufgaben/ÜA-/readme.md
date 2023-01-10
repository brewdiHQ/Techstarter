# Übung 2: Node.js

## Manuel Fischer | 09. 01. 2023

# :question: Beantworte folgende Fragen mit deinen Worten:

:one: :arrow_forward: Was ist node.js? <br>
:white_check_mark: Node.js ist eine quelloffene, plattformübergreifende JavaScript-Laufzeitumgebung, die JavaScript-Code außerhalb eines Webbrowsers ausführen kann. Njs basoert auf der V8 Engine von Google.

:two: :arrow_forward: Nenne Beispiele für Plattformen, auf denen node.js ausgeführt werden kann.<br>
:white_check_mark: MS Windows, Linux, macOS, RaspberryPi, als Container, in der Cloud

:three: :arrow_forward: Was ist NPM?<br>
:white_check_mark: npm ist der Node Package Manager für die Programmiersprache JavaScript. Er ist der Standard-Paketmanager für die JavaScript-Laufzeitumgebung Node.js. npm erleichtert die gemeinsame Nutzung und Wiederverwendung von Code sowie die Verwaltung von Abhängigkeiten in einem Projekt.

:four: :arrow_forward: Nennen Beispiele für nützliche “Packages”<br>:white_check_mark: Express, React, Mongoose, Socket.io, Yarn, GraphQL

:five: :arrow_forward: Was ist Express?<br>
:white_check_mark: Zusammenfassend lässt sich sagen, dass Express.js ein leistungsfähiges Webanwendungs-Framework für Node.js ist, das eine minimale, flexible und leistungsstarke Plattform für die Erstellung von Webanwendungen und RESTful-APIs bietet und es Entwicklern ermöglicht, sich auf die Entwicklung der Logik ihrer Anwendungen zu konzentrieren.

# :question: Erstelle Skripte, um folgende Aufgaben zu lösen. Nutze dafür Node.js. Kopiere den Quellcode direkt in deinen Antwortbogen.

:arrow_forward: Lies die Datei “beispieldaten.txt” vom Dateisystem ein.

:white_check_mark:

```const fs = require('fs');

fs.readFile('./beispieldaten.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```

:arrow_forward: Schreibe folgendes JSON Objekt in die Datei “person.json”:

```[
{
    “name”:”Andy”
    “Nachname”:”Warhol”
    “Beruf”:”Künstler”
},
{
    “name”:”unbekannt”
    “Nachname”:”unbekannt”
    “Pseudonym”:”Banksy”
    “Beruf”:”Künstler”
}
]
```

:white_check_mark:

```
const fs = require('fs');

const data = [
  {
    "name": "Andy",
    "Nachname": "Warhol",
    "Beruf": "Künstler"
  },
  {
    "name": "unbekannt",
    "Nachname": "unbekannt",
    "Pseudonym": "Banksy",
    "Beruf": "Künstler"
  }
];

fs.writeFileSync('person.json', JSON.stringify(data, null, 2));
console.log('Datei erfolgreich erstellt!');
```

:arrow_forward: Erstelle einen HTTP Server, der auf Anfrage über Port 3456 reagiert

:white_check_mark:

```
const http = require('http');

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});

server.listen(3456, () => {
console.log('Server bereit zu reagieren');
});

```

# :question: Lege ein leeres Verzeichnis “my-simple-server” an sowie eine leere Datei “index.js” in diesem Verzeichnis. Welcher Befehl ist erforderlich, um ein NPM Projekt zu initialisieren?

:white_check_mark:

```

# Anlegen des leeren Verzeichnis

$ mkdir my-simple-server

# Wechseln in das Verzeichnis

$ cd my-simple-server

# Erstellung der leeren Datei

$ touch index.js

# Initialisierung des NPM-Projekts

$ npm init

```

# :question: Gegeben sei das Programm “my-simple-server” mit dem Einstiegspunkt “index.js.” Was ist erforderlich, damit durch das Kommando “npm start” das Programm ausgeführt wird?

:white_check_mark: Eine Veronüpfung in der pakcage.json zu dem Programm das ausgeführt werden soll. Bspw:

```

{
"scripts": {
"start": "node index.js"
}
}

```

# :question: Füge dem zuvor angelegten Programm “my-simple-server” das node.js Framework “Express” hinzu. Nutze dafür npm. Wie lautet das Kommando?

:white_check_mark: $ npm install express

# :question: Wozu dienen die Dateien “package.json” und ”package-lock.json”?

:white_check_mark: In einem Node.js-Projekt sind die Dateien package.json und package-lock.json sehr wichtig. Sie dienen dazu, die Abhängigkeiten eines Projekts zu verwalten und zu dokumentieren.

package.json ist eine manifest-ähnliche Datei, in der Informationen wie der Projektname, die Version, Autoren, Lizenz, Abhängigkeiten und Scripte aufgeführt sind. Sie enthält alle notwendigen Informationen, um ein Projekt wiederaufzusetzen und die Abhängigkeiten zu verwalten.

Wenn man ein neues Projekt mit npm init initialisieren, wird eine package.json-Datei erstellt, in der die grundlegenden Informationen des Projekts enthalten sind. Später können weitere Abhängigkeiten mit dem Befehl npm install --save <dependency-name> hinzugefügt werden und die Dependency wird automatisch in der package.json hinzugefügt.

package-lock.json hingegen wurde eingeführt um die Konsistenz und Reproduzierbarkeit von Projekten zu gewährleisten. Diese Datei enthält exakte Versionen der installierten Pakete und Abhängigkeiten (inklusive transitive Abhängigkeiten), was sicherstellt, dass das Projekt jederzeit auf die gleiche Art und Weise wiederhergestellt werden kann. Wenn eine Abhängigkeit aktualisiert wird, werden auch die Abhängigkeiten der Abhängigkeiten in der package-lock.json aktualisiert, um die Reproduzierbarkeit sicherzustellen.

# :question: Sofern du dein Projekt nicht weiter konfiguriert hast, welche Wirkung hat der Befehl “npm test”?

:white_check_mark: Wird der Befehl npm test ausgeführt, sucht npm nach einem Skriptnamen "test" in der package.json-Datei des Projekts und führt den dort definierten Befehl aus.

# :question: Welche HTTP Methoden gibt es?

:white_check_mark: GET, HEAD, POST, PUT, DELETE, uvm.

# :question: Welche HTTP Methoden können über ein HTML Formular ausgeführt werden?

:white_check_mark: GET und POST. Die Methode GET wird verwendet, wenn das Formular ohne Änderungen an den Daten, die auf dem Server gespeichert sind, abgerufen wird. Die Daten werden als Teil der URL übertragen und können von jedem gelesen werden, der Zugriff auf die URL hat.

Die Methode POST wird verwendet, wenn das Formular verwendet wird, um Daten auf dem Server zu erstellen oder zu aktualisieren. Die Daten werden im Request-Body gesendet und sind nicht Teil der URL, was bedeutet, dass sie nicht von jedem gelesen werden können, der Zugriff auf die URL hat.

```

```

# CHICKEN WARLORD

LINK ZUM SPIEL: [CHICKEN WARLORD](https://jabekl.github.io/chicken-warload/)

Inhalt:

- Was ist das Spiel für ein Spiel?
- Wie ist das Programm aufgebaut?
- Die Programmierer

Zuerst möchte ich aber noch auf den [Backend Code](https://github.com/jabekl/backend-chicken-warlord) hinweisen. Dort sind alle Datein für die API / Datenbank

## Was ist das für ein Spiel?

Chicken Warlord ist ein sehr einfaches Spiel. Man hat eine Knarre, die sich mit dem Mauscursor bewegt. Dann muss man ein Hühnchen abschießen. Für jedes Hühnchen gibt es einen Punkt. Wenn man aber dann daneben schießt, dann hat man verloren. Es gibt auch eine Rangliste mit den 3 besten "Jagtvorgängen"

## Wie ist das Programm aufgebaut?

Es gibt zwei Komponenten für das Spiel: Einmal die Website an sich, die über Github Pages gehostet wird. Diese ist ausschließlich in Vanilla Javascript, HTML und CSS geschrieben. Die zweite Komponente ist das Backend, in dem Falle eine API mit einer Datenbank. Hier wird die Sprache Python mit dem Modul FastAPI verwendet und als Datenbank benutzen wir SQLite. Betrieben wird diese API bei [Heroku](https://www.heroku.com/). Hier nochmal eine Zeichnung: 

```
 ___________                            ____________                             ____________        
|           |                          |  Github    |                           |   Heroku   |
|  Client   |          https           |   Pages    |         https             |            |
| Webbrowser|--------------------------|            |---------------------------|   Python   |
|           |                          | Website    |                           |  FastApi   |
|___________|                          |____________|                           |____________|
```

## Die Programmierer

Github: [Luftiger](https://github.com/Luftiger) --- Backend, Datenbank  
Github: [Jabekl](https://github.com/jabekl) --- Frontend, Websitehosting
            


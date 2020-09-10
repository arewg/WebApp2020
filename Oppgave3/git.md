**Sette opp git lokalt**
* git init

**Sette opp nytt repo i Github**
* Ble gjort via GitHub.com

**Lage dev branch lokalt**
* git checkout -b dev

**Lage fil i dev branch lokalt (hiof.js fil med console.log("hiof"))**
* touch hiof.js
* git add hiof.js

**Commite disse**
* git commit -m "comment"

**Pushe endringene til repo**
* git push -u origin dev

**Lage en fil i dev branch remote**
* lager ny fil i github.com

**Hente endringene lokalt**
* git fetch
* git pull

**Merge filene fra dev i master**
* git checkout - (for å gå til master)
* git merge dev

**Samarbeide med en kollega eller en annen konto du har for å få til merge conflict**
* Opprettet .gitignore i begge brancher, med ulikt innhold.

**Resolve merge conflict**
* Accept incoming eller current changes i VSCode

**(frivillig prøve ut stash, pop og cherry-pick)**
* git cherry-pick 8aa5f63081f10d8f8306bbcdbb2893997045a11b (velger den/de commitene du ønsker)
* git stash (add filen først)
* git stash pop (får tilbake filen du stasha)

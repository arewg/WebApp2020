# Oppgave 1 Bash Cardio

**1 - Lage mappe**

* mkdir ny_mappe

**2 - Gå inn i mappen**

* cd ny_mappe

**3 - Lage ny fil**

* touch ny_fil.txt

**4 - Legge tekst til i filen**

* Fremgangsmåte 1.
    * echo her legger jeg til text til ny_fil.txt >> ny_fil.txt

* Fremgangsmåte 2.
    1. nano ny_fil.txt
    2. *Skriv inn den teksten du vil legge inn i filen*
    3. CTRL + O
    4. *Enter* for å legge det til filen.

**5 - Endre den fra kommanolinjen** *- denne har jeg tolket som at man skal endre teksten man har lagt til i filen.*

* Denne endrer tekst som allerede finnes i dokumentet ved å se om "legger" ligger i dokumentet, og dersom det er der, endres det med "endrer".
    * sed -i 's/legger/endrer/g' ny_fil.txt >> ny_fil.txt

**6 - Slette filen**

* rm ny_fil.txt
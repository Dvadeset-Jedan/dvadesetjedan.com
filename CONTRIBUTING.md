# Kako dodati događaj 

1. Fork ovaj repo
2. Dodaj događaj u `content/events.json` fajl u sledećem formatu
```json
{
    "title": "Ime događaj",
    "url": "Link događaja sa meetup.com, ako postoji. Npr. https://www.meetup.com/dvadeset-jedan/events/vtnpvsydcjbqb/",
    "date": "Datum događaja u `YYYY-MM-DD` formatu. Npr. 2022-06-12", 
    "venue": "Ime lokacija događaja. Npr. Dogma Brewery & Tap Room",
    "address": "Adresa lokcije događaja. Npr. Radnička 3, Čukarica Beograd", 
    "city": "Grad događaja. Npr. Belgrade",
    "country": "Zemlja u kojoj je događaj. Npr. Serbia",
    "imgSrc": "absolute path do slike, dodati u `public/images` folder ako ne postoji adekvatna slika. Npr. images/dogma.webp"
  }
```
3. U `utils/pins.ts` dodati X,Y poziciju za grad u kome se dešava događaja. Poziciju možete dobiti tako što kliknete na lokaciju na mapi, i ona će se ispisati u konzuli browser-a. Npr. 📍 {x: 139.5, y: 189}
4. Napravi pull request ka `main` grani 

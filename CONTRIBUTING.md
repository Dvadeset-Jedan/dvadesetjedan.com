# Kako dodati događaj 

1. Fork ovaj repo
2. Dodajte događaj u `content/events.json` fajl u sledećem formatu
```json
{
    "title": "Bitcoin only meetup in Belgrade", // Ime događaj
    "url": "https://www.meetup.com/dvadeset-jedan/events/vtnpvsydcjbqb/", // Link događaja sa meetup.com, ako postoji
    "date": "2022-06-12", // Datum događaja u `YYYY-MM-DD` formatu 
    "venue": "Dogma Brewery & Tap Room", // Ime lokacija događaja
    "address": "Radnička 3, Čukarica Beograd", // Adresa lokcije događaja
    "city": "Belgrade", // Grad događaja
    "country": "Serbia", // Zemlja u kojoj je događaj
    "imgSrc": "images/dogma.webp", // path do slike, dodati u `public/images` folder ako ne postoji adekvatna slika
  }
```
3. Napravite pull request ka `main` grani 

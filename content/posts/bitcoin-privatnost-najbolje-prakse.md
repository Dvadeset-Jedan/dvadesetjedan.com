---
index: 7
title: "Bitcoin Privatnost: Najbolje Prakse"
author: "Gigi"
authorURL: "https://dergigi.com/2021/03/14/bitcoin-privacy-best-practices/"
meta: "Pre ne toliko dugo, uobičajen režim interneta je bio neenkriptovan običan tekst (plain text).  Svi su mogli špiunirati svakoga i mnogi nisu o tome ni razmišljali."
translator: "Plumsky"
translatorURL: "https://t.me/SkiLites"
slug: "bitcoin-privatnost-najbolje-prakse"
img: 'bitcoin-privatnost-najbolje-prakse'
flag: 'serbia'
tags:
    - translation
---
> Postoji sveto carstvo privatnosti za svakog čoveka gde on bira i pravi odluke – carstvo stvoreno na bazičnim pravima i slobode koje zakon, generalno, ne sme narušavati.
Džefri Fišer, Arhiepiskop Canterberija (1959)


Pre ne toliko dugo, uobičajen režim interneta je bio neenkriptovan običan tekst (plain text).  Svi su mogli špiunirati svakoga i mnogi nisu o tome ni razmišljali.  Globalno obelodanjivanje nadzora 2013. je to promenilo i danas se koriste mnogo bezbedniji protokoli i end-to-end enkripcija postaje standard sve više.
Iako bitcoin postaje tinejdžer, mi smo – metaforično govoreći – i dalje u dobu običnog teksta narandžastog novčića.  Bitcoin je radikalno providljiv protokol sam po sebi, ali postoje značajni načini da korisnik zaštiti svoju privatnost.  U ovom članku želimo da istaknemo neke od ovih strategija, prodiskutujemo najbolje prakse, i damo preporuke koje mogu primeniti i bitcoin novajlije i veterani.

## Zašto je privatnost bitna

> Privatnost je potrebna da bi otvoreno društvo moglo da funkcioniše u digitalnoj eri.  Privatnost nije isto što i tajanstvenost.  Privatna stvar je nešto što neko ne želi da ceo svet zna, a tajna stvar je nešto što neko ne želi bilo ko da zna.  Privatnost je moć da se čovek selektivno otkriva svom okruženju.

Ovim snažnim rečima Erik Hjus je započeo svoj tekst Sajferpankov Manifesto (Cypherpunk's Manifesto) 1993. Razlika između privatnosti i tajanstvenosti je suptilna ali jako važna.  Odlučiti se za privatnost ne znači da neko ima tajne koje želi sakriti.  Da ovo ilustrujemo shvatite samo da ono što obavljate u svom toaletu ili u spavaćoj sobi nije niti ilegalno niti tajna (u mnogim slučajevima), ali vi svejedno odlučujete da zatvorite vrata i navučete zavese.

Slično tome, koliko para imate i gde ih trošite nije naručito tajna stvar. Ipak, to bi trebalo biti privatan slučaj.  Mnogi bi se složili da vaš šef ne treba da zna gde vi trošite vašu platu.   Privatnosti je čak zaštićena od strane mnogobrojnih internacionalnih nadležnih organa.  Iz Američke Deklaracije Prava i Dužnosti Čoveka (American Declaration of the Rights and Duties of Man) Ujedinjenim Nacijama, napisano je da je privatnost fundamentalno prava gradjana širom sveta.

> Niko ne sme biti podvrgnut smetnjama njegovoj privatnosti, porodici, rezidenciji ili komunikacijama, niti napadnuta njegova čast i reputacija.  Svi imaju pravo da se štite zakonom protiv takvih smetnja ili napada.
Artikal 12, Deklaracija Ljudskih Prava Ujedinjenih Nacija

## Bitcoin i privatnost

Iako je bitcoin često opisivan kao anoniman način plaćanja medijima, on u stvari poseduje potpuno suprotne osobine. On je poluanoniman u najboljem slučaju i danas mnogima nije ni malo lako primeniti taktike da bi bili sigurni da njihov poluanonimni identitet na bitcoin mreži ne bude povezan sa legalnim identitetom u stvarnom svetu.

Bitcoin je otvoren sistem.  On je javna baza podataka koju svako može da proučava i analizira.  Znači, svaka transakcija koja je upisana u tu bazu kroz dokaz rada (proof-of-work) postojaće i biće otkrivena dokle god bitcoin postoji, što znači - zauvek.  Ne primenjivati najbolje prakse privatnosti može imati štetne posledice u dalekoj budućnosti.

Privatnost, kao sigurnost, je proces koji je težak, ali nije nemoguć.  Alatke nastavljaju da se razvijaju koje čuvaju privatnost kad se koristi bitcoin and srećom mnoge od tih alatki su sve lakše za korišćenje.  Nažalost ne postoji panacea u ovom pristupu.  Mora se biti svesan svih kompromisa i usavršavati te prakse dok se one menjaju.

## Najbolje prakse privatnosti

Kao i sve u bitcoinu, kontrola privatnosti je postepena, korak po korak, procedura.  Naučiti i primeniti ove najbolje prakse zahteva strpljivost i odgovornost, tako da ne budite obeshrabreni ako vam se čini da je to sve previše.  Svaki korak, koliko god bio mali, je korak u dobrom pravcu.

Koje korake preduzeti da bi uvećali svoju privatnost:
-	Budite u vlasništvu sami svojih novčića
- Nikad ne ponavljajte korišćenje istih adresa
- Minimizirajte korišćenje servisa koji zahtevaju identitet (Know your customer - KYC)
- Minimizirajte sve izloženosti trećim licima
- Upravljajte svojim nodom
- Koristite Lightning mrežu za male transakcije
- Nemojte koristiti javne blok pretraživače za svoje transakcije
- Koristite metodu CoinJoin često i rano pri nabavljanju svojih novčića

**Budite u vlasništvu sami svojih novčića**: Ako ključevi nisu tvoji, onda nije ni bitcoin.  Ako neko drugo drži vaš bitcoin za vas, oni znaju sve što se može znati: količinu, istoriju transakcija pa i sve buduće transakcije, itd.  Preuzimanje vlasništva bitcoina u svoje ruke je prvi i najvažniji korak.

**Nikad ne kroistite istu adresu dvaput**: Ponavljanje adresa poništava privatnost pošiljalca i primaoca bitcoina. Ovo se treba izbegavati pod svaku cenu.

**Minimizirajte korišćenje servisa koji zahtevaju identitet (KYC)**: Vezivati svoj legalni identitet za svoje bitcoin adrese je zlo koje se zahteva od strane mnogih državnih nadležnosti.  Dok je efektivnost ovih zakona i regulacija disputabilno, posledice njihovog primenjivanja su uglavnom štetne po korisnicima.  Ovo je očigledno pošto je česta pojava da se te informacije često izlivaju iz slabo obezbeđenih digitalnih servera.  Ako izaberete da koristite KYC servise da bi nabavljali bitcoin, proučite i razumite odnos između vas i tog biznisa. Vi ste poverljivi tom biznisu za sve vaše lične podatke, pa i buduće obezbeđenje tih podataka. Ako i dalje zarađujete kroz fiat novčani sistem, mi preporučujemo da koristite samo bitcoin ekskluzivne servise koji vam dozvoljavaju da autamatski kupujete bitcoin s vremena na vreme. Ako zelite da potpuno da izbegnete KYC, pregledajte [bitcoinqna.github.io/noKYConly/](https://bitcoinqna.github.io/noKYConly/)

**Minimizirajte sve izloženosti trećim licima**: Poverljivost trećim licima je bezbednosna rupa (https://nakamotoinstitute.org/trusted-third-parties/). Ako možete biti poverljivi samo sebi, onda bi to tako trebalo da bude.

**Upravljajte svojim nodom**: Ako nod nije tvoj, onda nisu ni pravila. Upravljanje svojim nodom je suštinska potreba da bi se bitcoin koristio na privatan način. Svaka interakcija sa bitcoin mrežom je posrednjena nodom.  Ako vi taj nod ne upravljate, čiji god nod koristite može da vidi sve što vi radite. Ova upustva (https://bitcoiner.guide/node/) su jako korisna da bi započeli proces korišćenja svog noda.

**Koristite Lightning mrežu za male transakcije**: Pošto Lightning protokol ne koristi glavnu bitcoin mrežu za trasakcije onda je i samim tim povećana privatnost korišćenja bez dodatnog truda. Iako je i dalje rano, oni apsolutno bezobzirni periodi Lightning mreže su verovatno daleko iza nas. Korišćenje Lightning-a za transakcije malih i srednjih veličina će vam pomoći da uvećate privatnost a da smanjite naplate svojih pojedinačnih bitcoin transakcija.

**Nemojte koristiti javne blok pretraživače za svoje transakcije**: Proveravanje adresa na javnim blok pretraživačima povezuje te adrese sa vašim IP podacima, koji se onda mogu koristiti da se otkrije vaš identitet. Softveri kao [Umbrel](https://umbrel.com/) i [myNode](https://mynodebtc.com/) vam omogućavaju da lako koristite sami svoj blok pretraživač. Ako morate koristiti javne pretraživače, uradite to uz VPN ili Tor.

**Koristite CoinJoin često i rano pri nabavljanju svojih novčića**: Pošto je bitcoin večan, primenjivanje saradničkih CoinJoin praksa će vam obezbediti privatnost u budućnosti. Dok su CoinJoin transakcije svakovrsne, softveri koji su laki za korišćenje već sad postoje koji mogu automatizovati ovu vrstu transakcija. Samourai Whirlpool (https://samouraiwallet.com/whirlpool) je odličan izbor za Android korisnike.  Joinmarket (https://github.com/joinmarket-webui/jam) se može koristiti na vašem nodu. A servisi postoje koji pri snabdevanju vašeg bitcoina istog trenutka obave CoinJoin tranzakciju automatski.

## Zaključak

Svi bi trebalo da se potrude da koriste bitcoin na što privatniji način. Privatnost nije isto što i tajanstvenost. Privatnost je ljudsko pravo i mi svi trebamo da branimo i primenljujemo to pravo. Teško je izbrisati postojeće informacije sa interneta; a izbrisati ih sa bitcoin baze podataka je nemoguće.
Iako su daleko od savršenih, alatke postoje danas koje vam omogućavaju da najbolje prakse privatnosti i vi sami primenite. Mi smo vam naglasili neke od njih i - kroz poboljšanje u bitcoin protokolu kroz Taproot i Schnorr - one će postajati sve usavršenije.

Bitcoin postupci se ne mogu lako opisati korišćenjem tradicionalnim konceptima. Pitanja kao što su "Ko je vlasnik ovog novca?" ili "Odakle taj novac potiče?" postaju sve teža da se odgovore a u nekim okolnostima postaju potpuno beznačajna.

Satoši je dizajnirao bitcoin misleći na privatnost. Na nivou protokola svaka bitcoin transakcija je proces "topljenja" koji za sobom samo ostavlja heuristične mrvice hleba.  Protokolu nije bitno odakle se pojavio bilo koji bitcoin ili satoši. Niti je njega briga ko je legalan identitet vlasnika. Protokolu je samo važno da li su digitalni potpisi validni.
Dokle god je govor slobodan, potpisivanje poruka - privatno ili ne - ne sme biti kriminalan postupak.

Dodatni Resursi
- [This Month in Bitcoin Privacy](https://enegnei.github.io/This-Month-In-Bitcoin-Privacy/) | Janine
- [Hodl Privacy FAQ](https://6102bitcoin.com/faq-hodl-privacy/) | 6102
- [Digital Privacy](https://6102bitcoin.com/blog/digital-privacy/) | 6102
- [UseWhirlpool.com](http://usewhirlpool.com/) | Bitcoin Q+A
- [Bitcoin Privacy Guide](https://bitcoiner.guide/privacy/) | Bitcoin Q+A

*Ovaj članak napisan je u saradnji sa Matt Odellom, nezavisnim bitcoin istraživačem. Nađite njegove preporuke za privatnost na [werunbitcoin.com](https://werunbitcoin.com)*

[Originalni tekst](https://dergigi.com/2021/03/14/bitcoin-privacy-best-practices/)

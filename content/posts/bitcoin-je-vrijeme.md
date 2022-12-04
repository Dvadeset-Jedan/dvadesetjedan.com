---
index: 10
title: "Bitcoin je vrijeme"
author: "Gigi"
authorURL: "https://dergigi.com/2021/01/14/bitcoin-is-time/"
meta: "Vrijeme je novac, ili se tako barem kaže. Iz toga slijedi da je novac također vrijeme: prikaz kolektivne ekonomske energije koju je pohranilo čovječanstvo..."
translator: "Robi"
translatorURL: "https://t.me/GustafQuandong"
slug: "bitcoin-je-vrijeme"
img: 'bitcoin-je-vrijeme'
flag: 'croatia'
tags:
    - translation
---
> Jedan svjetleći sat na nebu \
Proglasio da vrijeme nije ni krivo ni ispravno.
Robert Frost, Upoznat s noći (1928.)
Vrijeme je za nas još uvijek velika misterija.
To nije ništa više od koncepta; ne znamo da li uopće postoji...
Clifford D. Simak, Shakespearov planet (1976.)

Vrijeme je novac, ili se tako barem kaže. Iz toga slijedi da je novac također vrijeme: prikaz kolektivne ekonomske energije koju je pohranilo čovječanstvo. Međutim, veza između vremena i novca je zamršenija nego što bi se na prvi pogled moglo činiti. Ako novac ne zahtijeva vrijeme za stvaranje, on ne funkcionira baš dobro kao novac, ili ne funkcionira dugo. Dublje, kao što ćemo vidjeti, praćenje  stvari u informacijskom području uvijek podrazumijeva praćenje vremena.

Čim novac postane digitalni, moramo se dogovoriti oko definicije vremena i u tome leži cijeli problem. Možda mislite da je određivanje vremena jednostavno kao i pogledati na bilo koji sat u blizini, i bili biste u pravu kada su u pitanju svakodnevni zadaci. Ali kada je u pitanju sinkronizacija stanja globalne, suparničke, distribuirane mreže, otkrivanje točnog vremena postaje gotovo nerješiv problem. Kako odrediti vrijeme ako se satovima ne može vjerovati? Kako stvoriti koncept singularnog vremena ako se vaš sustav proteže kroz galaksiju? Kako mjeriti vrijeme u bezvremenskom carstvu? I što je uopće vrijeme?

Da bismo odgovorili na ova pitanja, morat ćemo pobliže pogledati sam koncept vremena i kako Bitcoin stvara svoje vrijeme: vrijeme bloka --- poznatije kao visina bloka. Istražit ćemo zašto je problem mjerenja vremena usko povezan s vođenjem evidencije, zašto u decentraliziranom sustavu ne postoji apsolutno vrijeme i kako Bitcoin koristi kauzalnost i nepredvidljivost kako bi izgradio vlastiti osjećaj sadašnjeg trenutka.

Uređaji za mjerenje vremena transformirali su civilizacije više puta. Kao što je Lewis Mumford rekao 1934.: "Sat, a ne parni stroj, ključni je stroj modernog industrijskog doba." Danas, opet je uređaj za mjerenje vremena onaj koji transformira našu civilizaciju: sat, a ne računala, je istinski ključni uređaj modernog informacijskog doba. A taj sat je Bitcoin.

## Vođenje uredne evidencije

> Neka dijete nauči brojati stvari i tako dobiti pojam broja. Te se stvari, u svrhu brojanja, smatraju sličnima i mogu biti pojedinačni objekti ili skupine.
David Eugene Smith, Nastava osnovne matematike (1900.)

Vrlo široko govoreći, postoje dva načina praćenja stvari: fizički tokeni (žetoni) i vođenje evidencije. Možete izravno koristiti artefakte iz stvarnog svijeta, npr. nekome dati morsku školjku, novčić ili neku drugu opipljivu stvar, ili možete replicirati stanje svijeta tako što ćete zapisati što se dogodilo na komad papira.

Zamislite da ste pastir i želite se pobrinuti da se cijelo vaše stado vrati kući. Na svaku ovcu možete staviti ogrlicu, a čim se ovca vrati kući, jednostavno skinete ogrlicu i objesite je u svoju šupu. Ako imate jednu vješalicu za svaku ogrlicu, znat ćete da se svaka ovca sigurno vratila čim se sve vješalice popune. Naravno, možete ih i prebrojati i voditi evidenciju. Međutim, morat ćete stvoriti novu evidenciju svaki put kada počnete brojati, a također ćete morati paziti da niti jednu ovcu ne prebrojite dvaput (ili ne prebrojite uopće).

Novac je u biti alat za praćenje tko je kome koliko dužan. Općenito govoreći, sve što smo do sada koristili kao novac spada u dvije kategorije: fizički artefakti i informativni popisi. Ili, da koristimo uobičajeniji jezik: žetoni (token) i evidencije (ledger).

![](/images/content/blog/bitcoin-je-vrijeme/ledger-token.jpg)

Važno je shvatiti inherentnu razliku ovih kategorija, pa dopustite da to eksplicitno istaknem: prva metoda - fizički žeton - izravno predstavlja stanje stvari. Drugi - evidencija - posredno odražava stanje stvari. Svaki od njih ima prednosti i nedostatke. Na primjer, žetoni su fizički i distribuirani; evidencije su informacijske i centralizirane. Žetoni inherentno ne zahtijevaju povjerenje; evidencije zahtijevaju.

U digitalnom području --- bez obzira na to koliko vas gurui marketinga intenzivno pokušavaju uvjeriti u suprotno --- možemo koristiti samo evidencije. To je informatičko područje, a ne fizičko. Čak i ako određenu vrstu informacija nazovete "žetonom“ (tokenom), ona je i dalje savitljiva informacija, zapisana na tvrdom disku ili nekom drugom mediju koji može sadržavati informacije, što ih zapravo čini informatičkim zapisom.

Evidencijskolika priroda svih digitalnih informacija glavni je uzrok problema dvostruke potrošnje. Informacije nikada izravno ne predstavljaju stanje svijeta. Nadalje, kretanje informacija podrazumijeva kopiranje. Informacija postoji na jednom mjestu, a da biste je "premjestili", morate je kopirati na drugo mjesto i izbrisati na izvoru. Ovaj problem ne postoji u fizičkom području. U fizičkom području, zapravo možemo premjestiti stvari od točke A do točke B. Informatičko područje nema ovo svojstvo. Ako želite "premjestiti" informacije s popisa A na popis B, morate ih kopirati s A na B. Ne postoji drugi način.

Drugi način razmišljanja o tome je u smislu jedinstvenosti. Fizički tokeni su jedinstveni spojevi atoma čije sastavljanje nije lako replicirati. Čista informacija nema ovo svojstvo. Ako možete pročitati informacije, možete ih i savršeno kopirati. Praktično govoreći, proizlazi da su fizički tokeni jedinstveni, a digitalni tokeni nisu. Čak bih tvrdio da je "digitalni token" pogrešan naziv. Token može predstavljati tajnu informaciju, ali nikada neće predstavljati jedinstvenu, singularnu informaciju koja se ne može kopirati.

Ova razlika u svojstvima pokazuje da zaista ne postoji način za "predaju" informacija. Nemoguće je proslijediti digitalni token kao što biste proslijedili fizički jer nikada ne možete biti sigurni je li izvorni vlasnik uništio informacije na svom kraju. Digitalni tokeni, kao i sve informacije, mogu se širiti samo poput ideje.

> ... ako ti imaš jabuku, i ja imam jabuku, i mi zamijenimo jabuke --- svaki ostanemo sa samo jednom jabukom. Ali ako ti i ja imamo ideju i zamijenimo ideje --- svaki ostanemo s dvije ideje.
Charles F. Brannan (1949.)

Fizički tokeni --- ono što nazivamo "gotovina"--- slobodni su od ove dileme. U stvarnom svijetu, ako mi date novčić, vaš novčić je nestao. Nema čarobnog umnožavanja novčića, a jedini način da mi ga date je da mi ga fizički predate. Zakoni fizike ne dopuštaju vam da ga dvostruko potrošite.

Iako dvostruka potrošnja postoji u nedigitalnom području --- George Parker, prevarant koji je slavno "dvostruko potrošio" Brooklynski most i druge znamenitosti padaju na pamet --- zahtijeva razrađenu obmanu i lakovjerne kupce. U digitalnom području nije tako.

U digitalnom području, budući da uvijek imamo posla samo s informacijama, dvostruka potrošnja je inherentni problem. Kao što znaju svi koji su ikada kopirali datoteku ili koristili copy-and-paste, informacija je nešto što možete savršeno kopirati i nije vezana za medij na kojem se nalazi. Ako imate digitalnu fotografiju, na primjer, možete je kopirati milijun puta, pohraniti neke kopije na USB stick i poslati je tisućama različitih ljudi. Savršene kopije su moguće jer informacije omogućuju besprijekorno ispravljanje pogrešaka, što eliminira degradaciju. I kao vrhunac, nema gotovo nikakve cijene za umnožavanje i nema načina da se odredi koje je bio original.

Opet: kada su informacije u pitanju, kopiranje je sve što postoji. Jednostavno ne postoji način da se digitalne informacije premjeste od točke A do točke B. Informacije se uvijek kopiraju od A do B, a ako je proces kopiranja bio uspješan, originalna kopija A se briše. Zbog toga je problem dvostruke potrošnje tako kompliciran. U odsustvu središnjeg autoriteta, ne postoji način da se bilo što premjesti od A do B na način koji ne uključuje povjerenje. Uvijek morate vjerovati da će izvornik biti izbrisan. Prirodna nuspojava je da je, kada su u pitanju digitalne informacije, nemoguće reći koliko kopija postoji i gdje bi te kopije mogle biti.

Zbog toga, korištenje digitalnih "tokena" kao novca ne može i nikada neće funkcionirati. Budući da tokeni svoju pouzdanost deriviraju iz toga što ih je teško reproducirati, kao rezultat njihove jedinstvene fizičke konstrukcije, ova kvaliteta nestaje u digitalnom području. U digitalnom području, tokenima se ne može vjerovati. Kao rezultat prirode intrinzičnih svojstava informacija, jedini održivi format za digitalni novac nije token već evidencija --- što nas dovodi do problema vremena.

## Tokeni su bezvremenski, evidencije nisu

> Jer ono što se vidi je prolazno, a nevidljivo je vječno.
Pavao iz Tarza, Korinćanima 4,18b

Kada su u pitanju fizički tokeni, vrijeme transakcije nije važno. Novčiće ili imate u džepu, ili ih nemate; možete ih potrošiti ili ne možete. Jednostavan čin posjedovanja jedini je preduvjet za trošenje. Za ostalo se brinu zakoni prirode. U tom smislu, fizički tokeni su bezvremenski i nisu bazirani na povjerenju.

Kada je riječ o evidencijama, fizički posjed pada u vodu. Tko god ima kontrolu nad evidencijom, mora se pobrinuti da stvari budu u redu. Ono što inače osiguravaju zakoni fizike, a to je da ne možete trošiti novac koji nemate i ne možete trošiti novac koji ste već potrošili, mora se provoditi po ljudskim pravilima. Upravo ta pravila uređuju uredan rad i održavanje evidencije, a ne zakoni fizike.

Prelazak sa zakona fizike na pravila koja je stvorio čovjek je srž problema. Pravila koja je stvorio čovjek mogu se savijati i kršiti, zakoni fizike ne toliko. Na primjer, ne možete jednostavno "izmisliti" fizički zlatnik. Morate ga iskopati iz zemlje. Možete, međutim, apsolutno izmisliti zlatnik na papiru. Da biste to učinili, jednostavno dodate unos u evidenciju i date si nekoliko novčića. Ili, u slučaju središnjih banaka, jednostavno dodajte nekoliko bilijuna s nekoliko pritisaka na tipke na računalu. (Otkačeni financijski ljudi to zovu "rehipotekacija", "bankarstvo s frakcionalnim rezervama" ili "kvantitativno ublažavanje" --- ali nemojte da vas to zavara, sve je isto: izmišljanje novca.)

Da bi evidencije i oni koji njima manipuliraju bili pošteni, potrebne su redovite, neovisne revizije. Mogućnost obračuna svakog pojedinog unosa u evidenciju nije luksuz. Revizori moraju biti u mogućnosti pregledavati knjige --- unatrag u vrijeme --- kako bi knjige bile poštene i funkcionirale. Bez pouzdanih vremenskih oznaka, provjera interne konzistentnosti knjige je nemoguća. Neophodan je mehanizam za uspostavljanje nedvosmislenog reda.

Bez apsolutnog osjećaja za vrijeme, ne postoji način da imamo definiran redoslijed transakcija. A bez definiranog redoslijeda transakcija, pravila evidncije se ne mogu poštivati. Kako inače možete biti sigurni koliko novca zapravo imate? Kako inače možete biti sigurni da su stvari u redu?

Razlika između tokena i evidencija naglašava potrebu za praćenjem vremena. U fizičkom području, kovanice su bezvremenski artefakti koji se mogu razmjenjivati bez nadzora. U digitalnom području, žigosanje novčića zahtijeva žigosanje vremena.

## Centraliziranje žigosanja novčića

> Vrijeme: izvrstan graver ili brisalo.
Yahia Lababidi (r. 1973.)

Uobičajeni način rješavanja problema dvostruke potrošnje --- problem osiguravanja da se digitalni prijenos dogodi samo jednom --- je imati središnji popis transakcija. Nakon što imate središnji popis transakcija, imate jednu knjigu koja može djelovati kao jedini izvor istine. Rješavanje problema dvostruke potrošnje jednostavno je kao da prođete kroz popis i provjerite je li sve ispravno. Ovako PayPal, Venmo, Alipay i sve banke ovoga svijeta --- uključujući središnje banke --- rješavaju problem dvostruke potrošnje: putem središnjeg tijela.

> Problem je naravno što primatelj plaćanja ne može provjeriti da jedan od vlasnika nije duplo potrošio novčić. Uobičajeno rješenje je uvesti pouzdano središnje tijelo, ili kovnicu, koja provjerava svaku transakciju na dvostruku potrošnju. [...] Problem s ovim rješenjem je u tome što sudbina cijelog novčanog sustava ovisi o tvrtki koja vodi kovnicu, a svaka transakcija mora prolaziti kroz njih, kao i kroz banku.
Satoshi Nakamoto (2009.)

Vrijedi istaknuti da Satoshi nije uspio postignuti da se informacije ne mogu kopirati. Svaki dio bitcoina --- njegov izvorni kod, evidencija, vaš privatni ključ --- može se kopirati. Sve se to može duplicirati i mijenjati. Međutim, Satoshi je uspio izgraditi sustav koji kopije koje krše pravila čini kompletno i potpuno beskorisnima. Bitcoin mreža izvodi zamršen ples kako bi odlučila koje su kopije validne, a koje nisu, a upravo taj ples unosi dragocjenost u digitalno carstvo. I kao kod svakog plesa, potrebna je temporalna mjerna palica koja diktira ritam. Čak i centralizirana evidencija može riješiti problem dvostruke potrošnje samo ako ima dosljedan način praćenja vremena. Uvijek treba znati tko je kome koliko dao i, najvažnije: kada. U području informacija ne postoji žigosanje novčića bez žigosanja vremena.

> Mora se naglasiti da je nemogućnost povezivanja događaja s točkama u vremenu u distribuiranim sustavima bila neriješeni problem koji je onemogućio da decentralizirana evidencija ikad bude moguća sve dok Satoshi Nakamoto nije izumio rješenje.
Gregory Trubetskoy (2018.)

## Decentralizirano vrijeme

> Vrijeme donosi sve stvari.
Eshil (525. pr. - 456. pr. Kr.)

Vrijeme i red imaju vrlo intiman odnos. Kao što je Leslie Lamport istaknuo u svom radu iz 1978. „Vrijeme, satovi i poredak događaja u distribuiranom sustavu“: "Koncept vremena je temelj za naš način razmišljanja. Izveden je iz temeljnijeg koncepta redoslijeda u kojem se događaji događaju." U nedostatku središnje točke koordinacije, naizgled intuitivni pojmovi "prije", "poslije" i "istovremeno" se raspadaju. Lamportovim riječima: "koncept 'događanja prije' definira nepromjenjivi djelomični poredak događaja u distribuiranom višeprocesnom sustavu."

Drugačije rečeno: Tko bi trebao biti zadužen za vrijeme ako nije dopušteno postavljanje nekoga na čelo? Kako možete imati pouzdani sat ako ne postoji središnji referentni okvir?
Možda mislite da je rješavanje ovog problema jednostavno jer svatko može koristiti samo svoj sat. Ovo funkcionira samo ako je sat svima točan i, što je još važnije, svi igraju pošteno. U suprotstavljenom sustavu oslanjanje na pojedinačne satove bila bi katastrofa. I, zbog relativnosti, ne funkcionira dosljedno u svemiru.

Kao misaoni eksperiment, zamislite kako biste mogli prevariti sustav kada bi svatko bio zadužen za vođenje vremena za sebe. Mogli biste se pretvarati da je transakcija koju sada šaljete zapravo od jučer --- iz nekog razloga je samo odgođena --- na taj način i dalje biste imali sav novac koji ste danas potrošili. Zbog asinkrone komunikacije koja je svojstvena svakom decentraliziranom sustavu, ovaj scenarij je više od teorijskog misaonog eksperimenta. Poruke doista kasne, vremenske oznake su netočne, a zahvaljujući relativističkim efektima i prirodnom ograničenju brzine našeg svemira, sve je samo ne lako razlučiti poredak stvari bez središnjeg autoriteta ili promatrača.

> Tko je tamo? Kuc kuc.
Asinkrona šala

Kako bismo bolje ilustrirali nerješivost problema, pogledajmo konkretan primjer. Zamislite da i vi i vaš poslovni partner imate pristup bankovnom računu vaše tvrtke. Poslujete po cijelom svijetu, pa vam je bankovni račun u Švicarskoj. U New Yorku ste, a poslovni partner u Sydneyu. Za vas je 3. siječnja, a vi uživate u prekrasnoj nedjeljnoj večeri u svom hotelu. Za njega je već ponedjeljak ujutro, pa odlučuje kupiti doručak debitnom karticom vašeg zajedničkog bankovnog računa. Cijena je 27 dolara. Dostupni saldo je 615 dolara. Lokalno vrijeme je 8:21 ujutro. Istodobno ćete svoj boravak platiti drugom debitnom karticom povezanom s istim bankovnim računom. Cijena je 599 dolara. Dostupni saldo je 615 dolara. Lokalno vrijeme je 17:21.

![](/images/content/blog/bitcoin-je-vrijeme/alice-bob-bank.jpg)

Tako dolazi do toga da  --- u točno istom trenutku --- obojica povučete karticu. Što se događa? (Dragi fizičari, oprostite što koristim "isti trenutak" --- zanemarit ćemo relativističke efekte i činjenicu da za sada ne postoji apsolutno vrijeme u našem svemiru. Također ćemo zanemariti da koncept sinkronih događaja stvarno ne postoji. Bitcoin je dovoljno već dovoljno kompliciran takav kakav jest!) Središnja evidencija vaše banke vjerojatno će primiti jednu transakciju prije druge, tako da će jedan od vas imati sreće, a drugi ne toliko. Ako transakcije stignu u istom trenutku --- recimo u istoj milisekundi --- banka bi morala odlučiti tko će potrošiti novac. E sad, što bi se dogodilo da nema banke? Tko odlučuje tko je prvi provukao karticu? Što ako ne koordinirate samo vas dvoje, već stotine ili čak tisuće ljudi? Što ako ne vjerujete tim ljudima? Što ako neki od tih ljudi pokušavaju izvesti prevaru, npr. vraćajući satove unatrag tako da izgleda kao da su novac potrošili nekoliko minuta ranije?

> Alat koji se odnosi na vrijeme potreban je za uspostavljanje kanonskog reda i provedbu jedinstvene povijesti u odsutnosti središnjeg koordinatora.
Giacomo Zucco, Otkrivamo Bitcoin (2019.)

Upravo je ovaj problem razlog zašto su svi prethodni pokušaji digitalne gotovine zahtijevali centralizirani registar. Uvijek ste morali vjerovati nekome da ispravno identificira redoslijed stvari. Za održavanje vremena bila je potrebna centralizirana stranka. Bitcoin rješava ovaj problem ponovnim izmišljanjem samog vremena. On kaže ne sekundama i kaže da blokovima.

## Mjerimo vrijeme, blok po blok

> Slava vremena je smiriti svađene kraljeve,\
razotkriti laž i iznijeti istinu na vidjelo,\
utisnuti pečat vremena u ostarjele stvari,\
probuditi jutro i stražariti noć,\
učiniti nepravdu krivcu dok ne ispravi;
William Shakespeare, Silovanje Lucrece (1594.)

Svi satovi se oslanjaju na periodične procese, nešto što bismo mogli nazvati "otkucajem". Poznato kuckanje djedovog sata u biti je isto kao i molekularno-atomsko zujanje naših modernih kvarcnih i cezijevih satova. Nešto se ljulja --- ili oscilira --- i mi jednostavno brojimo te zamahe dok se ne zbroje u minutu ili sekundu. Za velike satove s njihalom, ove ljuljačke su dugačke i lako vidljive. Za manje i specijaliziranije satove potrebna je posebna oprema. Frekvencija sata --- koliko često otkucava --- ovisi o njegovom slučaju upotrebe. Većina satova ima fiksnu frekvenciju. Uostalom, želimo točno znati vrijeme.

Postoje, međutim, satovi koji imaju promjenjivu frekvenciju. Metronom, na primjer, ima promjenjivu frekvenciju koju možete postaviti prije nego što počnete otkucavati. Dok metronom održava konstantan tempo nakon što je postavljen, vrijeme Bitcoina varira za svaki tik jer je njegov unutarnji mehanizam vjerojatnost. Svrha je, međutim, ista: održati glazbu živom kako bi se ples mogao nastaviti.

| Sat                   | Frekvencija                          |
|-----------------------|--------------------------------------|
| Djedov sat            | ~0.5 Hz                              |
| Metronom              | ~0.67 Hz do ~4.67 Hz                 |
| Kvarcni sat           | 32768 Hz                             |
| Cezij-133 atomski sat | 9,192,631,770 Hz                     |
| Bitcoin               | 1 blok (0.00000192901 Hz* to ∞ Hz**) |

-* prvi blok (6 dana)
-** vremenske oznake između blokova mogu pokazati negativnu deltu

Činjenica da je Bitcoin sat skrivena je na površni pogled. Doista, Satoshi ističe da Bitcoinova mreža kao cjelina djeluje kao sat, ili, njegovim riječima: distribuirani poslužitelj vremenske oznake.

> U ovom radu predlažemo rješenje problema dvostruke potrošnje korištenjem peer-to-peer distribuiranog poslužitelja vremenske oznake za generiranje računskog dokaza o kronološkom redoslijedu transakcija.
Satoshi Nakamoto (2009.)

Da je vremenski žig bio temeljni problem kojega je trebalo riješiti, također je očito ispitivanjem reference na kraju manifesta o Bitcoinu. Od ukupno osam referenci, tri se odnose na vremensko označavanje:

>
  - Kako vremenski označiti digitalni dokument S. Habera, W.S. Stornetta (1991.)
  - Poboljšanje učinkovitosti i pouzdanosti digitalnog vremenskog žigosanja D. Bayer, S. Haber, W.S. Stornetta (1992.)
  -	Dizajn sigurne usluge vremenskog žiga s minimalnim zahtjevima povjerenja od strane H. Massiasa, X.S. Avila i J.-J. Quisquater (svibanj 1999.)

Kao što su Haber i Stornetta istaknuli 1991., digitalno vremensko žigosanje odnosi se na računalno praktične postupke koji korisniku  --- ili protivniku, što se toga tiče --- datiranje unatrag ili unaprijed, čine neizvedivim. Za razliku od fizičkih dokumenata, digitalne dokumente je lako mijenjati, a promjena ne ostavlja nužno nikakve znakove na samom fizičkom mediju. U digitalnom području krivotvorine i manipulacije mogu biti savršene. Savitljiva priroda informacija razlog je što je vremensko žigosanje digitalnih dokumenata detaljno razrađeni i sofisticirani proces. Naivna rješenja ne prolaze. Uzmimo, na primjer, tekstualni dokument. Ne možete jednostavno dodati datum na kraj dokumenta jer bi svi --- uključujući i vas --- mogli jednostavno promijeniti datum u budućnosti. Također, mogli biste izmisliti bilo koji datum.

## Vrijeme je kauzalni lanac

> U ekstremnom pogledu, svijet se može promatrati samo kao veze, ništa drugo.
Tim Berners-Lee, Weaving the Web (1999.)

Određivanje datuma je opći problem, čak i u nedigitalnom području. Ono što je u svijetu otmica poznato kao “autentifikacija putem novina” opće je rješenje problema proizvoljnih vremenskih oznaka.

![](/images/content/blog/bitcoin-je-vrijeme/proof-of-time.jpg)

Ovo funkcionira jer je novine teško lažirati i lako ih je provjeriti. Teško ih je lažirati jer se današnja naslovnica odnosi na jučerašnje događaje, događaje koje otmičar nije mogao predvidjeti da bi slika bila stara tjednima. Po proksiju ovih događaja, slika je dokaz da je taoc bio još živ na dan izlaska novina.

Ova metoda ističe jedan od ključnih pojmova kada je u pitanju vrijeme: kauzalnost (uzročnost). Strelica vremena opisuje uzročnu vezu događaja. Nema uzročnosti, nema vremena. Kauzalnost je također razlog zašto su kriptografske hash funkcije tako ključne kada su u pitanju dokumenti s vremenskim žigom u kibernetičkom prostoru: one uvode uzročnu vezu. Budući da je praktički nemoguće stvoriti valjani kriptografski hash bez odgovarajućeg dokumenta na prvom mjestu, uvodi se uzročna veza između dokumenta i hasha: dotični podaci su postojali prije, a hash je generiran kasnije. Drugim riječima: bez računalne ireverzibilnosti jednosmjernih funkcija ne bi bilo kauzalnosti u kibernetičkom prostoru.

![](/images/content/blog/bitcoin-je-vrijeme/sha256.jpg)

S ovim kauzalnim gradivnim blokom na mjestu, može se smisliti sheme koje stvaraju lanac događaja, uzročno-posljedično povezujući A s B i C i tako dalje. U tom smislu, sigurni digitalni vremenski žig pomiče nas iz bezvremenskog mjesta u eteru u područje digitalne povijesti. Kauzalnost fiksira događaje u vremenu.

Ako je neki događaj definiran određenim ranijim događajima i definira određene naknadne događaje, tada je događaj sigurno uklješten na svoje mjesto u povijesti. Bayer, Haber, Stornetta (1992.)

> Podrazumijeva se da je kauzalnost od najveće važnosti kada su u pitanju ekonomski proračuni. A budući da evidencija nije ništa drugo nego utjelovljenje ekonomskih proračuna više sudionika koji surađuju, kauzalnost je bitna za svaku evidenciju. Potreban nam je sustav kako bi se sudionici dogovorili o jedinstvenoj povijesti […].
Rješenje koje predlažemo počinje s poslužiteljem vremenske oznake.
Satoshi Nakamoto (2009.)

Fascinantno je da su svi dijelovi slagalice zbog kojih Bitcoin funkcionira ranije već postojali. Već 1991. Haber i Stornetta uveli su dvije sheme zbog kojih je “teško ili nemoguće proizvesti lažne vremenske oznake”. Prva se oslanja na treću stranu od povjerenja; druga, razrađenija shema “distribuiranog povjerenja” ne. Autori su čak identificirali inherentne probleme povjerenja u kauzalni lanac događaja i ono što bi bilo potrebno za ponovno pisanje povijesti. Po njihovim riječima, "jedina moguća prevara je priprema lažnog lanca vremenskih oznaka, dovoljno dugog da iscrpi i najsumnjivijeg izazivača kojeg čovjek očekuje." Sličan vektor napada danas postoji u Bitcoinu, u obliku 51% napada (više o tome u kasnijem poglavlju).

Godinu dana kasnije, Bayer, Haber i Stornetta su nadogradili svoj prethodni rad i predložili korištenje stabala umjesto jednostavnih povezanih popisa za povezivanje događaja. Ono što danas poznajemo kao Merkle Trees jednostavno su učinkovite strukture podataka za determinističko stvaranje hasha iz više raspršenih brojeva. Za vremensko označavanje, to znači da možete učinkovito grupirati više događaja u jednu "kvačicu". U istom radu, autori predlažu da bi se model distribuiranog povjerenja uveden 1991. mogao poboljšati provođenjem ponavljajućeg "svjetskog prvenstva" kako bi se odredio jedan "pobjednik" koji naširoko objavljuje rezultirajući hash negdje javno, poput novina. Zvuči poznato?

Kao što ćemo vidjeti, pokazalo se da su novine također izvrstan način razmišljanja o drugom sastojku vremena: nepredvidljivosti.

## Uzročnost i nepredvidljivost

> Vrijeme nije stvarnost [hupostasis], već koncept [noêma] ili mjera [metron]…
Antifona sofist, O istini (3. stoljeće n.e.)

Iako je kauzalnost bitna, ona sama nije dovoljna. Također nam je potrebna nepredvidljivost da bi vrijeme teklo. U fizičkom području promatramo prirodne procese kako bismo opisali tijek vremena. Uočavamo opći porast entropije i to nazivamo strelicom vremena. Iako se čini da su zakoni prirode u većini slučajeva nesvjesni u pogledu smjera ove strelice, neke stvari se, praktično govoreći, ne mogu poništiti. Ne možete odmutititi jaje, kako kažu.

Slično, funkcije povećanja entropije potrebne su za uspostavljanje strelice vremena u digitalnom području. Baš kao što je praktički nemoguće odmutititi jaje, praktički je nemoguće dešifrirati SHA256 hash ili kriptografski potpis.

Bez ovog povećanja entropije, mogli bismo ići naprijed i nazad u vremenu htjeli-ne htjeli. Slijed Fibonaccijevih brojeva, na primjer, je kauzalan, ali ne i entropijski. Svaki broj u nizu uzrokuju dva broja koja su bila prije njega. U tom smislu, to je kauzalni lanac. Međutim, nije korisno za određivanje vremena, jer je niz potpuno predvidljiv. Isto kao što otmičar ne može jednostavno stati ispred kalendara koji pokazuje današnji datum, ne možemo koristiti predvidljive procese kao dokaz vremena. Uvijek se moramo osloniti na nešto što se ne može unaprijed predvidjeti, poput naslovne stranice današnjih novina.

Bitcoin se oslanja na dva izvora nepredvidljivosti: transakcije i dokaz o radu (proof-of-work). Baš kao što nitko ne može predvidjeti kako će izgledati sutrašnje novine, nitko ne može predvidjeti kako će izgledati sljedeći Bitcoinov blok. Ne možete predvidjeti koje će transakcije biti uključene, jer ne možete predvidjeti koje će se transakcije emitirati u budućnosti. I, što je još važnije, ne možete predvidjeti tko će pronaći rješenje za trenutnu zagonetku dokazivanja rada i kakvo će to rješenje biti.

Međutim, za razliku od novina otmičara, dokaz o radu izravno je fizički povezan s onim što se dogodilo. To nije samo zapis događaja — to je sam događaj. Vjerojatnostna izravnost dokaza rada uklanja povjerenje iz jednadžbe. Jedini način da pronađete valjani dokaz o radu je puno nagađanja, a za samo jedno nagađanje potrebno je malo vremena. Vjerojatnostni zbroj ovih nagađanja je ono što izgrađuje vremenski lanac koji čini Bitcoin.

Koristeći kauzalnost hash lanaca i nepredvidljivost dokaza o radu, Bitcoin mreža pruža mehanizam za uspostavljanje neosporne povijesti događaja kojima smo svjedočili. Bez kauzalnosti, nemoguće je razdvojiti ono što je bilo prije i ono što je došlo poslije. Bez nepredvidljivosti, kauzalnost je besmislena.

Ono što svaki otmičar intuitivno shvaća, izričito su istaknuli Bayer, Haber i Stornetta 1992. godine: „Da bi se utvrdilo da je dokument nastao nakon određenog trenutka, potrebno je prijaviti događaje koji se nisu mogli predvidjeti prije nego što su se dogodili."

![dokaz o objavljivanju](/images/content/blog/bitcoin-je-vrijeme/proof-of-publication.jpg)

Upravo je kombinacija kauzalnosti i nepredvidljivosti ono što omogućuje stvaranje umjetnog "sada" u inače bezvremenskom digitalnom području. Kao što Bayer, Haber i Stornetta ističu u svom radu iz 1991.: „slijed klijenata koji traže vremenske oznake i hasheve koje predaju ne mogu se znati unaprijed. Dakle, ako uključimo bitove iz prethodnog niza zahtjeva klijenta u potpisani certifikat, tada znamo da se vremenska oznaka pojavila nakon ovih zahtjeva. […] No, zahtjev za uključivanjem bitova iz prethodnih dokumenata u certifikat također se može koristiti za rješavanje problema ograničenja vremena u drugom smjeru, jer tvrtka za vremensko žigosanje ne može izdavati kasnije certifikate osim ako ne raspolaže aktualnim zahtjevom .”

Svi dijelovi slagalice već su postojali. Ono što je Satoshi uspio je spojiti ih na način da iz jednadžbe ukloni "tvrtku s vremenskim žigom".

## Dokaz vremena

> Causa latet: vis est notissima.
Uzrok je skriven, ali rezultat je poznat.
Ovidije, Metamorfoze, IV. 287 (8. god.)

Rekapitulirajmo: da bismo koristili novac u digitalnom području, moramo se osloniti na evidencije. Da bi evidencije bile pouzdane, potreban je nedvosmislen red. Za uspostavljanje reda potrebne su vremenske oznake. Stoga, ako želimo u digitalnom području imati novac koji ne zahtijeva povjerenje, moramo ukloniti sve entitete koji stvaraju i upravljaju vremenskim oznakama i svaki pojedinačni entitet koji je zadužen za samo vrijeme.

Bio je potreban genije kao što je Satoshi Nakamoto da bi pronašao rješenje: “Da bismo implementirali distribuirani poslužitelj vremenske oznake na ravnopravnoj osnovi, morat ćemo koristiti sustav dokazivanja rada sličan Hashcashu Adama Backa.”

Moramo koristiti sustav dokazivanja rada (proof-of-work) jer nam treba nešto što je izvorno u digitalnom području. Nakon što shvatite da je digitalno područje informatičke (računalne) prirode, očit je zaključak da je računanje sve što imamo. Ako je vaš svijet napravljen od podataka, manipulacija podacima je sve što postoji.

Proof-of-work funkcionira u ravnopravnom okruženju jer se ne bazira na povjerenju, a ne bazira se na povjerenju jer je odvojen od svih vanjskih ulaza — kao što su očitanja satova (ili novina, u onom slučaju). Oslanja se na jednu i samo jednu stvar: računanje zahtijeva rad, a u našem svemiru rad zahtijeva energiju i vrijeme.

## Premošćivanje vremena
> Znam da mi radi.
Dok prelazimo most — zapaljeni most —
Sa plamenom iza nas,
Mi prednjačimo.
Ti i ja smo, dušo, protiv svijeta.
Kate Bush, Gorući most (1985.)

Bez dokaza o radu uvijek bismo naišli na problem proročice jer su fizičko i informacijsko područje vječno nepovezani. Oznake na vašem popisu ovaca nisu vaše ovce, karta nije teritorij, a sve što je napisano u jučerašnjim novinama nije nužno ono što se dogodilo u stvarnom svijetu. Na isti način, samo zato što koristite sat iz stvarnog svijeta za zapisivanje vremenske oznake ne znači da je to zapravo vrijeme.

Jednostavno rečeno, jednostavno ne postoji način za osigurati da podaci vjerno predstavljaju stvarnost, osim ako je stvarnost u pitanju inherentna samim podacima. Briljantna stvar kod Bitcoin-ovog dokaza o radu s varijabilnom zahtjevnošću  je to što on stvara vlastitu stvarnost, zajedno sa svojim prostorom i vremenom.

Dokaz o radu pruža izravnu vezu između digitalnog i fizičkog područja. Drugim riječima, to je jedina veza koja se može uspostaviti na način koji ne zahtijeva povjerenje. Sve ostalo će se uvijek oslanjati na vanjske inpute.

Zahtjevnost rudarenja novog Bitcoinovog bloka je prilagođena kako bi se osiguralo da tanka nit između Bitcoinovog vremena i našeg vremena ostane netaknuta. Poput sata, zahtjevnost rudarenja se prilagođava svakih 2016 blokova. Cilj ove prilagodbe je zadržati prosječno vrijeme od deset minuta između blokova. Upravo tih deset minuta održava stabilnu vezu između fizičkog i informacijskog područja. Posljedično, potreban je osjećaj za ljudsko vrijeme da bi se podesili otkucaji Bitcoin sata. Prilagodba koja bi se isključivo temeljila na blokovima ne bi funkcionirala jer bi bila potpuno odvojena od našeg ljudskog svijeta, a cijela svrha prilagodbe je spriječiti nas domišljate ljude u pronalaženju blokova prebrzo (ili presporo).

Kao što nam je Einstein pokazao, vrijeme nije statična stvar. Ne postoji takva stvar kao univerzalno vrijeme na koje bismo se mogli osloniti. Vrijeme je relativno, a istovremenost ne postoji. Zbog ove činjenice same po sebi sve su vremenske oznake — posebno na velikim udaljenostima  - inherentno nepouzdane, čak i bez suprotstavljnih aktera. (Usput, zbog toga se vremenske oznake GPS satelita moraju stalno prilagođavati.).

Za Bitcoin, činjenica da su naše ljudske vremenske oznake neprecizne nije previše važna. Također, nije važno što uopće nemamo apsolutni referentni okvir. Oni samo moraju biti dovoljno precizni da izračunaju donekle pouzdan prosjek kroz 2016 blokova. Kako bismo to zajamčili, vremenska oznaka "mesnog prostora" bloka prihvaća se samo ako ispunjava dva kriterija:
Vremenska oznaka mora biti veća od srednje vremenske oznake prethodnih 11 blokova.
Vremenska oznaka mora biti manja od vremena prilagođenog mreži plus dva sata. ("Vrijeme prilagođeno mreži" jednostavno je medijan vremenskih oznaka koje vraćaju svi čvorovi povezani s vama.)

Drugim riječima, prilagodba zahtjevnosti odnosi se na održavanje konstantnog vremena, a ne na stalnu razinu sigurnosti, težine ili potrošnje energije. Ovo je genijalno jer dobar novac mora koštati u vremenu, a ne energiji. Samo povezivanje novca s energijom nije dovoljno da proizvede apsolutnu dragocjenost, jer bi nam svako poboljšanje u proizvodnji energije omogućilo stvaranje više novca. Vrijeme je jedino čega nikada nećemo moći napraviti više. To je ultimativni resurs, kako ističe Julian Simon. To Bitcoin čini konačno ograničenim oblikom novca jer je njegovo izdavanje izravno povezano s konačno ograničenim resursom našeg svemira: vremenom.

Prilagodba zahtjevnosti je ključna jer bi bez nje unutarnji sat Bitcoina imao tendenciju ići sve brže kako se sve više rudara pridruži mreži ili se poboljšava učinkovitost uređaja za rudarenje. Brzo bismo naletjeli na problem koordinacije kojega Bitcoin namjerava riješiti. Čim vrijeme bloka padne ispod određenog praga, recimo, 50 milisekundi, bilo bi nemoguće dogovoriti se o zajedničkom stanju, čak ni u teoriji. Svjetlosti je potrebno oko 66 milisekundi da dođe s jedne strane Zemlje na drugu. Stoga, čak i da su naša računala i ruteri savršeni, vratili bismo se na početak: s obzirom na dva događaja, bilo bi nemoguće reći koji se događaj dogodio prije, a koji poslije. Bez povremenih prilagodbi bitcoina, naišli bismo na beznadni pokušaj rješavanja problema koordinacije brže od brzine svjetlosti. Vrijeme je također u korijenu problema kriptografske nestabilnosti, koji je opisan u poglavlju 1. Kriptografija funkcionira zbog asimetrije vremena: potrebno je kratko vrijeme da se izgradi kriptografski zid i dugo vrijeme da se probije — osim ako nemate ključ.

Stoga, u nekom smislu, dokaz o radu — i prilagodba zahtjevnosti koja ide uz to — umjetno usporava vrijeme, barem iz perspektive Bitcoin mreže. Drugim riječima: Bitcoin tjera njegov unutarnji ritam čija niska frekvencija omogućuje dovoljno međuspremnika za kašnjenje komunikacije između kolega. Svakih 2016 blokova interni Bitcoinov sat se prilagođava tako da će se — u prosjeku — samo svakih 10 minuta pronaći jedan važeći blok.

Iz vanjske perspektive, Bitcoin usmjerava kaotični nered globalno emitiranih asinkronih poruka u paralelni svemir, ograničen vlastitim pravilima i vlastitim osjećajem za prostor i vrijeme. Transakcije u mempoolu su bezvremenske sa stajališta Bitcoinove mreže. Tek kada je transakcija uključena u važeći blok, dodjeljuje joj se vrijeme: broj bloka u kojeg je uključena.

![BitCoin v0.01 ALPHA (2009)](/images/content/blog/bitcoin-je-vrijeme/timechain.png)

Teško je prenaglasiti koliko je ovo elegantno rješenje. Nakon što ste u mogućnosti stvoriti vlastitu definiciju vremena, trivijalno je dešifrirati ono što je bilo prije i što je došlo poslije. Zauzvrat, dogovaranje o tome što se dogodilo, kojim redoslijedom i, posljedično, tko kome što duguje, također postaje trivijalno.

Prilagodba zahtjevnosti osigurava da su otkucaji unutarnjeg Bitcoinovog metronoma donekle konstantni. Ono je dirigent Bitcoinovog orkestra. To je ono što glazbu održava živom.

Ali zašto se uopće možemo osloniti na posao? Odgovor je trostruk. Možemo se osloniti na njega zato  jer računanje zahtijeva rad, posao zahtijeva vrijeme, a posao o kojem je riječ  — pogađanje slučajnih brojeva  — ne može se obaviti učinkovito.

[Originalni tekst](https://dergigi.com/2021/01/14/bitcoin-is-time/)

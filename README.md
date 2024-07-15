# Keep Talking and Everybody Codes

Een repository om te laten zien hoe jij code schrijft en over code denkt.
Een startpunt voor een goed gesprek over ons vak!

## Context

Mogelijk ben je hier gekomen omdat je een tweede gesprek hebt met ons.
In zo'n gesprek willen we het hebben over techniek.
We willen zien hoe je code schrijft, hoe je er over denkt, wat je belangrijk vindt.
Kortom: we willen een gesprek over code ergens mee kickstarten.

Er zijn vele manieren om dat te doen.
Wellicht heb je open source projecten die je graag zou willen laten zien.
Mogelijk heb je een vorig project waar je code van wilt delen met ons.
En dat is een prima optie wat ons betreft.
Maar misschien heb je dat (nog) niet.
Daarmee komen we op deze repository: een startpunt om wat code te schrijven als basis voor een gesprek over techniek!

"Is dit nu een _test_?" vraag je je misschien af?
Het antwoord is wat ons betreft heel duidelijk: **nee**!
_Het heeft wél iets weg van een test_ (en dat is ook de bedoeling!), maar er zijn een aantal belangrijke verschillen:

- Het bepaalt niet of je wordt uitgenodigd (okay, tenzij je iets _heel_ geks doet). Dat hadden we namelijk al bedacht voordat we je hier naartoe stuurden. Je krijgt dus sowieso de kans om je keuzes toe te lichten.
- We willen dat je dit **timeboxed: 2 tot 4 uur**. Het is logisch dat je dan misschien niet aan alles toe komt. Dat geeft niet. Focus op laten zien wat je belangrijk vindt, en vertel ons over je keuzes daarin.
- Voor een 'test' kun je slagen of falen, of krijg je een eindcijfer. Dit is echter puur _input_ voor een volgend gesprek.

## De Opdracht

De opdracht bestaat uit drie onderdelen waarin je gebruik maakt van de dataset die je vindt in [data/cameras-defb.csv](data/cameras-defb.csv).
Je mag de opdracht doen in een taal en tech stack naar keuze (wij zijn zelf voornamelijk bekend met C#, JavaScript, TypeScript, PHP, Python, Java).

## CLI

Maak een programma of script dat de gebruiker in staat stelt om via de CLI te zoeken op een deel van een camera _name_, bijvoorbeeld:

```sh
# PHP via de CLI aanroepen
php search.php --name Neude

# Of als je .NET Core hebt gebruikt
dotnet Search --name Neude

# Etc.
```

Verwachte output:

```none
501 | UTR-CM-501 Neude rijbaan voor Postkantoor | 52.093421 | 5.118278
503 | UTR-CM-503 Neude plein | 52.093448 | 5.118536
504 | UTR-CM-504 Neude / Schoutenstraat | 52.092995 | 5.119088
505 | UTR-CM-505 Neude / Drakenburgstraat / Vinkenurgstraat | 52.092843 | 5.118351
506 | UTR-CM-506 Vinkenburgstraat / Neude | 52.092378 | 5.117902
507 | UTR-CM-507 Vinkenburgstraat richting Neude | 52.092234 | 5.117766
etc.
```

## API

Serveer de data uit de csv vanuit een REST API, zodat een webapplicatie die data ergens kan ophalen.

## Webapplicatie

Voor de front-end staat het je vrij om te kiezen of je wel of niet een framework gebruikt, en zo ja welk framework.
Bedenk wat je graag wilt laten zien en waar je het graag in het technische gesprek over wilt hebben.

### Pagina opzetten met data-tabel

Het eerste onderdeel van de front-end bestaat uit het ophalen van de data uit de API.
Toon de data verspreid over vijf kolommen op de homepagina van de applicatie.
_Optioneel_ kun je [code/index.html](https://github.com/infi-nl/everybody-codes/blob/main/code/index.html) als startpunt gebruiken.
De spreiding van de data moet gebeuren volgens de onderstaande regels en op basis van het nummer van de camera:

1. Kolom met camera's met nummers tot 600
2. Kolom met camera's met nummers 600 tot 700
3. Kolom met camera's met nummers 700 tot 800
4. Alle overige camera's

### Map met camera's plotten

Het tweede onderdeel bestaat uit het tonen van de camera's als markers op een map.
Toon _alle_ camera's als markers op een kaart van Utrecht, boven de tabel met camera-data.
De optionele opzet in [code/index.html] geeft een indicatie van hoe dit eruit moet zien.

Je mag een Map-tool naar eigen keuze gebruiken.
Heb je geen idee of geen voorkeur kun je goed de [quick start van Leaflet gebruiken](https://leafletjs.com/examples/quick-start/).
Die library suggereert dat je de OpenStreetMaps kaarten gebruikt, wat voor deze opdracht prima werkt, en op moment van schrijven geen ingewikkelde sign-up of credit card vereist.

Tip: [coordinaten 52.0914 bij 5.1115 zijn gecentreerd op Utrecht](https://www.openstreetmap.org/#map=14/52.0914/5.1115).

## Wat? Open Source?!

Jazeker, deze opdracht is open source!

"_Maar zijn jullie niet bang dat mensen dan gaan 'valsspelen'?_"
Hah, nou, die kans is niet heel veel groter dan wanneer we een losse opdracht zouden _mailen_.
We zijn graag open en eerlijk naar elkaar, en vertrouwen erop dat je gewoon zelf aan de slag gaat.
Bovendien, gekke dingen komen in ons gesprek uiteindelijk vanzelf wel bovendrijven...

"_Accepteren jullie dan ook.... pull requests?_"
Maar natuurlijk!
Het is alleen zeker niet het hoofddoel, dus focus vooral op de opdracht zelf.
Maar heb je achteraf nog een voorstel voor hoe dit beter kan, of wil je een taalfoudt oplossen: stuur maar op die PR's!
Of open even een issue als je twijfelt.

## Over die titel

Huh?

> Keep Talking and Everybody Codes

"_Wat is dat nou weer?_"
Sorry, woordgrapje gerelateerd aan [een toffe game](http://www.keeptalkinggame.com/).

## Licentie en Copyright

Zie [LICENSE.txt](LICENSE.txt) voor volledige details.
In het kort mag je gerust een fork onderhouden met een vertaling van de tekst, mits je je aan de voorwaarden van de license houdt.
Voor enkel het aanpassen van de README betekent dat simpelweg dat je (a) het werk attribueert (een fork geeft al de origin aan dus da's prima) en (b) je eigen modificaties onder dezelfde voorwaarden voor anderen beschikbaar stelt.
_Sharing is caring!_ 🧡😊

## Vertalingen

De volgende vertalingen van deze opdracht zijn door anderen gemaakt en onderhouden:

- English translation: https://github.com/FreekPaans/everybody-codes
- English translation: https://github.com/iChoosr-BVBA/everybody-codes (based on the above fork by FreekPaans)

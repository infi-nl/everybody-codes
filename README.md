# Keep Talking and Everybody Codes

Een repository als startpunt om te laten zien hoe jij code schrijft en over code denkt.
Een startpunt voor een goed gesprek over ons vak!

## Context

Mogelijk ben je hier gekomen omdat je een tweede gesprek hebt met ons.
In zo'n gesprek willen we het hebben over techniek.
We willen zien hoe je code schrijft, hoe je er over denkt, wat je belangrijk vindt.
Kortom: we willen een gesprek over code ergens mee kickstarten.

Er zijn vele manieren om dat te doen.
Wellicht heb je open source projecten die je graag zou laten zien.
Mogelijk heb je een vorig project waar je code van wilt delen met ons.
En dat is een prima optie wat ons betreft.
Maar misschien heb je dat (nog) niet.
Daarmee komen we op deze repository: een startpunt om wat code te schrijven als basis voor een gesprek over techniek!

"Is dit nu een _test_?" vraag je je misschien af?
Het antwoord is wat ons betreft heel duidelijk: **nee**!
_Het heeft wel degelijk iets weg van een test_ (en dat is ook de bedoeling!), maar er zijn een aantal belangrijkje dingen die dit anders maken:

- Het bepaalt niet of je wordt uitgenodigd (okay, tenzij je iets _heel_ geks doet), dat hadden we al bedacht voordat we je hier naartoe stuurden. Je krijgt dus sowieso de kans om je keuzes toe te lichten.
- We willen dat je dit timeboxed: 2 tot 4 uur. Het is logisch dat je dan misschien niet aan alles toe komt. Dat geeft niet. Focus op laten zien wat je belangrijk vindt, en vertel ons over je keuzes daarin.
- Voor een "test" kun je slagen of falen, of krijg je een eindcijfer. Dit is echter puur _input_ voor een volgend gesprek.

## De Opdracht

De opdracht bestaat uit drie onderdelen waarin je gebruik maakt van de dataset die je treft in [data/cameras-defb.csv](data/cameras-defb.csv).
Je mag de opdracht doen in een taal en tech stack naar keuze.
Gebruik je iets anders dan C#, PHP, Java, Python, of Ruby, vergeet dan niet wat beknopte "How to Run" instructies toe te voegen.
Wees wel zeer kritisch over gebruik van libraries en vooral ook van frameworks:
denk goed na of het helpt demonstreren hoe je graag code schrijft, en waar je goed in bent.

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
```

## API

Serveer de data uit de csv vanuit een web API, zodat een web applicatie die data ergens kan ophalen.

## Web Applicatie

Het eerste onderdeel bestaat uit het ophalen van de data uit de API.
Toon de data verspreid over vier kolommen in de gegeven [code/index.html](code/index.html).
De spreiding van de data moet gebeuren volgens de onderstaande regels en op basis van het `number` van de camera:

1. Als het `number` van de camera deelbaar is door 3, dan belandt hij in de eerste kolom
2. Als het `number` van de camera deelbaar is door 5, dan belandt hij in de tweede kolom
3. Als het `number` van de camera deelbaar is door zowel 3 als door 5, dan belandt hij in de derde kolom
4. Als het `number` van de camera niet deelbaar is door 3 en niet deelbaar is door 5, dan belandt hij in de laatste kolom

Het tweede onderdeel bestaat uit het tonen van de cameras als markers in Google Maps.
Toon _alle_ camera's in de `div` met id _map_ in de gegeven [code/index.html](code/index.html).
Uitleg over de werking, het aanmaken van een API-key en een code-voorbeeld vind je [in de Google Maps documentatie](https://developers.google.com/maps/documentation/javascript/examples/marker-simple).

## Wat? Open Source?!

Jazeker, deze opdracht is open source!

"_Maar niet bang dat mensen gaan 'valsspelen' dan?_"
Hah, nou, die kans is niet heel veel groter dan wanneer we een losse opdracht zouden _mailen_.
We zijn graag open en eerlijk naar elkaar, en vertrouwen erop dat je gewoon zelf aan de slag gaat.
Bovendien, dingen komen in ons gesprek uitendelijk vanzelf wel bovendrijven...

"_Accepteren jullie dan ook.... pull requests?_"
Maar natuurlijk!
Dat is zeker niet het hoofddoel, dus focus vooral op de opdracht zelf.
Maar heb je achteraf nog een voorstel voor hoe dit beter kan, of wil je een taalfoudt oplossen: stuur maar op die PRs!
Of open even een issue als je twijfelt.

## Over die titel

Huh?

> Keep Talking and Everybody Codes

"_Wat is dat nou weer?_"
Sorry, woordgrapje gerelateerd aan [een toffe game](http://www.keeptalkinggame.com/).
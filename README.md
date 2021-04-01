# Browser Technologies @cmda-minor-web 20-21

## Inhoud

| Inhoud |
| --- |
| Mijn case |
| Live Demo |
| Eindproduct |
| Installatie |
| Vereisten voor de case |
| Schetsen & Features |
| Ontwerp |
| Terug val plan |
| Wireflow |
| HTML elementen |
| Mogelijke Browser Technologies |
| Browser Technology |
| Progressive Enhancements |
| Functional layer |
| Usable layer |
| Pleasureble layer |
| Feature detection |
| Testverslag |


## De eindopdracht ✨ Progressive Enhanced Browser Technologie

Voor de eindopdracht ontwerp en maak je een interactieve toepassing volgens het principe van Progressive Enhancement. Zorg dat alle gebruikers, met alle browsers, in iedere context de toepassing zo goed mogelijk te zien, horen en/of voelen krijgen. De meest 'enhanced' versie is 'delightful UX', mooi en prettig om te gebruiken.

[De eindopdracht - Progressive Enhanced Browser Technologie](course/Eindopdracht.md)

## Mijn usecase

Ik heb gekozen voor Enquete over de minor Web Development. Of in elk geval een enquete lijkt me leuk. Als het onderwerp anders mag zijn zou ik dat ook graag doen.

## Live Demo

[Link naar live demo](https://minor-web-dev-survey.herokuapp.com/)

## Eindproduct

![Login](https://i.imgur.com/Ge2yDOF.png)
![Overzicht](https://i.imgur.com/3A99npM.png)
![Enquete](https://i.imgur.com/twnF28l.png)

## Installatie

Ga naar de juiste map:

```
cd yourDirectory
```

Clone de repo:

```
git clone https://github.com/mbergevoet/browser-technologies-2021.git
```

Once cloned:

```
npm install
```

Als alle dependencies zijn geïnstalleerd:

```
npm run dev
```

## Vereisten voor de case

-   Studentgegevens (naam + nummer) verplicht

-   Per vak
    -   naam
    -   docent(en)
    -   weken waarin je het vak deed
    -   beoordeling op schaal 1-10 van
    -   lesstof (hoe moeilijk is het)
    -   uitleg (hoe duidelijk is het uitgelegd)
    -   eigen inzicht (hoe goed snap je het)

-   Validatie: alles moet zijn ingevuld voordat je verder mag met het formulier. Geef duidelijke foutmeldingen.

-   Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

## Schetsen & Features

-   Er wordt een verschil gemaakt kunnen worden tussen een admin en een normale gebruiker
-   De gebruiker kan een vraag een score geven van 1 tot 10
-   De gebruiker kan door klikken naar de volgende vraag alleen als hij is ingevuld
-   De gebruiker kan zien bij welke vraag hij is en hoe lang het dan nog duurt
-   De gebruiker kan de enquete aan het einde kunnnen "versturen"
-   De gebruiker kan de pagina refreshen waarbij de browser onthoudt bij welke vraag hij was gebleven

![Enquete indeling](https://i.imgur.com/fZb7XEJ.jpg)
De gebruiker kan een vraag invullen en klikken naar de volgende vraag. (functional)
![Klaar scherm](https://i.imgur.com/mqc81qF.jpg)
Na het invullen komt er een verstuurd of klaar pagina. (pleasurable)
![Admin scherm](https://i.imgur.com/Xklxrzs.jpg)
Dit is het overzicht dat de admin ziet en waar hij een nieuwe vraag kan toevoegen. (functional)
![Inlog scherm](https://i.imgur.com/bS5jI0E.jpg)
Dit is het inlog scherm, het enige dat ik kon verzinnen om verschil te maken tussen normale gebruiker en admin. (pleasurable)

## Ontwerp

**Desktop Ontwerp**
![Desktop Ontwerp 1](https://i.imgur.com/biETYWH.png)

![Desktop Ontwerp 2](https://i.imgur.com/b2zymZM.png)

![Desktop Ontwerp 3](https://i.imgur.com/UzMoJqM.png)

**Mobiel Ontwerp** <br>
![Mobiel Ontwerp](https://i.imgur.com/AIKveSK.png)

## Terugval plan

![Plan](https://i.imgur.com/Q96M0F6.png)

## Wireflow

![Plan2](https://i.imgur.com/cUuwMFy.jpg)

## HTML elementen

Mogelijke opbouw van de HTML

```html
<form></form> <!-- Om de enquete in te vullen -->

<label></label> <!-- Om de vragen te kunnen weergeven -->

<input type="required"></input> <!-- Om de gebruiker iets in te laten vullen en te checken of de vraag wel is ingevuld -->

<button type="submit"></button> <!-- Om door te gaan naar de volgende vraag -->

<section></section> <!-- Om de verschillende vragen in weer te geven -->

<ul>
    <li></li> <!-- Om de lijst met vragen aan de admin te laten zien -->
</ul>

```

## Mogelijke Browser Technologies

-   Web Storage/ Cookies
-   Templates
-   Drag and Drop
-   CSS Grid/ Flex
-   Transitions/ Animations
-   Forms
-   Data posting

## Browser Technology

Voor mijn case heb ik web storage/ cookies/ localStorage gekozen als browser technology.

## Progressive Enhancements

<!-- Een beschrijving van de feature(s)/Browser Technologies die in je demo zijn gebruikt en hoe je dit PE hebt toegepast -->

- Het ontwerp ziet er duidelijk uit en zorgt voor een betere User Experience
- Er kunnen meerdere gebruikers een enquête invullen door in te loggen op een account.
- Per gebruiker word er bijgehouden welke enquete al helemaal is ingevuld.
- De enquête onhoudt wat je hebt ingevuld als je de pagina verlaad of refresht met behulp van localStorage.
- De enquête laat een check icoontje zien als je een invoerveld heb ingevuld.
- De enquête checkt of je invoervelden hebt ingevuld (behalve de sliders helaas) voor dat je het verstuurd.

Ik zal nu dieper in gaan op de features en in welke layer ze van toepassing zijn.

## Functional layer

![Enquete Pleasureble](https://i.imgur.com/7KaiEzt.png)

![Home](https://i.imgur.com/33uY28z.png)

De functional layer bevat al alles van de core funcionaliteit. Er zijn verschillende HTML pagina's beschikbaar die statisch of dynamisch via de server worden ingeladen. 
Het mogelijk om in te loggen bij de login pagina. Daarna kun je een enquête kiezen in het menu om hem in te vullen.  Dit komt omdat de logica allemaal via de server word gedaan en dus buiten de gebruiker en hun device ligt.
Er is bij het formulier geen validatie of feedback en het formulier staat onoverzichtelijk door elkaar. Na het invullen is het niet meer mogelijk om een enquête te openen. Dat word alleen gecommuniceerd met de gebruiker 
door dat er staat dat de betreffende enquête al is ingevuld en het nu normale tekst is in plaats van een `<a>` tag. 

## Usable layer

![Enquete Usable](https://i.imgur.com/uEVKPj8.png)

![Home](https://i.imgur.com/GnoWz7g.png)

In de usable layer wordt de enquête visueel verbeterd. Er is kleur gebruikt voor de tekst, achtergrond en knoppen en formulieren. Het formulier is correct opgemaakt waardoor alles onder elkaar staat. Er is rekening gehouden met 
een mobiele opmaak voor als gebruikers via hun mobiele device de website willen bezoeken. Bij de sliders in het formulier staat ook aangegeven welke mogelijke cijfers je kunt invullen als beoordeling en krijgen ook een bijpassende styling
die meer past bij de rest van het ontwerp.
Na het invullen van een enquête is nu met een minder heldere kleur aan gegeven dat je niet meer op een enquête kunt invullen. De core functionaliteit blijft verder onveranderd natuurlijk.

## Pleasureble layer

![Enquete Pleasureble](https://i.imgur.com/pE92IWc.png)

In de pleasurable layer komt alles samen en wordt de website niet alleen functioneel maar ook gebruikersvriendelijker. Met behulp van localStorage worden de invoervelden op het formulier van de gebruiker opgeslagen
waardoor het mogelijk wordt voor de gebruiker om de website compleet te verlaten of de pagina te refreshen. Bij terugkomst staan de ingevulde velden nog steeds vol. Daar nog bij detecteerd het formulier of je daadwerkelijk iets hebt ingevuld 
en geeft je een check icoontje als het is ingevuld.  

## Feature detection

Om te zorgen dat de code die zorgt voor het opslaan van de invoervelden alleen getriggerd word als localStorage daadwerkelijk beschikbaar is voer ik de volgende code uit:

```js
localStorageChecker = function () {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
}
```
Check if the localStorage is available - [Bron](https://gist.github.com/antoine-pous/c73e5a3a3b1e9507597d) 

Er word hier een test object weggeschreven in localStorage en ook weer verwijderd, als dat lukt returned de function `true`, als het fout gaat komt het in de catch die vervolgend `false` returned wat betekend dat localStorage niet beschibaar is. <br>
De function kan je daarna gebruiken om andere code heen en zet ik het in een if statement.

```js
if (localStorageChecker()) {
    // Hier de code die localStorage gebruikt
}
```
Voor de zekerheid heb ik ook nog een @supports statement in mijn CSS geschreven. Ik zocht op op caniuse.com wat de support was voor `position: relative;` `position: absolute;`. De support was niet 100%, zoals bij elk property eigenlij,k maar toch voor het geval heb ik het niet gesupport word teogevoegd.
```css
@supports (position: relative) {
	.range {
		position: relative;
	}
}
```

## Testverslag

### Browsers waarin ik ga testen

-   Chrome
-   Firefox
-   Android Chrome
-   Safari

<!-- een beschrijving van de feature-lijst die zijn onderzocht -->

<!-- welke browsers de feature(s) wel/niet ondersteunen -->

<!-- welke functionaliteiten zoals JavaScript je aan en uit hebt gezet in de tests -->

<!-- een screenreader test (dit gaan we bij het volgende vak Human Centred Design doen) -->

### Chrome

Omdat ik de website als eerste in Chrome gemaakt werkt hier alles zoals het zou moeten. 
Je kunt nogsteeds inloggen ookal is je javascript uit en je kunt het formulier ook nogsteeds versturen omdat daat allemaal via de server gebeurt.
Als ik Javascript uit zet worden de invoervelden natuurlijk ook niet meer opgeslagen en ook niet als ik cookies en daarmee ook localStorage uitzet worden de invoervelden ook niet meer opgeslagen.
Ook met gebruik van het toetsenbord werkt het invullen van het formulier goed. Door tab te gebruiken kun je van inputveld verwisselen en door de pijltjes toetsen kun je de datum input veranderen en de slider verschuiven.


### Firefox

Alles ziet er in eerste instantie het zelfde uit als in Chrome toen in testte in Firefox. Alleen op het formulier zien te sliders er raar uit omdat de styling die ik daar op heb toegepast alleen werkt voor Chome.
Daarom heb ik daar voor ook nog speciale Firefox styles toegevoegd die zorgen dat de sliders er het zelfde uit zien als in Chrome. Of bijna het zeldfe wand de hoekjes zijn niet zo afgerond als in Chrom het geval is (zie afbeeling hieronder).
Voor de andere features als de check icoontjes en de localStorage werken zoals zou moeten net als in Chrome. Het zelfde geld voor wanneer je Javascript uitzet of cookies

![Firefox test](https://i.imgur.com/7tmKzWI.png)

### Android Chrome

Ik heb de website ook op mijn eigen android telefoon bekeken. Daar zijn er wel wat dingen die me opvielen. De core functionaliteit blijft gelukkig wel werken, je kunt nog steeds alles invullen en versturen en de server houdt bij welke enquêtes je al hebt ingevuld.
Het eerst wat me opvalt is dat er geen datum template is net als op de computer voor de datum invoervelden (zie eerste afbeelding). Waarschijnlijk is dit gewoon iets van Android Chrome. Als je er eenmaal op klikt werkt hij wel gewoon maar het mist toch een stukje feedback
naar de gebruiker. En als tweede valt me op dat je wel de sliders kunt gebruiken om je cijfer in te voeren alleen verschijnen de check icoontjes hier niet bij (zie tweede afbeelding). Ik vermoed dat het te maken heeft met dat het `focusout` event niet goed werkt op sliders specifiek in Androind Chrome.
Zoals te zien is werken ze wel bij de datum invoervelden maar om één ondere reden niet bij de sliders. Het opslaan van de invoervelden in localStorage werkt ook gewoon zoals het zou moeten dus dat is wel heel goed. <br>

<img src="https://i.imgur.com/dlclr3l.jpg" width="400" alt="geen datum android chrome" style="display: inline;">
<img src="https://i.imgur.com/2fUJvmL.jpg" width="400" alt="geen checked icoontjes android chrome" style="display: inline;">

### Safari

En tenslotte heb ik de website in Safari getest. Daar waren helaas wel wat meer probleempjes. Gelukkig blijft ook hier de core functionaliteit gewoon werken. Als eerste is ook hier de datum preview afwezig en dat zal wel met mobiel te maken hebben vermoed ik dan (zie eerste afbeelding).
Daar is helaas niks aan te doen omdat de datum invoervelden gewoon een title hebben maar die komt daar blijkbaar dus niet te staan. Ten tweede is er net als in Android Chrome geen check icoontje te zien als je een slider invoerd (zie tweede afbeelding). Dit heeft denk ik ook de zelfde reden als in Android Chrome vermoed ik.
En als laatste lijkt de localStorage te werken voor de radio buttons en de datum invoervelden alleen niet voor de sliders (zie derde afbeelding). Er komt geen getalletje te staan achter de slider als de ik de pagina refresh en de slider verplaatst ook niet van plek en blijft gewoon op nul staan. In Android Chrome gebeurt dit allebei wel.
Het zou ook te maken kunnen hebben met de manier hoe localStorage slider opslaat in Safari. Dat het wel word opgeslagen maar niet getoont kan worden omdat ik een andere manier gebruik. <br>

<img src="https://i.imgur.com/HgPVUHw.jpg" width="400" alt="geen datum safari" style="display: inline;">
<img src="https://i.imgur.com/JUru6p0.jpg" width="400" alt="geen check icoontjes safari" style="display: inline;">
<img src="https://i.imgur.com/S6RORPL.jpg" width="400" alt="geen localStorage sliders safari" style="display: inline;">

### Screenreader test

Als screenrecoder heb ik de gratis app [NVDA](https://www.nvaccess.org/) gebruikt om een test mee te doen. Als je niks doet en je komt op een nieuwe pagina begint hij automatisch 
te laden van onder naar boven en als je je muis beweegt leest hij voor waar je over heen hovert. <br>
Hij leest het inlog scherm goed voor. Het enige irritante is dat hij alle HTML properties voorleest die een input veld allemaal bevat. Zo zegt hij bijvoorbeeld 
bij het veld waar je naam moet komen: "Hoofd inhoud oriëntatiepunt naam student invoerveld vereist ongeldige invoer heeft auto aanvullen naam achternaam leeg".
Dat is nog al wat informatie. Helaas is daar weinig aan te doen omdat die properties nou éénmaal nodig zijn voor de HTML. <br>
Het home scherm met de zeven vragen om in te vullen zijn allemaal duidelijk. Hij zeft zelfs als een link al bezocht is door te zeggen "Bezocht link". <br>
Op het formulier word ook alles goed voorgelezen. Ook hier word aangegeven of een invoerveld vereist is. 
Het vervelende is wel dat de afbeelding die ik heb gebruikt om een check icoontje weer te geven als een invoerveld is ingevuld ook word gelezen als "afbeelding checked icon" omdat dat ook in de HTML properties staat.
Dus eigenlijk zo ik het zo moeten maken dat de screen reader deze afbeelding overslaat als hij niet zichtbaar is. Want niet ziende mensen hebben toch ook vrij weinig aan de informatie dat daar een afbeelding staat.
Vervolgens worden de datum invoervelden zo voorgelezen: "Draai keuze knop klikbaar DD dag, Draai keuze knop klikbaar MM maand, Draai keuze knop klikbaar JJJJ jaar". Helaas is daar ook weinig aan te veranderen omdat nou een maal is hoe ze in elkaar zitten. 
De slider worden voorgelezen als: "Schuifregelaar" en word ook voorgelezen welke waarde de slider heeft wat ook erg handig is. <br>
Naar aanleiding van de screenreader test heb ik nog titles toegevoed aan invoervelden die dat nog niet hadden zoals de datum zodat het duidelijker is voor mensen die een screen reader gebruiken wat er precies moet worden ingevuld.

## License 
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

> This repository uses [MIT](https://github.com/mbergevoet/iCOV-redesign/blob/master/LICENSE) license. © Merlijn Bergevoet 2021




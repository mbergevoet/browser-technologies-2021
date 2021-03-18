# Browser Technologies @cmda-minor-web 20-21

## De eindopdracht ✨ Progressive Enhanced Browser Technologie

Voor de eindopdracht ontwerp en maak je een interactieve toepassing volgens het principe van Progressive Enhancement. Zorg dat alle gebruikers, met alle browsers, in iedere context de toepassing zo goed mogelijk te zien, horen en/of voelen krijgen. De meest 'enhanced' versie is 'delightful UX', mooi en prettig om te gebruiken.

-   [De eindopdracht - Progressive Enhanced Browser Technologie](course/Eindopdracht.md)

## Mijn usecase

Ik kies voor de Enquete over de minor Web Development. Of in elk geval een enquete lijkt me leuk. Als het onderwerp anders mag zijn zou ik dat ook graag doen.

## Live Demo

[Link naar live demo](http://mbergevoet.github.io/browser-technologies-2021)

## Vereisten

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
-   De admin kan nieuwe vragen toevoegen
-   De admin kan de nieuwe enquete opslaan

![Enquete indeling](https://i.imgur.com/fZb7XEJ.jpg)
De gebruiker kan een vraag invullen en klikken naar de volgende vraag. (functional)
![Klaar scherm](https://i.imgur.com/mqc81qF.jpg)
Na het invullen komt er een verstuurd of klaar pagina. (pleasurable)
![Admin scherm](https://i.imgur.com/Xklxrzs.jpg)
Dit is het overzicht dat de admin ziet en waar hij een nieuwe vraag kan toevoegen. (functional)
![Inlog scherm](https://i.imgur.com/bS5jI0E.jpg)
Dit is het inlog scherm, het enige dat ik kon verzinnen om verschil te maken tussen normale gebruiker en admin. (pleasurable)

## HTML elementen

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
-   Css Grid/ Flex
-   Transitions/ Animations
-   Forms
-   Data posting

## Browsers waarin ik ga testen

-   Chrome
-   Firefox
-   Android internet
-   IOS safari

## Eerste ontwerp

**Desktop Ontwerp**
![Desktop Ontwerp 1](https://i.imgur.com/biETYWH.png)

![Desktop Ontwerp 2](https://i.imgur.com/b2zymZM.png)

![Desktop Ontwerp 3](https://i.imgur.com/UzMoJqM.png)

**Mobiel Ontwerp**
![Mobiel Ontwerp](https://i.imgur.com/AIKveSK.png)

## Terug val plan
![Plan](https://i.imgur.com/Q96M0F6.png)
<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

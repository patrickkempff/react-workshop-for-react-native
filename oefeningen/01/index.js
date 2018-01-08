import React, { Component } from 'react';
import { Platform, Text, View, AppRegistry } from 'react-native';
/**
 * De gedachtengang van React is wel even wennen. De data-flow gaat namelijk maar
 * één kant op, wat ervoor zorgt dat de logica van de applicatie voorspelbaarder en
 * beter te begrijpen is. Het is wat lastig uit te leggen, maar als je er eenmaal mee
 * bezig bent wordt het een stuk duidelijker.
 *
 * Eén van de fijne punten in React is het werken in componenten. Alle logica en code
 * voor een bepaald component zit in één bestandje. Hier begint deze workshop ook mee.
 * De componenten worden in JSX geschreven, wat lijkt op een combinatie tussen HTML en
 * JavaScript. Verder wordt ook het doorgeven van data behandeld tussen componenten, waar
 * je dus in aanraking komt met de data-flow van React.
 *
 * In React is alles dus een component. Een component kan worden gemaakt met de
 * functie `React.createElement`. Het resultaat hiervan kan dan worden gebruikt door
 * `AppRegistry.registerComponent`.
 *
 * Later, wanneer we de basis onder de knie hebben, gaan we kijken hoe de ios / android laag
 * van react-native werkt.
 *
 * Voorbeeld:
 *
 *  ```
 *  AppRegistry.registerComponent('ReactNativeWorkshop', () => App)
 *  ```
 *
 *
 * Wat zegt de API?:
 *
 *  `AppRegistry.registerComponent` will render an element to the Native realm and takes two arguments:
 *    - module: This is the name of the React Native module, configured in the native code.
 *    - render: This function needs to return a valid react native component, this element wil be rendered.
 *
 *
 * Een react component bestaat altijd uit een ES6 class welke React.Component (of React.PureComponent)
 * extend. De enige vereiste implementatie is de render functie. Deze dient altijd 1 valide react-native
 * component terug te geven. Door <View /> terug te geven wordt een lege view gerendered, deze view is de basis
 * van bijna alle componenten in react-native. Dit component wordt ook vaak gebruik om andere view te groeperen en
 * te isoleren. Vergelijkbaar met UIView en ViewGroup op android. Voor het renderen van Text kan <Text>mijn tekst</Text>
 * worden gebruikt.
 *
 * JSX (de XML achtige syntax) is geheel optineel maar zorgt er wel voor dat je code veel declaratiever (vs imperative)
 * wordt.
 *
 * Laten we eens kijken naar een voorbeeld van (declaratieve) JSX:
 *
 *  ```
 *  class App extends Component {
 *    render () {
 *      return <Text>This is my component!</Text>
 *    }
 *  }
 *  ```
 *
 * Oefening 1A:
 *
 * Creëer een react-native component welke wordt gebruikt om de tekst "Hello World"
 * te weer te geven.
 *
 */

/*
 *
 * Goed bezig en denk erom:
 * https://s-media-cache-ak0.pinimg.com/originals/89/49/17/894917caa2734906cff27783e881dc14.jpg
 *
 * Let op voordat je verder gaat om de code van de vorige oefingen uit te commenten, anders krijgen we
 * een duplicate definition error van het App component.
 *
 *
 * Oefening 1B:
 *
 * Creëer een component dat `Text` gebruikt om het adress van de Efteling op deze manier weer te geven:
 *
 *   info@efteling.com
 *   +31 (0)416 288 111
 *   Europalaan 1, 5171 KW Kaatsheuvel
 *   Tweet: @Efteling
 *
 *
 */


/**
*
 * Omdat dit component een 'dom' component is, en altijd het zelfde rendered, zonder side effects,
 * kunnen we er een functional component van maken. Dit scheelt overhead van eventuele state lifecycles
 * maar heeft ook als voordeel dat er minder ook boilerplate nodig is.
 *
 * ```
 *  class App extends Component {
 *    render () {
 *      return <Text>Hello</Text>
 *    }
 *  }
 *
 *  const Hello = () => {
 *    return <Text>Hello</Text>
 *  }
 * ```
 *
 * Oefening 1C:
 *
 *  Refactor je vorige oplossing door gebruik te maken van een functional component.
 *
 *
 *
 */

/**
 *
 * Hier onder een stukje nerd uitleg waarom in mijn optiek JSX niet tegen best practices
 * in gaat:
 *
 * Nathan Hagen zegt hier het volgende over:
 *
 * A declarative style, like what react has, allows you to control flow and state in your application by saying
 * "It should look like this". An imperative style turns that around and allows you to control your application
 * by saying "This is what you should do".
 *
 * The benefit of declarative is that you don't get bogged down in the implementation details of representing state.
 * You're delegating the organizational component of keeping your application views consistent so you just have to
 * worry about state.
 *
 * Imagine you have a butler, who is kind of a metaphor for a framework. And you would like to make dinner.
 * In a imperative world, you would tell them step by step how to make dinner.
 * You have to provide theme these instructions:
 *
 * ```
 * Go to kitchen
 * Open fridge
 * Remove chicken from fridge
 * ...
 * Bring food to table
 * ```
 *
 * In a declarative world, you would simply describe what you want:
 * ```
 * I want a dinner with chicken.
 * ```
 *
 * If you butler doesn't know how to make chicken, then you cannot operate in a declarative style.
 * Just like if backbone doesn't know how to mutate its self to do a certain task, you can't just tell it to do that task.
 * React is able to be declarative because it "knows how to make chicken", for example. Compared to backbone, which only
 * knows how to interface with the kitchen.
 *
 * Being able to describe the state reduces the surface area for bugs dramatically, which is a benefit.
 * On the other hand, you might have less flexibility in how things occur, because you're delegating or abstracting away
 * how you implement the state.
 *
 *
 *
 * De JSX markup is bedoeld om overzichtelijkere en voorspelbaardere
 * componenten te ontwikkelen. Door HTML en javascript (nee css wordt niet vergeten) samen te
 * brengen in dezelfde laag (lees bestand) kan dit doel worden bereikt.
 *
 * Deze manier heeft aanvankelijk binnen de frontend wereld voor ophef gezorgd. De gevestigde
 * frameworks scheidden sinds mensen heugenis allemaal HTML en Javascript in aparte bestanden.
 * Deze benadering werd weer lang gezien als absolute 'best practice'. Dit werd door een aantal
 * ook wel separation of concerns genoemd.
 *
 * Maar is dat wel zo? Is het scheiden op deze manier wel separation of concerns?
 *
 * Nou.. nee, deze aanpak heeft eigenlijk niet zo veel met te maken met het scheiden van 'concerns'
 * Sterker nog, er worden hierdoor juist een aantal nieuwe 'concerns' geintroduceerd.
 * Deze manier is meer vergelijkbaar het met separation of technologies; we scheiden CSS, HTML
 * en Javascript van elkaar omdat het andere technologieen betreffen. Niet omdat ze zich bezig
 * houden met een andere concerns.
 *
 * Wait wut? Laten we voorbeeld gebruiken om dit iets te verduielijken;
 * We hebben een custom date range picker, dit component bestaat vaak uit css, html en javascript.
 * Simpel gezegd houden alle 3 de technologieen, zich voornamelijk bezig met hetzelfde 'concern':
 * namelijk, het faciliteren van visuele presentatie laag van de picker. Hoe deze picker aan zijn
 * data komt (denk aan dagen van de maand, datum van vandaag, enz.) is op dit moment niet zo relevant.
 *
 * Dat html en javascript hebben nog een andere functie hebben, namelijk strcutuur en interactie,
 * is goed te weerleggen. Horen symantiek en ineractie niet bij de presentatie laag?
 *
 * We scheiden dus html, css en javascript terwijl voornamelijk worden ingezet voor
 * de presentatie laag van de date range picker. Waarom werd dit dan zolang als best practice gezien?
 * Dit komt vooral omdat we jaren lang (nu nog steeds) gebruik maken CMS en server side content systemen
 * waarbij de templates in het systeem moesten zitten en de javascript en css vaak los werd gehouden.
 * Kijk bijvoorbeeld naar Sitecore met de cshtml/aspx files. De html template wordt in de data laag gebakken
 * en de css en javvascript komen er los boven op. Eigenlijk zou je data en presentatie van elkaar
 * willen scheiden. Het CMS als content provider en een apparte laag welke deze data omzet naar een
 * presenteerbare interface zodat de 2 hoofd concerns van iedereen webapp gescheiden kunnen worden;
 * data laag en presentatie laag.
 *
 * Om een lang verhaal lang te maken, terug naar JSX. JSX stelt ons dus in staat om vitale presentaie
 * concerns op de logische plek binnen de applicatie te borgen.
 *
 *
 */

  if (typeof App === 'undefined') {
    throw new Error('App component is niet gedefineerd, begin bij opdracht 1 in `/oefeningen/01/index.js`')
  }

  AppRegistry.registerComponent('ReactNativeWorkshop', () => App);

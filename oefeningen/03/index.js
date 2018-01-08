import React, { Component } from 'react';
import { Platform, Text, View, TextInput, AppRegistry } from 'react-native';
/**
 * Styling van React componenten lijkt sterk op hoe je native HTML element
 * zou stylen. Er is echter maar 1 optie: inline styles. Deze styling
 * kan worden doorgegeven aan het component via de inmiddels bekende `props`.
 *
 * Voorbeeld:
 *
 *  ```
 *  registerComponent('ReactNativeWorkshop', <View style={{...styling}} />)
 *  ```
 *
 * De inline styling worden gedefineerd als een javascript object. Ondanks dat inline styles nog vaak als anti pattern
 * worden gezien in de web wereld, wordt deze methode toch steeds populairder omdat dit een aantal grote voordelen
 * met zich mee brengen. Om het simpel te houden gaan we hier nog niet op in.
 *
 * Voorbeeld:
 *
 *  ```
 *  registerComponent('ReactNativeWorkshop', <View style={{width: 100, height: 100, backgroundColor: 'red'}} />)
 *  ```
 *
 * Positioneren van componenten wordt gedaan middels Flexbox. Dit princiepe kennen we vanuit het web. Deze werkt
 * hetzelfde als op het web met een aantal uitzonderingen; standaard waardes zijn anders. (flexDirection staat standaard
 * op column ipv row en de flex parameter ondersteund alleen een enkel nummer)
 *
 * Meer informatie:
 * https://facebook.github.io/react-native/docs/flexbox.html
 *
 *
 * Oefening 3A:
 *
 *  Creëer 3 `Box` componenten met 3 verschillende afmetingen, welke naast elkaar staan
 *    - klein: 25x25, kleur red
 *    - middel 90x90, kleur blauw
 *    - groot 150x150, kleur groen met 50% transparantie
 *
 *  Success!
 */

/**
 *
 *
 *
 * Oefening 3B:
 *  Nu is het tijd om de afmetingen en de kleur een responsibility van het `Box` component te maken.
 *    Voeg de `size` enum met small, medium, large toe, op basis van deze size wordt afmeeting en kleur van de box bepaald.
 */


/**
 * Oefening 3C:
 *  Voeg de `bg` prop toe, welke de kleur doorgeeft aan de onderliggende view, deze overschrijft de kleur van de
 *  de afmeting.
 */



/**
 *
 * Nu is het tijd om styling en propType validatie toe te passen.
 *
 * Oefening 3D:
 *  Maak gebruik van het box component van oefening 3B / 3C en voeg propType
 *  validatie toe. Alleen de `sizes` large, medium en small zijn toegestaan.
 *  De `size` en `bg` props zijn verplicht.
 *
 */

/**
 * Oefening 3C:
 *  Maak `size` optioneel, waneer er geen size wordt meegestuurd wordt medium
 *  gebruikt.
 */

/**
 * Oefening 3E (Bonus):
 *  Voeg de prop `rotation` toe, hiermee moet worden kunnen worden aangegeven of de box
 *  een rotatie moet krijgen en hoeveel. Indien er geen rotatie word meegegeven wordt er
 *  ook geen rotatie gezet.
 */


 // Helper functie voor het bootstrappen van react-native app.
 function registerComponent (module, component) {
    const bootstrap = comp => () => () => comp
    AppRegistry.registerComponent(module, bootstrap(component))
 }

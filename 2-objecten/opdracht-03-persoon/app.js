// Stap 1

// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Naam: de naam van de persoon (string)
//     Leeftijd: de leeftijd van de persoon (number)
//     Geboortedatum: de geboortedatum van de persoon (string)
//     Geslacht: het geslacht van de persoon (string)
//     In leven: geef aan of de persoon nog leeft (boolean)
//     Hobby’s: 4 hobby’s van de persoon (array)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:

// Het object moet ook de volgende methods bevatten:

//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.

// Gebruik geen arrow function in een object!

const person = {
    Naam: 'Lukasz',
    Leeftijd: 18,
    Geboortedatum: '1-10-2007',
    Geslacht: 'Man',
    InLeven: 'Levend',
    Hobbys: ["gymmen ", "lezen ", "kleding-kopen ", "gamen "],

    naamWijzigen: function() {
        this.Naam = 'Berkan'
        return this.Naam;
    },
    levendStatus: function() {
        this.InLeven = 'Dood'
        return this.InLeven;
    },
    addHobby: function() {
        return this.Hobbys.push( 'coderen') 
    }

}

person.naamWijzigen('Berkan')
person.levendStatus('Dood')
person.addHobby('coderen')

let output = document.querySelector(".output")

output.innerHTML = `
    <h1>Naam: ${person.Naam}</h1>
    <p>Leeftijd: ${person.Leeftijd}</p>
    <p>Geboortedatum: ${person.Geboortedatum}</p>
    <p>In Leven: ${person.InLeven}</p>
    <p>Hobby's: ${person.Hobbys}</p>
`
// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Titel: de titel van het boek (string)
//     Auteur: de auteur van het boek (string)
//     Uitgeverij: de uitgeverij van het boek (string)
//     Jaar: het jaar van publicatie van het boek (number)
//     Verkocht: aantal verkochten exemplaren (number)
//     Prijs: prijs van het boek (string)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor maak je in je HTML een div-tag aan met de class 'output'.

// In de theorie staat uitgelegd hoe je dit moet doen.

// Let op: in de code conventions staat dat je de code in het Engels moet schrijven!

const boek = {
    Titel: 'Coding with Jason',
    Auteur: 'Jason',
    Uitgeverij: 'Mevrouw el Omari',
    Jaar: '2025',
    Verkocht: '100',
    Prijs: '$11'

}

let output = document.querySelector('.output');

output.innerHTML = `
    <h1>Titel: ${boek.Titel}</h1>
    <p>Auteur: ${boek.Auter}<p>
    <p>Uitgeverij: ${boek.Uitgeverij}</p>
    <p>Jaar: ${boek.Jaar}</p>
    <p>Verkocht: ${boek.Verkocht}</p>
    <p>Prijs: ${boek.Prijs}</p>
    `
    


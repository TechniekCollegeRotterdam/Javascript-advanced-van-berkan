let output = document.querySelector('.birthday')
let out = '';

fetch('./birthday.json')
    .then((response) => response.json())
    .then((birthdays) => {
     for (let birthday of birthdays) {
        out += `
          <h1>${birthday.Naam}</h1>
          <h2>${birthday.Leeftijd}</h1>
          `;
    }

output.innerHTML = out;
});


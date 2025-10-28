const container = document.getElementById('birthday-container');
const clearBtn = document.getElementById('clear-btn');

let out = '';

fetch('birthday.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Bestand niet gevonden');
    }
    return response.json();
  })
  .then(data => {
    for (let birthday of data) {
      out += `
        <div>
          <img src="${birthday.Afbeelding}" alt="${birthday.Naam}">
          <div>
            <h2>${birthday.Naam}</h2>
            <p>Leeftijd: ${birthday.Leeftijd}</p>
          </div>
        </div>
      `;
    }
    container.innerHTML = out;
  })
  .catch(error => {
    console.log('Er ging iets mis:', error);
    container.innerHTML = '<p>Data kon niet geladen worden.</p>';
  });

clearBtn.addEventListener('click', () => {
  container.innerHTML = '';
});

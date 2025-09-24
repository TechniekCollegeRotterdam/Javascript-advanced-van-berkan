console.log('🚀 Opdracht 3.4: Email Validatie');

function valideerEmail(email) {
    // verwijder spaties aan begin/einde
    const schoonEmail = email.trim();

    // Check: bevat '@' en geen spaties
    if (!schoonEmail.includes('@') || schoonEmail.includes(' ')) {
        return false;
    }

    // Check geldig einde
    const geldigeEindes = ['.com', '.nl', '.org'];
    const geldigEinde = geldigeEindes.some(einde => schoonEmail.endsWith(einde));

    return geldigEinde;
}

// Test de functie
const testEmails = ['jan@test.com', 'marie@voorbeeld.nl', 'fout@test.be', 'fout email@test.com'];
testEmails.forEach(email => {
    console.log(`${email}: ${valideerEmail(email)}`);
});

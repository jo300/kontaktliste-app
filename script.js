let kontakte = [];

const form = document.getElementById("kontakt-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const telefonInput = document.getElementById("telefon");
const kontaktListe = document.getElementById("kontakt-liste");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  kontaktHinzufuegen();
});

function kontaktHinzufuegen() {
  const neuerKontakt = {
    id: Date.now(),
    name: nameInput.value,
    email: emailInput.value,
    telefon: telefonInput.value,
  };

  kontakte.push(neuerKontakt);
  formularLeeren();
  kontakteAnzeigen();
}

function formularLeeren() {
  nameInput.value = "";
  emailInput.value = "";
  telefonInput.value = "";
}

function kontakteAnzeigen() {
  kontaktListe.innerHTML = "";

  kontakte.forEach(function (kontakt) {
    const kontaktDiv = document.createElement("div");
    kontaktDiv.className = "kontakt-item";
    kontaktDiv.innerHTML = `
          <h3>${kontakt.name}</h3>
          <p>E-Mail: ${kontakt.email}</p>
          <p>Telefon: ${kontakt.telefon}</p>
          <button onclick="kontaktLoeschen(${kontakt.id})">Löschen</button>
        `;

    kontaktListe.appendChild(kontaktDiv);
  });
}

function kontaktLoeschen(id) {
  kontakte = kontakte.filter((kontakt) => kontakt.id !== id);
  kontakteAnzeigen();
}

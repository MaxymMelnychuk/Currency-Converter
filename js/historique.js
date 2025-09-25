const submitBtn = document.querySelector(".btn.ghost");
const valeur = document.getElementById("amount");
const resultDiv = document.querySelector(".btn.primary");
const selectDevise = document.getElementById('from'); 
const selectDevise2 = document.getElementById('to'); 

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const valeurUser = valeur.value;
    const deviseChoisie = selectDevise.value; 
    const deviseChoisie2 = selectDevise.value; 

    if (valeurUser === "" || valeurUser <= 0) {
        resultDiv.innerHTML = "Veuillez entrer une valeur numérique valide supérieure à zéro.";
      } else {
        resultDiv.innerHTML = "Enregistrement en cours";
        enregister(valeurUser, deviseChoisie, deviseChoisie2);
    }
});

function enregister(valeurUser, deviseChoisie, deviseChoisie2) {
    let historique = JSON.parse(localStorage.getItem("historique")) || [];
    historique.push({ valeur: valeurUser, devise: deviseChoisie, devise2: deviseChoisie2 });
    localStorage.setItem("historique", JSON.stringify(historique));
    resultDiv.innerHTML = "Valeur enregistrée avec succès !";
}
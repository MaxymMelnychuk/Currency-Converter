const submitBtn = document.getElementById("submitBtn");
const valeur = document.getElementById("amount");
const resultDiv = document.querySelector(".btn.primary");
const selectDevise = document.getElementById('from');
const selectDevise2 = document.getElementById('to');

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const valeurUser = valeur.value;
    const deviseChoisie = selectDevise.value;
    const deviseChoisie2 = selectDevise2.value;
    const resultText = resultDiv.textContent;

    if (valeurUser === "" || valeurUser <= 0) {
    } else {
        enregister(valeurUser, deviseChoisie, deviseChoisie2, resultText);
    }
});

function enregister(valeurUser, deviseChoisie, deviseChoisie2, resultText) {
    let historique = JSON.parse(localStorage.getItem("historique")) || [];
    const date = new Date().toLocaleDateString();
    historique.push({ valeur: valeurUser, devise: deviseChoisie, devise2: deviseChoisie2, resultat: resultText, date: date });
    localStorage.setItem("historique", JSON.stringify(historique));
    afficherHistorique();
}


function afficherHistorique() {
    const historique = JSON.parse(localStorage.getItem("historique")) || [];
    const entryDiv = document.querySelector(".history-container");
    entryDiv.innerHTML = ""; 
    historique.forEach(entry => {
        entryDiv.innerHTML += `
        
            <div class="history-list">
                <div>
                    <p>${entry.valeur} ${entry.devise} = ${entry.resultat}</p>
                </div>
                <p>${entry.date}</p>
            </div>
            
        `;
    });
}

const clearBtn = document.getElementById("clearBtn")

clearBtn.addEventListener("click", function() {
    console.log("bouton presse")
    let historique = JSON.parse(localStorage.getItem("historique")) || [];
    historique = [];
    localStorage.setItem("historique", JSON.stringify(historique));
    afficherHistorique();
})

afficherHistorique();



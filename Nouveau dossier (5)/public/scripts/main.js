const cardNumberInput = document.getElementById("cardNumber");
const cardExpireInput = document.getElementById("card_Expr");
const cardCVCInput = document.getElementById("card_CVC");
const cardIcon = document.getElementById("cardType")
visa = "fab fa-cc-visa"
mastercard = "fab fa-cc-mastercard"
amex = "fab fa-cc-amex"
discover = "fab fa-cc-discover"
jcb = "fab fa-cc-jcb"
diners = "fab fa-cc-diners-club"
const cleaveNum = new Cleave(cardNumberInput, {
    creditCard: true,
    delimiter: "-",
    onCreditCardTypeChanged: function(type) {
        switch (type) {
            case "visa":
                cardIcon.setAttribute("class", visa);
                break;
            case "mastercard":
                cardIcon.setAttribute("class", mastercard);
                break;
            case "amex":
                cardIcon.setAttribute("class", amex);
                break;
            case "jcb":
                cardIcon.setAttribute("class", jcb);
                break;
            case "discover":
                cardIcon.setAttribute("class", discover);
                break;
            case "diners":
                cardIcon.setAttribute("class", diners);
                break;
            default:
                cardIcon.setAttribute("class", "");
        }
    }
});
const cleaveDate = new Cleave(cardExpireInput, {
    date: true,
    datePattern: ['m', 'y']
});

const cleaveCode = new Cleave(cardCVCInput, {
    numericOnly: true,
    blocks: [3]
})

const payerButton = document.getElementById("payer");
const paymentMessage = document.getElementById("paymentMessage");

payerButton.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page par défaut

    // Effectuez ici la validation du paiement
    // Vous pouvez ajouter votre logique de validation ou appeler une fonction de validation existante

    // Exemple : vérifiez si la case à cocher des termes et conditions est cochée
    const termsAccepted = document.getElementById("accept-terms").checked;

    if (termsAccepted) {
        paymentMessage.textContent = "Paiement validé avec succès!";
    } else {
        paymentMessage.textContent = "Veuillez accepter les termes et conditions pour effectuer le paiement.";
    }
    closeBtn.addEventListener("click", function() {
        // Cache le message de confirmation
        confirmationMsg.style.display = "none";
      });
});




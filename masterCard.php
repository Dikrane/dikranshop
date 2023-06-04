<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // récupérer les données du formulaire
    $name = $_POST['name'];
    $cardNumber = $_POST['cardNumber'];
    $expiryDate = $_POST['expiryDate'];
    $cvv = $_POST['cvv'];
    $amount = $_POST['amount'];
    $currency = $_POST['currency'];

    // TODO: traiter les données de paiement, envoyer un e-mail de confirmation, enregistrer les données dans une base de données, etc.

    // Rediriger l'utilisateur vers une page de confirmation de paiement
    header('Location: confirmation.php');
    exit();
} else {
    // Si l'utilisateur accède à ce fichier directement, rediriger vers la page d'accueil
    header('Location: index.php');
    exit();
}
?>



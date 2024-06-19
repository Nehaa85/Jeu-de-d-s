// Initialisation des variables
let scores, roundScore, activePlayer, gamePlaying;

init();

// Fonction de lancement du dé
function rollDice() {
    if (gamePlaying) {
        // 1. Nombre random
        let dice = Math.floor(Math.random() * 6) + 1;

        // 2. Afficher les résultats
        let diceDOM = document.querySelector('.des img');
        diceDOM.style.display = 'block';
        diceDOM.src = 'images/des' + dice + '.png';

        // 3. Mettre à jour le score du tour SI(IF) le numéro obtenu n'était PAS(ELSE) un 1
        if (dice !== 1) {
            // Ajouter le score
            roundScore += dice;
            document.querySelector('.player' + (activePlayer + 1) + ' .current span').textContent = roundScore;
        } else {
            // Afficher le dé 1 avant de passer au joueur suivant
            diceDOM.src = 'images/des1.png';  // Spécifique pour le dé 1
            gamePlaying = false;  // Anti-triche : Permet de désactiver temporairement les actions
            setTimeout(() => {
                nextPlayer();
            }, 2000);  // Attendre 2 secondes avant de changer de joueur
        }
    }
}

// Fonction de maintien du score
function hold() {
    if (gamePlaying) {
        // Ajouter le score ACTUEL au score GLOBAL
        scores[activePlayer] += roundScore;

        // Mettre à jour l'UI
        document.querySelector('.player' + (activePlayer + 1) + ' .global').textContent = scores[activePlayer];

        // Vérifiez si le joueur a gagné la partie
        if (scores[activePlayer] >= 100) {
            document.querySelector('.player' + (activePlayer + 1) + ' .global').textContent = 'Winner!';
            document.querySelector('.des img').style.display = 'none';
            gamePlaying = false;
        } else {
            // Prochain joueur
            nextPlayer();
        }
    }
}

// Fonction pour passer au joueur suivant
function nextPlayer() {
    // Change de joueur
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // Réinitialiser les scores en affichage
    document.querySelector('.player1 .current span').textContent = '0';
    document.querySelector('.player2 .current span').textContent = '0';

    // Change d'état d'active
    document.querySelector('.player1').classList.toggle('active');
    document.querySelector('.player2').classList.toggle('active');

    // Masquer le dé
    document.querySelector('.des img').style.display = 'none';

    // Mise à jour des indicateurs pour le joueur actif
    document.querySelector('.player1 .activeIndicateur').style.display = activePlayer === 0 ? 'block' : 'none';
    document.querySelector('.player2 .activeIndicateur').style.display = activePlayer === 1 ? 'block' : 'none';

        // Réactiver les actions (Suite à l'anti-triche)
        gamePlaying = true;
}

// Fonction pour initialiser ou réinitialiser le jeu
function resetGame() {
    init();
}

// Fonction d'initialisation
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.player1 .global').textContent = '0';
    document.querySelector('.player2 .global').textContent = '0';
    document.querySelector('.player1 .current span').textContent = '0';
    document.querySelector('.player2 .current span').textContent = '0';

    document.querySelector('.des img').style.display = 'none';

    document.querySelector('.player1').classList.add('active');
    document.querySelector('.player2').classList.remove('active');
    document.querySelector('.player1 .activeIndicateur').style.display = 'block';
    document.querySelector('.player2 .activeIndicateur').style.display = 'none';
}

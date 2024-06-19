# Jeu de Dés

## Description

Ce projet est une implémentation d'un jeu de dés pour deux joueurs. Le but du jeu est d'atteindre 100 points en cumulant des scores obtenus par le lancer d'un dé. Le jeu comprend des fonctionnalités telles que le maintien du score et le changement de joueur lorsque le dé affiche 1.

## Utilisation

- **Nouvelle Partie** : Cliquez sur "NEW GAME" pour réinitialiser les scores et commencer une nouvelle partie.
- **Lancer le dé** : Cliquez sur "ROLL DICE" pour lancer le dé. Le score obtenu est ajouté à votre score ROUND.
- **Hold** : Cliquez sur "HOLD" pour transférer votre score ROUND à votre score GLOBAL et passer le tour à l'autre joueur.
- **Changement de Joueur** : Si vous tirez un 1, votre score ROUND est perdu et c'est au tour de l'autre joueur.

## Fonctionnalités

- Deux joueurs peuvent jouer sur le même écran.
- Chaque joueur a un score temporaire (ROUND) et un score global (GLOBAL).
- Le joueur actif peut lancer le dé autant de fois qu'il le souhaite, les résultats sont ajoutés à son score ROUND.
- Le joueur peut choisir de "Hold" pour transférer son score ROUND à son score GLOBAL, puis le tour passe à l'autre joueur.
- Si le joueur tire un 1, son score ROUND est perdu et c'est au tour de l'autre joueur.
- Le premier joueur à atteindre 100 points dans son score GLOBAL gagne la partie.

## Technologies Utilisées

- HTML5
- CSS3
- JavaScript
- Git & GitHub pour la gestion de version et le déploiement

## Installation et Exécution

1. Clonez le dépôt GitHub :
    ```bash
    git clone https://github.com/Nehaa85/Jeu-de-des.git
    ```

2. Accédez au répertoire du projet :
    ```bash
    cd Jeu-de-des
    ```

3. Ouvrez le fichier `index.html` dans votre navigateur pour commencer à jouer.
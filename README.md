# Check & Shop 🛒

## 📋 Contexte
**Check & Shop** est une application web développée en React (TypeScript) et TailwindCSS pour le frontend, et en PHP (Leaf) pour le backend.
Elle permet de gérer une liste de courses, en ajoutant des produits à acheter, en les cochant lorsqu'ils sont dans le panier, et en les supprimant une fois achetés.

## ✨ Fonctionnalités
- Ajouter un produit à la liste
- Cocher un produit
- Supprimer un produit de la liste
- Créer des listes personnalisées _(par exemple, une liste pour chaque magasin)_
- Personnaliser la couleur de chaque liste
- Modifier et supprimer une liste

## ⚡️️ Prérequis
Vous devez avoir NodeJS en version 20 et PHP 8.2 installés sur votre machine.
Ce projet utilise PNPM comme gestionnaire de paquets, vous devez donc l'avoir installé sur votre machine.

## 🚀 Installation et lancement du projet

Clonez le projet sur votre machine locale :
```bash
git clone https://github.com/BenoitPrmt/check-and-shop.git
cd check-and-shop
```

### ⚡️️ Frontend
Installez les dépendances avec PNPM :
```bash
pnpm install
```

### ⚡️️ Backend
Définir le fichier `.env` pour l'API :
```bash
cd api
cp .env.example .env
```
Ensuite, vous devez modifier les informations de connexion à la base de données dans le fichier `.env` pour correspondre à votre configuration.

Le schéma de la base de données est disponible dans le fichier `database.sql` (dans le dossier `api`).
Importez ce fichier dans PhpMyAdmin ou un autre outil de gestion de base de données pour créer la base de données avec les tables nécessaires.

Installez les dépendances de l'API :
```bash
composer install
```

### ⚡️️ Lancement du projet

**→ Automatiquement :**
```bash
# Windows (PowerShell)
scripts/start.bat

# MacOS, Linux et Windows (avec Bash)
sh scripts/start.sh
```
En lancant avec bash, pour couper le serveur, faites `Ctrl + C` dans le terminal.

**→ Manuellement :**
```bash
pnpm start
```

Développé par Benoit Parmentier - `contact@benoitparmentier.fr`
# La Perruquière - Site Web

Site web vitrine moderne pour La Perruquière, expert en perruques et solutions capillaires.

## Technologies Utilisées

- Vue.js 3 (Composition API)
- Vite
- SCSS
- Font Awesome
- Google Fonts (Playfair Display & Montserrat)

## Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn

## Installation

1. Cloner le dépôt :
```bash
git clone [URL_DU_REPO]
cd la-perruquiere
```

2. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

3. Lancer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

4. Pour la production, construire le projet :
```bash
npm run build
# ou
yarn build
```

## Structure du Projet

```
la-perruquiere/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── sections/
│   │   └── ...
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Fonctionnalités

- Design responsive
- Navigation fluide avec barre de progression
- Carrousel de témoignages
- Formulaire de contact interactif
- Animations au scroll
- Bouton de retour en haut
- Intégration des réseaux sociaux

## Personnalisation

### Couleurs

Les variables de couleurs sont définies dans `src/assets/styles/variables.scss` :

```scss
$primary: #2c3e50;
$secondary: #e74c3c;
$text: #333;
$light: #ecf0f1;
```

### Polices

Les polices utilisées sont :
- Playfair Display (titres)
- Montserrat (corps de texte)

## Déploiement

1. Construire le projet :
```bash
npm run build
```

2. Les fichiers de production seront générés dans le dossier `dist/`

3. Déployer le contenu du dossier `dist/` sur votre hébergeur

## Maintenance

### Mises à jour

Pour mettre à jour les dépendances :
```bash
npm update
# ou
yarn upgrade
```

### SEO

Le site est optimisé pour le référencement avec :
- Meta tags appropriés
- Structure HTML sémantique
- Images optimisées
- Textes alternatifs

## Support

Pour toute question ou assistance :
- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement

## Licence

Tous droits réservés © La Perruquière

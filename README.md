# 📚 AccessibleStory

<div align="center">

**Une application web accessible pour lire des histoires de manière inclusive**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)](https://vitejs.dev/)
[![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-005A9C?logo=w3c)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

*Développée avec un numérique responsable au service de l'humain*

</div>

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies utilisées](#️-technologies-utilisées)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Structure du projet](#️-structure-du-projet)
- [Accessibilité](#-accessibilité)
- [Développement](#-développement)
- [Déploiement](#-déploiement)
- [Contribution](#-contribution)
- [Support](#-support)
- [Licence](#-licence)

---

## 🎯 À propos

**AccessibleStory** est une application web moderne et accessible qui permet de lire des histoires de manière inclusive. Conçue avec un niveau maximum d'accessibilité, elle garantit que tous les utilisateurs, y compris les personnes en situation de handicap, peuvent profiter pleinement de l'expérience de lecture.

### Objectifs

- ✅ Rendre la lecture accessible à tous
- ✅ Respecter les standards internationaux d'accessibilité (WCAG 2.1 niveau AA)
- ✅ Offrir une expérience utilisateur optimale
- ✅ Démontrer les meilleures pratiques d'accessibilité web

### Philosophie

L'accessibilité numérique est un **droit fondamental**, pas une option. AccessibleStory s'engage pour un numérique responsable au service de l'humain, garantissant une société plus équitable et connectée.

---

## ✨ Fonctionnalités

### 📖 Lecture d'histoires

- **Import de texte** : Collez directement votre texte ou importez un fichier `.txt`
- **Découpage automatique** : Le texte est automatiquement découpé en scènes (séparées par des lignes vides)
- **Navigation intuitive** : Parcourez les scènes avec les boutons ou les flèches du clavier
- **Lecture audio** : Synthèse vocale multilingue (français, arabe, etc.) pour chaque scène
- **Gestion de fin** : Recommencez l'histoire ou terminez pour charger une nouvelle histoire

### ♿ Fonctionnalités d'accessibilité

#### 🎹 Navigation au clavier
- Navigation complète au clavier (Tab, Entrée, Flèches)
- Lien d'évitement pour accéder directement au contenu principal
- Raccourcis clavier pour la navigation entre scènes (← →)

#### 🔤 Réglage de taille de texte
- Ajustement de la taille de police de 12px à 32px
- Boutons A− et A+ pour un contrôle facile
- Préférences sauvegardées automatiquement

#### ⚫ Mode contraste élevé
- Activation/désactivation du mode contraste élevé
- Couleurs optimisées pour une meilleure lisibilité
- Conforme aux standards WCAG pour le contraste

#### 📖 Police lisible
- Police optimisée pour les personnes atteintes de dyslexie
- Améliore la distinction entre les lettres similaires
- Réduit la fatigue visuelle

#### 🔊 Lecture audio
- Synthèse vocale intégrée (Web Speech API)
- Détection automatique de la langue (français, arabe, etc.)
- Sélection automatique de la voix appropriée
- Contrôles de lecture (Lire / Arrêter)

#### 🎨 Interface accessible
- Structure sémantique HTML5
- Attributs ARIA complets
- Focus visible sur tous les éléments interactifs
- Compatible avec les lecteurs d'écran (NVDA, JAWS, VoiceOver)

### 📱 Pages disponibles

1. **Accueil** : Présentation de l'application et navigation
2. **Lire une histoire** : Zone d'entrée et lecture scène par scène
3. **Accessibilité** : Documentation des choix d'accessibilité
4. **À propos de nous** : Mission, valeurs et engagement

---

## 🛠️ Technologies utilisées

### Frontend

- **React 18.2.0** - Bibliothèque JavaScript pour l'interface utilisateur
- **React Router DOM 6.20.0** - Gestion du routage côté client
- **Vite 5.0.8** - Build tool rapide et moderne
- **SweetAlert2 11.10.5** - Alertes élégantes et accessibles

### APIs et fonctionnalités

- **Web Speech API** - Synthèse vocale pour la lecture audio
- **localStorage** - Sauvegarde des préférences d'accessibilité
- **FileReader API** - Lecture de fichiers texte

### Standards et accessibilité

- **WCAG 2.1 niveau AA** - Web Content Accessibility Guidelines
- **RGAA 4.1** - Référentiel Général d'Amélioration de l'Accessibilité
- **Section 508** - Exigences d'accessibilité américaines

### Architecture

- **100% côté client** - Aucun backend requis
- **Pas de base de données** - Données en mémoire uniquement
- **JavaScript ES6+** - Code moderne et maintenable

---

## 📦 Installation

### Prérequis

- **Node.js** : Version 16.0.0 ou supérieure
- **npm** : Version 7.0.0 ou supérieure (ou yarn/pnpm)

### Étapes d'installation

1. **Cloner le dépôt** (ou télécharger le projet)
   ```bash
   git clone https://github.com/votre-username/AccessibleStory.git
   cd AccessibleStory
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application en mode développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   - L'application sera disponible à l'adresse affichée
   - Par défaut : `http://localhost:5173`

### Commandes disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Construit l'application pour la production
npm run preview      # Prévisualise la version de production
```

---

## 📖 Utilisation

### Première utilisation

1. **Accéder à l'application**
   - Ouvrez votre navigateur et accédez à l'URL de l'application

2. **Choisir le mode d'entrée**
   - Cliquez sur "Coller un texte" ou "Importer un fichier texte"

3. **Entrer votre histoire**
   - **Mode collage** : Collez votre texte dans la zone de texte
   - **Mode import** : Sélectionnez un fichier `.txt` depuis votre ordinateur

4. **Charger l'histoire**
   - Cliquez sur "Charger l'histoire"
   - Le texte sera automatiquement découpé en scènes

### Navigation dans l'histoire

#### Navigation entre scènes

- **Boutons** : Utilisez "Scène précédente" et "Scène suivante"
- **Clavier** : Utilisez les flèches ← et → pour naviguer
- **Compteur** : Affiche la scène actuelle (ex: 3 / 10)

#### Lecture audio

1. Cliquez sur "🔊 Lire cette scène"
2. La synthèse vocale lit automatiquement le texte
3. Cliquez sur "⏹️ Arrêter la lecture" pour arrêter

**Note** : La langue est détectée automatiquement (français, arabe, etc.)

#### Fin de l'histoire

- **À la dernière scène** :
  - Le bouton "Scène suivante" devient "🔄 Recommencer"
  - Cliquez pour relire l'histoire depuis le début

- **Bouton "✓ Terminer"** :
  - Affiche une alerte de confirmation
  - Réinitialise l'application
  - Retourne à la section principale pour charger une nouvelle histoire

### Réglages d'accessibilité

La barre d'accessibilité est disponible en haut de chaque page :

1. **A− / A+** : Ajustez la taille de police
2. **💡 Contraste élevé** : Activez/désactivez le mode contraste élevé
3. **🔤 Police lisible** : Activez/désactivez la police optimisée pour dyslexie

**Les préférences sont sauvegardées automatiquement** dans votre navigateur.

### Format du texte

Le texte est découpé en scènes en utilisant les **doubles retours à la ligne** (`\n\n`) comme séparateurs.

**Exemple :**
```
Première scène, premier paragraphe.

Première scène, deuxième paragraphe.

Deuxième scène, premier paragraphe.
```

Ce texte sera découpé en **2 scènes**.

---

## 🏗️ Structure du projet

```
AccessibleStory/
├── public/                    # Fichiers statiques publics
├── src/
│   ├── components/           # Composants réutilisables
│   │   ├── AccessibilityBar.jsx      # Barre d'outils d'accessibilité
│   │   ├── AudioControls.jsx         # Contrôles de lecture audio
│   │   └── Layout.jsx                # Layout principal avec navigation
│   ├── context/              # Contextes React
│   │   └── AccessibilityContext.jsx  # Gestion des préférences d'accessibilité
│   ├── pages/                # Pages de l'application
│   │   ├── HomePage.jsx              # Page d'accueil
│   │   ├── StoryPlayerPage.jsx       # Page de lecture d'histoire
│   │   ├── AboutAccessibilityPage.jsx # Page à propos de l'accessibilité
│   │   └── AboutUsPage.jsx           # Page à propos de nous
│   ├── utils/                # Utilitaires
│   │   └── splitStoryText.js         # Fonction de découpage du texte
│   ├── App.jsx               # Composant principal avec routage
│   ├── main.jsx              # Point d'entrée React
│   └── styles.css            # Styles CSS globaux
├── index.html                # Page HTML principale
├── package.json              # Configuration npm et dépendances
├── vite.config.js            # Configuration Vite
├── .gitignore                # Fichiers ignorés par Git
└── README.md                 # Documentation du projet
```

### Description des composants principaux

#### `AccessibilityBar.jsx`
Barre d'outils permettant de régler :
- La taille de police (A− / A+)
- Le mode contraste élevé
- La police lisible

#### `AudioControls.jsx`
Composant de contrôle audio avec :
- Détection automatique de la langue
- Sélection de la voix appropriée
- Gestion de la lecture/arrêt

#### `Layout.jsx`
Layout principal incluant :
- Navigation principale
- Barre d'accessibilité
- Footer avec informations de contact
- Application des préférences d'accessibilité

#### `StoryPlayerPage.jsx`
Page principale de lecture avec :
- Zone d'entrée (texte/fichier)
- Zone de lecture scène par scène
- Navigation entre scènes
- Contrôles audio

#### `AccessibilityContext.jsx`
Contexte React gérant :
- État des préférences d'accessibilité
- Sauvegarde dans localStorage
- Fonctions de modification des préférences

---

## ♿ Accessibilité

### Standards respectés

AccessibleStory respecte et dépasse les standards internationaux d'accessibilité :

- ✅ **WCAG 2.1 niveau AA** - Web Content Accessibility Guidelines
- ✅ **RGAA 4.1** - Référentiel Général d'Amélioration de l'Accessibilité
- ✅ **Section 508** - Exigences d'accessibilité américaines

### Fonctionnalités d'accessibilité détaillées

#### Navigation au clavier
- Tous les éléments interactifs sont accessibles au clavier
- Ordre de tabulation logique
- Raccourcis clavier pour la navigation (← →)
- Lien d'évitement pour sauter la navigation

#### Lecteurs d'écran
- Structure sémantique HTML5 appropriée
- Attributs ARIA complets (aria-label, aria-describedby, aria-pressed, etc.)
- Rôles ARIA appropriés (navigation, main, banner, contentinfo)
- Labels descriptifs pour tous les éléments interactifs

#### Contraste et lisibilité
- Contraste de couleurs conforme WCAG AA
- Mode contraste élevé disponible
- Réglage de la taille de texte (12px - 32px)
- Police optimisée pour la dyslexie

#### Focus visible
- Indicateurs de focus clairs et visibles
- Contours de focus avec contraste élevé
- Focus visible sur tous les éléments interactifs

#### Synthèse vocale
- Lecture audio avec Web Speech API
- Détection automatique de la langue
- Support multilingue (français, arabe, etc.)

### Compatibilité

- ✅ **NVDA** (Windows)
- ✅ **JAWS** (Windows)
- ✅ **VoiceOver** (macOS/iOS)
- ✅ **TalkBack** (Android)
- ✅ **Narrateur** (Windows)

### Tests d'accessibilité

Pour tester l'accessibilité de l'application :

1. **Navigation au clavier** : Utilisez uniquement le clavier (Tab, Entrée, Flèches)
2. **Lecteur d'écran** : Testez avec NVDA, JAWS ou VoiceOver
3. **Outils automatiques** :
   - [WAVE](https://wave.webaim.org/)
   - [axe DevTools](https://www.deque.com/axe/devtools/)
   - [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 💻 Développement

### Configuration de l'environnement

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-username/AccessibleStory.git
   cd AccessibleStory
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

### Structure des branches

- **`main`** : Code stable, prêt pour la production
- **`dev`** : Branche de développement, nouvelles fonctionnalités
- **`prod`** : Branche de production, déploiement

### Workflow de développement

1. Créer une branche depuis `dev`
   ```bash
   git checkout dev
   git checkout -b feature/ma-fonctionnalite
   ```

2. Développer et tester
   ```bash
   npm run dev
   ```

3. Commiter les changements
   ```bash
   git add .
   git commit -m "feat: ajout de ma fonctionnalité"
   ```

4. Pousser et créer une Pull Request vers `dev`

### Bonnes pratiques

- ✅ Respecter les standards d'accessibilité
- ✅ Tester avec les lecteurs d'écran
- ✅ Vérifier la navigation au clavier
- ✅ Maintenir la cohérence du code
- ✅ Documenter les nouvelles fonctionnalités

---

## 🚀 Déploiement

### Build de production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

### Prévisualisation de la production

```bash
npm run preview
```

### Déploiement sur Vercel

1. Installer Vercel CLI
   ```bash
   npm i -g vercel
   ```

2. Déployer
   ```bash
   vercel
   ```

### Déploiement sur Netlify

1. Connecter le dépôt GitHub à Netlify
2. Configuration :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`

### Déploiement sur GitHub Pages

1. Installer `gh-pages`
   ```bash
   npm install --save-dev gh-pages
   ```

2. Ajouter le script dans `package.json`
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Déployer
   ```bash
   npm run deploy
   ```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'feat: Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une **Pull Request**

### Guidelines de contribution

- Respecter les standards d'accessibilité
- Tester avec les lecteurs d'écran
- Maintenir la cohérence du code
- Documenter les nouvelles fonctionnalités
- Suivre les conventions de nommage

---

## 📞 Support

### Contact

- **Email** : [AccessStory@gmail.com](mailto:AccessStory@gmail.com)
- **Téléphone** : +222 36212585

### Signaler un problème

Si vous rencontrez un problème ou avez une suggestion :

1. Vérifier les [issues existantes](https://github.com/votre-username/AccessibleStory/issues)
2. Créer une nouvelle issue avec :
   - Description du problème
   - Étapes pour reproduire
   - Comportement attendu
   - Environnement (navigateur, OS, etc.)

### Demander une fonctionnalité

Pour demander une nouvelle fonctionnalité :

1. Créer une issue avec le label `enhancement`
2. Décrire la fonctionnalité souhaitée
3. Expliquer son utilité pour l'accessibilité

---

## 📄 Licence

Ce projet est développé pour démontrer les meilleures pratiques d'accessibilité web.

**AccessibleStory** - Un numérique responsable au service de l'humain.

---

## 🙏 Remerciements

- **ASI** - Pour l'engagement en faveur d'un numérique responsable
- **Communauté d'accessibilité web** - Pour les standards et bonnes pratiques
- **Contributeurs** - Pour leurs retours et améliorations

---

<div align="center">

**Fait avec ❤️ pour rendre le web accessible à tous**

[⬆ Retour en haut](#-accessiblestory)

</div>

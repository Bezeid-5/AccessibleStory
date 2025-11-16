# AccessibleStory

Une application web accessible pour lire des histoires de manière inclusive, conçue avec un niveau maximum d'accessibilité.

## 🎯 Objectif

AccessibleStory permet d'afficher une histoire à partir de texte fourni par l'utilisateur, de manière lisible et accessible. L'utilisateur peut :

- Coller un texte dans une zone de texte
- Importer un fichier `.txt`
- Lire l'histoire scène par scène avec des fonctionnalités d'accessibilité avancées

## ✨ Fonctionnalités d'accessibilité

- **Navigation au clavier complète** - Toute l'application est navigable au clavier
- **Réglage de taille de texte** - Ajustement de 12px à 32px (A− / A+)
- **Mode contraste élevé** - Pour améliorer la lisibilité
- **Police lisible** - Police optimisée pour les personnes atteintes de dyslexie
- **Lecture audio** - Synthèse vocale pour chaque scène
- **Structure sémantique HTML5** - Balises appropriées pour les lecteurs d'écran
- **Attributs ARIA** - Labels et descriptions pour l'accessibilité
- **Focus visible** - Indicateurs clairs pour la navigation au clavier

## 🛠️ Stack technique

- **Vite** - Build tool rapide
- **React 18** - Bibliothèque JavaScript
- **React Router DOM** - Gestion du routage
- **JavaScript** (pas de TypeScript)
- **localStorage** - Sauvegarde des préférences d'accessibilité
- **Web Speech API** - Synthèse vocale

**Pas de backend, pas de base de données** - Tout fonctionne côté client.

## 📦 Installation

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Lancer l'application en mode développement :**
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur :**
   L'application sera disponible à l'adresse affichée (généralement `http://localhost:5173`)

## 🏗️ Structure du projet

```
AccessibleStory/
├── src/
│   ├── components/
│   │   ├── AccessibilityBar.jsx    # Barre d'outils d'accessibilité
│   │   ├── AudioControls.jsx       # Contrôles de lecture audio
│   │   └── Layout.jsx              # Layout principal avec navigation
│   ├── context/
│   │   └── AccessibilityContext.jsx # Contexte React pour les préférences
│   ├── pages/
│   │   ├── HomePage.jsx            # Page d'accueil
│   │   ├── StoryPlayerPage.jsx     # Page de lecture d'histoire
│   │   └── AboutAccessibilityPage.jsx # Page à propos de l'accessibilité
│   ├── utils/
│   │   └── splitStoryText.js       # Fonction de découpage du texte en scènes
│   ├── App.jsx                     # Composant principal
│   ├── main.jsx                    # Point d'entrée React
│   └── styles.css                  # Styles CSS avec thèmes d'accessibilité
├── index.html                      # Page HTML principale
├── package.json                    # Configuration npm
├── vite.config.js                  # Configuration Vite
└── README.md                       # Ce fichier
```

## 📖 Utilisation

### Page d'accueil

La page d'accueil présente l'application et permet de choisir entre :
- **Coller un texte** - Mode édition directe
- **Importer un fichier texte** - Mode import de fichier

### Lecture d'une histoire

1. **Entrer le texte :**
   - Coller directement dans la zone de texte, ou
   - Importer un fichier `.txt`

2. **Charger l'histoire :**
   - Cliquer sur "Charger l'histoire"
   - Le texte est automatiquement découpé en scènes (séparées par des lignes vides)

3. **Lire l'histoire :**
   - Naviguer entre les scènes avec "Scène précédente" / "Scène suivante"
   - Utiliser les flèches ← et → du clavier pour naviguer
   - Activer la lecture audio avec "Lire cette scène"

### Réglages d'accessibilité

Utiliser la barre d'accessibilité en haut de chaque page pour :
- **A− / A+** - Ajuster la taille de police
- **Contraste élevé** - Activer/désactiver le mode contraste élevé
- **Police lisible** - Activer/désactiver la police optimisée pour dyslexie

Les préférences sont sauvegardées automatiquement dans le navigateur.

## 🎨 Découpage des scènes

Le texte est découpé automatiquement en scènes en utilisant les doubles retours à la ligne (`\n\n`) comme séparateurs.

**Exemple :**
```
Paragraphe 1 de la scène 1.

Paragraphe 2 de la scène 1.

Paragraphe de la scène 2.
```

Sera découpé en 2 scènes.

## ♿ Standards d'accessibilité

L'application respecte :
- **WCAG 2.1 niveau AA** - Web Content Accessibility Guidelines
- **RGAA 4.1** - Référentiel Général d'Amélioration de l'Accessibilité
- **Section 508** - Exigences d'accessibilité américaines

## 🚀 Commandes disponibles

- `npm run dev` - Lancer le serveur de développement
- `npm run build` - Construire l'application pour la production
- `npm run preview` - Prévisualiser la version de production

## 📝 Notes

- L'application fonctionne entièrement côté client
- Les données ne sont pas persistées (sauf les préférences d'accessibilité)
- La synthèse vocale nécessite un navigateur moderne avec support de la Web Speech API
- Compatible avec les lecteurs d'écran (NVDA, JAWS, VoiceOver)

## 🌟 Engagement

AccessibleStory a été développée dans le cadre d'un engagement pour un numérique responsable au service de l'humain. L'accessibilité n'est pas une option, c'est un droit fondamental.

## 📄 Licence

Ce projet est développé pour démontrer les meilleures pratiques d'accessibilité web.

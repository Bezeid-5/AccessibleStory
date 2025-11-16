# 🚀 Guide de déploiement sur Vercel

Ce guide vous explique comment déployer AccessibleStory sur Vercel.

## 📋 Prérequis

- Un compte GitHub (gratuit)
- Un compte Vercel (gratuit) - [Créer un compte](https://vercel.com/signup)
- Le projet doit être poussé sur GitHub

## 🔧 Méthode 1 : Déploiement via l'interface Vercel (Recommandé)

### Étape 1 : Préparer le projet sur GitHub

1. **Initialiser Git** (si pas déjà fait)
   ```bash
   git init
   ```

2. **Ajouter tous les fichiers**
   ```bash
   git add .
   ```

3. **Créer le premier commit**
   ```bash
   git commit -m "Initial commit: AccessibleStory application"
   ```

4. **Créer un dépôt sur GitHub**
   - Allez sur [GitHub](https://github.com/new)
   - Créez un nouveau dépôt (ex: `AccessibleStory`)
   - Ne cochez PAS "Initialize with README"

5. **Connecter et pousser le code**
   ```bash
   git remote add origin https://github.com/VOTRE-USERNAME/AccessibleStory.git
   git branch -M main
   git push -u origin main
   ```

### Étape 2 : Déployer sur Vercel

1. **Aller sur Vercel**
   - Visitez [vercel.com](https://vercel.com)
   - Connectez-vous avec votre compte GitHub

2. **Importer le projet**
   - Cliquez sur "Add New..." → "Project"
   - Sélectionnez votre dépôt GitHub `AccessibleStory`
   - Cliquez sur "Import"

3. **Configuration du projet**
   Vercel détectera automatiquement :
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`

   ✅ **Vérifiez que ces valeurs sont correctes**

4. **Variables d'environnement** (si nécessaire)
   - Pour ce projet, aucune variable d'environnement n'est requise
   - Cliquez sur "Deploy"

5. **Attendre le déploiement**
   - Vercel va automatiquement :
     - Installer les dépendances
     - Builder l'application
     - Déployer sur un URL unique

6. **Votre application est en ligne !**
   - Vous recevrez une URL comme : `https://accessible-story.vercel.app`
   - Chaque push sur `main` déclenchera un nouveau déploiement

## 🔧 Méthode 2 : Déploiement via Vercel CLI

### Étape 1 : Installer Vercel CLI

```bash
npm install -g vercel
```

### Étape 2 : Se connecter à Vercel

```bash
vercel login
```

### Étape 3 : Déployer

Depuis le répertoire du projet :

```bash
vercel
```

Suivez les instructions :
- **Set up and deploy?** → Y
- **Which scope?** → Votre compte
- **Link to existing project?** → N (première fois)
- **Project name?** → accessible-story (ou votre choix)
- **Directory?** → ./
- **Override settings?** → N

### Étape 4 : Déployer en production

```bash
vercel --prod
```

## ⚙️ Configuration

Le fichier `vercel.json` est déjà configuré avec :
- ✅ Build command : `npm run build`
- ✅ Output directory : `dist`
- ✅ Rewrites pour React Router (toutes les routes pointent vers `/index.html`)

## 🔄 Déploiements automatiques

Une fois connecté à GitHub, Vercel déploiera automatiquement :
- **Production** : Chaque push sur la branche `main`
- **Preview** : Chaque pull request crée un déploiement de prévisualisation

## 📝 Commandes utiles

```bash
# Voir les déploiements
vercel ls

# Voir les logs
vercel logs

# Ouvrir le dashboard
vercel dashboard

# Supprimer un déploiement
vercel remove
```

## 🐛 Résolution de problèmes

### Erreur de build

Si le build échoue :
1. Vérifiez les logs dans Vercel Dashboard
2. Testez localement : `npm run build`
3. Vérifiez que toutes les dépendances sont dans `package.json`

### Erreur 404 sur les routes

Le fichier `vercel.json` contient déjà les rewrites nécessaires. Si vous avez toujours des problèmes :
- Vérifiez que `vercel.json` est présent à la racine
- Vérifiez que les rewrites sont correctement configurés

### Variables d'environnement

Si vous ajoutez des variables d'environnement plus tard :
1. Allez dans Vercel Dashboard → Votre projet → Settings → Environment Variables
2. Ajoutez vos variables
3. Redéployez

## ✅ Vérification post-déploiement

Après le déploiement, vérifiez :
- ✅ L'application se charge correctement
- ✅ La navigation fonctionne (toutes les routes)
- ✅ Les fonctionnalités d'accessibilité fonctionnent
- ✅ Le responsive fonctionne sur mobile
- ✅ La lecture audio fonctionne

## 🔗 Liens utiles

- [Documentation Vercel](https://vercel.com/docs)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Support Vercel](https://vercel.com/support)

---

**Bon déploiement ! 🚀**


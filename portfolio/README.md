# 🚀 Portfolio DevOps - Hakizimana Aymar Davy

Portfolio professionnel moderne avec système de traduction FR/EN pour DevOps Engineer & Software Developer.

## 🎯 Fonctionnalités

✅ Design moderne dark mode avec accents cyan/bleu
✅ Système de traduction Français/Anglais
✅ Sections: Hero, About, Skills, Projects, Experience, Contact
✅ Animations fluides et responsive
✅ Backend FastAPI + MongoDB
✅ Frontend React avec shadcn/ui

---

## 📋 Prérequis

Avant de commencer, installez :

### 1. Node.js (v18 ou supérieur)
- **Windows/Mac**: https://nodejs.org/
- **Linux**: 
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

### 2. Python (3.8 ou supérieur)
- **Windows/Mac**: https://python.org/
- **Linux**: 
  ```bash
  sudo apt-get update
  sudo apt-get install python3 python3-pip
  ```

### 3. MongoDB

**Option A - MongoDB Local (Développement):**
- **Windows**: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
- **Mac**: 
  ```bash
  brew tap mongodb/brew
  brew install mongodb-community
  brew services start mongodb-community
  ```
- **Linux**: 
  ```bash
  wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
  echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
  sudo apt-get update
  sudo apt-get install -y mongodb-org
  sudo systemctl start mongod
  ```

**Option B - MongoDB Atlas (Recommandé - Cloud gratuit):**
1. Créer compte: https://www.mongodb.com/cloud/atlas/register
2. Créer un cluster GRATUIT (M0)
3. Database Access → Add New User (noter username/password)
4. Network Access → Add IP Address → Allow Access from Anywhere (0.0.0.0/0)
5. Clusters → Connect → Connect your application → Copier la connection string

---

## 🚀 Installation Rapide

### Étape 1: Décompresser le projet
```bash
unzip portfolio-devops.zip
cd portfolio-devops
```

### Étape 2: Configuration Backend

```bash
cd backend

# Créer le fichier .env
cat > .env << 'ENVFILE'
MONGO_URL=mongodb://localhost:27017/
DB_NAME=portfolio_db
ENVFILE

# Si vous utilisez MongoDB Atlas, remplacez par:
# MONGO_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/
# DB_NAME=portfolio_db

# Installer les dépendances Python
pip install -r requirements.txt
```

### Étape 3: Configuration Frontend

```bash
cd ../frontend

# Installer Yarn (gestionnaire de paquets)
npm install -g yarn

# Installer les dépendances
yarn install

# Créer le fichier .env
cat > .env << 'ENVFILE'
REACT_APP_BACKEND_URL=http://localhost:8001
ENVFILE
```

### Étape 4: Lancer le projet

**Terminal 1 - Lancer le Backend:**
```bash
cd backend
python server.py
```

Vous devriez voir:
```
INFO:     Uvicorn running on http://0.0.0.0:8001
```

**Terminal 2 - Lancer le Frontend:**
```bash
cd frontend
yarn start
```

Le navigateur s'ouvrira automatiquement sur: **http://localhost:3000** 🎉

---

## 🔧 Commandes Utiles

### Backend
```bash
cd backend

# Lancer le serveur
python server.py

# Lancer avec rechargement automatique
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

### Frontend
```bash
cd frontend

# Mode développement
yarn start

# Build de production
yarn build

# Linter
yarn lint
```

---

## 📁 Structure du Projet

```
portfolio-devops/
├── frontend/
│   ├── src/
│   │   ├── components/ui/      # Composants shadcn/ui
│   │   ├── contexts/           # Context React (Language)
│   │   ├── hooks/              # Custom hooks (toast)
│   │   ├── pages/              # Pages (Home)
│   │   ├── App.js              # App principal
│   │   ├── App.css             # Styles globaux
│   │   ├── index.js            # Point d'entrée
│   │   ├── mock.js             # Données mock
│   │   └── translations.js     # Traductions FR/EN
│   ├── public/
│   ├── package.json
│   ├── .env                    # Variables d'environnement
│   └── craco.config.js
│
└── backend/
    ├── server.py               # Serveur FastAPI
    ├── requirements.txt        # Dépendances Python
    └── .env                    # Variables d'environnement
```

---

## 🌐 Fonctionnalités du Portfolio

### 1. **Hero Section**
- Nom complet et titre professionnel
- Terminal de code animé
- Boutons d'action (Hire Me, Download CV)
- Liens sociaux (GitHub, LinkedIn, Email)

### 2. **About Section**
- Description professionnelle
- Points clés (highlights)
- Statistiques (expérience, projets, technologies)

### 3. **Skills Section**
- 5 catégories: DevOps, Cloud, Backend, Frontend, Monitoring
- Barres de progression pour chaque compétence
- Icônes appropriées

### 4. **Projects Section**
- 6 projets avec descriptions détaillées
- Technologies utilisées
- Liens GitHub/Demo

### 5. **Experience Section**
- Timeline interactive
- 4 expériences professionnelles
- Badge "Actuel" pour poste en cours

### 6. **Contact Section**
- Formulaire de contact
- Coordonnées (email, téléphone, localisation)
- Toast notifications

### 7. **Traduction FR/EN**
- Bouton de changement de langue
- Persistance dans localStorage
- Toutes les sections traduites

---

## 🎨 Personnalisation

### Modifier vos informations

**1. Informations personnelles** (`frontend/src/mock.js`):
```javascript
personal: {
  name: "Votre Nom",
  email: "votre.email@example.com",
  phone: "+32 XXX XXX XXX",
  github: "https://github.com/votre-username",
  linkedin: "https://linkedin.com/in/votre-profil",
  cvUrl: "lien-vers-votre-cv.pdf"
}
```

**2. Projets** (`frontend/src/mock.js` et `frontend/src/translations.js`)

**3. Expériences** (`frontend/src/mock.js` et `frontend/src/translations.js`)

**4. Compétences** (`frontend/src/mock.js`)

### Changer les couleurs

Modifiez dans `frontend/src/App.css`:
```css
:root {
  --accent-primary: #00d9ff;      /* Couleur principale */
  --accent-secondary: #00ffaa;    /* Couleur secondaire */
  --bg-primary: #0a0e1a;          /* Fond principal */
}
```

---

## 🐛 Dépannage

### Erreur: "Module not found"
```bash
cd frontend
yarn install
```

### Erreur: "MongoDB connection failed"
- Vérifiez que MongoDB est démarré
- Vérifiez votre connection string dans `backend/.env`
- Pour MongoDB Atlas, vérifiez IP whitelist

### Port déjà utilisé
- Backend (8001): Modifier dans `backend/server.py` et `frontend/.env`
- Frontend (3000): React proposera automatiquement un autre port

### Erreur Python "No module named..."
```bash
cd backend
pip install -r requirements.txt
```

---

## 📞 Support

Pour toute question ou problème:
- Email: aymar.hakizimana@gmail.com
- GitHub: https://github.com/HaAymar

---

## 📄 Licence

© 2025 Hakizimana Aymar Davy. Tous droits réservés.

---

## ✨ Technologies Utilisées

**Frontend:**
- React 19
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- React Router
- Axios

**Backend:**
- FastAPI
- Motor (MongoDB async driver)
- Pydantic
- Python-dotenv

**Base de données:**
- MongoDB

---

Bon développement ! 🚀

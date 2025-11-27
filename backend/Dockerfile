
# Utiliser la même version que ton projet
FROM node:18.20.8-alpine

WORKDIR /app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port
EXPOSE 5001

# Commande pour démarrer le serveur
CMD ["npm", "run", "dev"]

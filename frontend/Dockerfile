FROM node:18.20.8-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5173

# Démarrer Vite en mode dev accessible depuis l'extérieur
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]

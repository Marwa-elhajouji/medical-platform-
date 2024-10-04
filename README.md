Medical Platform
Application web de gestion des patients, docteurs et rendez-vous dans un hôpital. Backend en Spring Boot et frontend en React.

Prérequis
Java 17 (backend)
Node.js 16 (frontend)
Gradle (build backend)
npm (frontend)
MongoDB (base de données)
Installation

Backend
Aller dans le dossier backend :
bash
Copier le code
cd back-end

Configurer MongoDB dans application.properties :
properties
Copier le code
spring.data.mongodb.uri=mongodb://localhost:27017/medical_platform

Lancer l'application :
bash
Copier le code
./gradlew bootRun

Frontend
Aller dans le dossier frontend :
bash
Copier le code
cd front-end

Installer les dépendances et lancer l'application :
bash
Copier le code
npm install
npm start

Tests
Backend
bash
Copier le code
cd back-end
./gradlew test

Frontend
bash
Copier le code
cd front-end
npm test

Déploiement
Backend
bash
Copier le code
cd back-end
./gradlew build

Frontend
bash
Copier le code
cd front-end
npm run build

API Endpoints
GET /api/patients : Liste des patients.
POST /api/patients : Ajouter un patient.
GET /api/doctors : Liste des docteurs.
POST /api/doctors : Ajouter un docteur.
GET /api/appointments : Liste des rendez-vous.
POST /api/appointments : Ajouter un rendez-vous.

CI/CD
Le projet utilise GitHub Actions pour le build et les tests automatiques.
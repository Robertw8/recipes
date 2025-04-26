## Prerequisites

- **Node.js** v20+
- **npm** v9.8+

## Installation

1. **Clone the repo**
   1.1. `git clone https://github.com/Robertw8/recipes.git`
   1.2. `cd recipes`
2. **Install dependencies**
   `npm i`
3. **Create .env file in "server" folder and paste:**
   `PORT=4000
   API_BASE_URL=https://www.themealdb.com/api/json/v1/1`
4. **Create .env file in "client" folder and paste:**
   `VITE_BASE_URL=http://localhost:4000`

## Running the app

1. **Backend**
   Development - `npm run dev`

   Production:

   1. `npm run build`
   2. `npm start`

   Address both for development and production modes:
   `http://localhost:4000`

2. **Frontend**
   Development - `npm run dev`

   Address for development mode:
   `http://localhost:3000`

   Production:

   1. `npm run build`
   2. `npm run preview`

   Address for production mode:
   `http://localhost:3001`

**Important: the backend server is configured to accept requests only from `http://localhost:3000` and `http://localhost:3001`**

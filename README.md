## Prerequisites

- **Node.js** v20+
- **npm** v9.8+

## Installation

1. **Clone the repo:**
   <br/>
    ```
    git clone https://github.com/Robertw8/recipes.git
    cd recipes
    ```
3. **Install dependencies for both parts of the app:**
   <br/>
   ```
   cd client
   ```
   ```
   npm i
   ```
   ```
   cd ../server
   ```
   ```
   npm i
   ```
4. **Create .env file in "server" folder and paste:**
   <br/>
   ```
   PORT=4000
   API_BASE_URL=https://www.themealdb.com/api/json/v1/1
   ```
5. **Create .env file in "client" folder and paste:**
   <br/>
   ```
   VITE_BASE_URL=http://localhost:4000
   ```

## Running the app

1. **Backend**
   <br/>
   
   Development:
   ```
   npm run dev
   ```

   Production:
   ```
   npm run build
   ```
   ```
   npm start
   ```

   Address both for development and production modes:
   `http://localhost:4000`

2. **Frontend**
   <br/>
   Development:
   ```
   npm run dev
   ```

   Address for development mode:
   ```
   http://localhost:3000
   ```

   Production:

   ```
   npm run build
   ```
   ```
   npm run preview
   ```

   Address for production mode:
   ```
   http://localhost:3001
   ```

**Important: the backend server is configured to accept requests only from `http://localhost:3000` and `http://localhost:3001`**

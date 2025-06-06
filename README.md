# Grill Master 🔥🍖

## About
Grill Master is a web application for grilling enthusiasts to find, save, and share their favorite grilling recipes. The app includes recipes, recommendations, and a way to contact the site administrators.

## Features
- Browse grilling recipes and cooking techniques
- View recommendations for grilling equipment
- Contact form for questions and feedback
- Responsive design for mobile and desktop

## Tech Stack
- Frontend: JavaScript with HTML-literal templating
- CSS: Custom styling with responsive design
- Backend: Node.js with Express
- Database: MongoDB with Mongoose
- Routing: Navigo for SPA routing
- Bundling: Parcel

## Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn
- MongoDB (local or Atlas connection)

### Installation
1. Clone the repository
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Environment Setup
   Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB=your_mongodb_connection_string
   PORT=4040
   ```
   
   Note: The application will store contact form submissions and recipe recommendations in MongoDB when a valid connection string is provided.

4. Start the development server
   ```
   npm run dev
   ```
   
   This will build the frontend and start the server.

5. Open your browser and navigate to:
   - `http://localhost:4040`

## Available Scripts
- `npm run dev` - Build frontend and start server with auto-reload
- `npm start` - Start the Express server (requires built frontend)
- `npm run parcel-build` - Build the frontend for production

## Deployment
This application is configured for deployment to Heroku with the included Procfile.

## Project Structure
- `/components` - Frontend components
- `/server` - Express backend
- `/store` - Data store for the frontend
- `/assets` - Static assets

## License
ISC

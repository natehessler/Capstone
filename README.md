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
   MONGODB_URI=your_mongodb_connection_string
   PORT=4040
   ```

4. Start the development server
   ```
   npm run serve
   ```

   In a separate terminal, start the backend:
   ```
   npm run app:watch
   ```

5. Open your browser and navigate to:
   - Frontend: `http://localhost:1234` (Parcel dev server)
   - Backend API: `http://localhost:4040` (Express server)

## Available Scripts
- `npm start` - Start the Express server
- `npm run serve` - Start the Parcel development server
- `npm run app:watch` - Start the Express server with Nodemon for auto-reloading
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

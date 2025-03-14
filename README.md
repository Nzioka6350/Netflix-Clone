# Netflix Clone

A fully functional Netflix Clone built with React and Firebase, featuring user authentication, movie browsing, and a sleek UI similar to the original Netflix platform.

## Features
- User authentication (Sign up, Login, Logout) using Firebase Authentication.
- Movie database integration using TMDB API.
- Dynamic movie categories (Trending, Top Rated, etc.).
- Responsive UI with React and Tailwind CSS.
- Firebase Firestore for user-specific data.
- Secure routing using React Router.

## Technologies Used
- **React** - Frontend framework.
- **Firebase** - Backend authentication and database.
- **Tailwind CSS** - Styling.
- **TMDB API** - Movie data.
- **React Router** - Navigation.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nZIOKA6350/netflix-clone.git
   cd netflix-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Firebase:
   - Create a Firebase project.
   - Enable Authentication (Email/Password sign-in).
   - Create a Firestore database.
   - Get Firebase configuration and add it to `.env`:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage
- Sign up or log in to access content.
- Browse movie categories.
- Click on a movie to view details.
- Logout when done.

## Screenshots
(Include screenshots of your app here)

## Deployment
You can deploy your app using Firebase Hosting:
```bash
npm run build
firebase deploy
```
## License
This project is open-source and available under the MIT License.

## Contact
For questions or issues, contact [your email or GitHub profile].


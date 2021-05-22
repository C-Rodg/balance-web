import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
		this.db = app.database();

		if (process.env.NODE_ENV === 'production') {
			app.analytics();
		}
	}

	// *** Authentication API *** //

	// Create user.
	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	// Signin user.
	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	// Signout user.
	doSignOut = () => this.auth.signOut();

	// Reset password.
	doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

	// Update password.
	doPasswordUpdate = (password) =>
		this.auth.currentUser.updatePassword(password);

	// *** Users API *** //

	user = (uid) => this.db.ref(`users/${uid}`);

	users = () => this.db.ref('users');
}

export default Firebase;

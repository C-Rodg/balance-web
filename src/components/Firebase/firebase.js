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

	// Get user UID
	getUserUID = () => {
		if (!this.auth || !this.auth.currentUser) {
			return null;
		}
		return this.auth.currentUser.uid;
	};

	// TODO: probably not needed.
	users = () => this.db.ref('users');

	// *** Expenses API *** //
	expensesRef = () => this.db.ref(`users/${this.getUserUID()}/expenses`);
	createNewExpense = (amount) =>
		this.expensesRef(this.getUserUID()).push({ amount });
	updateExpense = (id, amount) => this.expensesRef().child(id).set({ amount });
	deleteExpense = (id) => this.expensesRef().child(id).remove();

	// *** Budgets API *** //
	budgetsRef = () => this.db.ref(`users/${this.getUserUID()}/budgets`);
	createNewBudget = (name) => this.budgetsRef().push({ name });
	updateBudget = (id, name) => this.budgetsRef().child(id).set({ name });
	deleteBudget = (id) => this.budgetsRef().child(id).remove();

	// *** Categories API *** //
	categoriesRef = () => this.db.ref(`users/${this.getUserUID()}/categories`);
	createNewCategory = (name) => this.categoriesRef().push({ name });
	updateCategory = (id, name) => this.categoriesRef().child(id).set({ name });
	deleteCategory = (id) => this.categoriesRef().child(id).remove();
}

export default Firebase;

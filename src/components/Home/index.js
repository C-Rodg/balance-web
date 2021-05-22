import { withAuthorization } from '../Session';
import SignOutButton from '../SignOut';
import { AUTHENTICATED_USER } from '../../constants/roles.js';

function HomePage() {
	return (
		<div className="home-page">
			<div>Home Page</div>
			<SignOutButton />
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(HomePage);

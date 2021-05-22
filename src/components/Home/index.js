import { withAuthorization } from '../Session';
import SignOutButton from '../SignOut';

function HomePage() {
	return (
		<div class="home-page">
			<div>Home Page</div>
			<SignOutButton />
		</div>
	);
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
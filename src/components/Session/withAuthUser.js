import React from 'react';

import AuthUserContext from './context';

// Provides the authUser object.
const withAuthUser = (Component) => {
	class WithAuthUser extends React.Component {
		render() {
			return (
				<AuthUserContext.Consumer>
					{(authUser) => <Component authUser={authUser} {...this.props} />}
				</AuthUserContext.Consumer>
			);
		}
	}
	return WithAuthUser;
};

export default withAuthUser;

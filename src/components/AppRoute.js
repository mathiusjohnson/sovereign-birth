import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const AppRoutes = ({ component: Component, path, isPrivate, props, state, ...rest }) => {

	return (
		<Route
			path={path}
			render={(props) =>
				isPrivate === null ? (
					<Redirect to={{ pathname: '/login' }} />
				) : (
					<Component {...props} businessData={state.businessData} />
				)
			}
			{...rest}
		/>
	);
	
};

export default AppRoutes;

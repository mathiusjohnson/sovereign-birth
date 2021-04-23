import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const AppRoutes = ({ component: Component, path, isPrivate, props, state, createService, deleteService, ...rest }) => {
	console.log(path);
	return (
		<Route
			exact path={path}
			render={(props) =>
				isPrivate === null ? (
					<Redirect to={{ pathname: '/login' }} />
				) : (
					<Component 
						{...props} 
						businessData={state.businessData} 
						createService={createService} 
						deleteService={deleteService} />
				)
			}
			{...rest}
		/>
	);
	
};

export default AppRoutes;

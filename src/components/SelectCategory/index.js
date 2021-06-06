import React, { useEffect, useState, useMemo } from "react"
import { useHistory} from 'react-router-dom';

import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';
import BackButton from '../BackButton';

function SelectCategoryPage(props) {
	// instantiate history
	let history = useHistory();

	// state
	const [categories, setCategories] = useState([])

	// grab the cateory data
	useEffect( () => {
		props.firebase.categoriesRef().on('value', (snapshot) => {
			const categoriesObject = snapshot.val();
			if (categoriesObject) {
				const categories = Object.keys(categoriesObject).map((key) => ({
					...categoriesObject[key],
					id: key,
				}));
				setCategories(categories);
			}
		});
	}, [props.firebase])


	
	// map memoized categories to display
	const memoizedCategories = useMemo( () => categories.map( (cat, catId) => {
		
		// function to add category to history stack
		const handleAddCategory = (_e, cat) => {
	
			// add the category to local storage
			localStorage.setItem('category', JSON.stringify(cat))
	
			// go back
			history.goBack()
	
		}

		return <h3 
					key={catId} 
					onClick={(e) => handleAddCategory(e, cat)} 
					style={{cursor: "pointer"}}>
					{cat.name}
				</h3>
	}), [categories, history])

	return (
		<div className="select-category-page">
			<h1>Select Category Page</h1>
			<Link to={ROUTES.NEW_CATEGORY}>New Category Page</Link>
			<BackButton />
			<div>List of existing categories</div>
			{memoizedCategories}
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(SelectCategoryPage);

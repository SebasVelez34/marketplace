import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LeftAside(props){
	const [ search, setSearch ] = useState("");
	return(
		<aside id="side-menu" className="leftAside well span3 oc" data-testid="LeftAside" role="navigation">
			<ul className="nav nav-list">
				<li className="nav-header">Categories</li>
				<li><Link to={'/'}>All products</Link></li>
				{
					props.categories ?
					props.categories.map( category => {
						return (
							<li onClick={()=> { props.onClick(category) }}>
								{ category.charAt(0).toUpperCase() + category.slice(1)}
							</li>
						)
					})
					: <></>
				}
				<li className="nav-header">Search products</li>
				<li>
					<input type="text" placeholder="Search something product" onChange={(e)=> { setSearch(e.target.value) }}/>
					<button className="btn" onClick={()=> props.search(search) }></button>
				</li>
			</ul>
		</aside>
	);
}
export default LeftAside;

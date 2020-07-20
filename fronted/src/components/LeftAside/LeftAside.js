import React from 'react';
import { Link } from 'react-router-dom';

const LeftAside = (props) => (
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
    	</ul>
  	</aside>
);

export default LeftAside;

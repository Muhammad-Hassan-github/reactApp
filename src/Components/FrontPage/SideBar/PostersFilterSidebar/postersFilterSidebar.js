import React from 'react';
import './postersFilterSidebar.css';
import MyContext from '../../../Context/context'
import FiltersSidebar from './filterSidebar/filterSidebar'
import './postersFilterSidebar.css'
class PostersFilterSidebar extends React.Component {
	render() {
		return (
			<div className="side-bar">
                <FiltersSidebar/>
			</div>
		);
	}
}

export default PostersFilterSidebar;

import React, { Component } from 'react';

class Navigation extends Component{
	
	render(){
		const { titulo } = this.props;
		
		return(
			<nav className="navbar navbar-dark bg-dark">
                <a href="#" className="text-white">{titulo}</a>
            </nav>
		)
	}
}


export default Navigation;
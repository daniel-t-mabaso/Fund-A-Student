import React from 'react';

const varsity = (props) =>{
	function selected(s){
		alert(s+"selected");
	}
	return (<option className="varsity-list">{props.children}
	</option>)
}

export default varsity;
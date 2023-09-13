import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Modal from './Modal';
import { connect } from 'react-redux';

const Contact = (props) => {
	console.log(props.cards)
	return(
		<div>
			
			<div 
				className='ui raised very padded text container segment'
				style={{marginTop:'80px'}} 
			>
				<Link to='/alex' className='ui header'>Alex</Link>
				<p>Lorerit ui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div 
				className='ui raised very padded text container segment'
				style={{marginTop:'80px'}} 
			>
				<Link to='/willma' className='ui header'>Willma</Link>
				<p>Lorem ipsuxcepteur sint occaeca.</p>
			</div>				
		</div>
	)
}

const mapStatesToProps=(state)=>{
	return {
		cards:state.cards,
	}
}

export default connect(mapStatesToProps)(Contact);
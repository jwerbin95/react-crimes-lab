import React from 'react';

const CrimesList = (props) =>{
	const crimesList = props.crimes.map((crime, i)=>{
		return <li key={i}>{crime.description} <button onClick={props.delete.bind(null, i)}>Delete</button></li>
	})
	return(
		<div>
			<ul>
				<li><h4>Crimes</h4></li>
				{crimesList}
			</ul>
		</div>
	)
}

export default CrimesList
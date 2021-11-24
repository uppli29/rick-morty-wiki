import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
	const [ id, setId ] = useState(1);
	const [ info, setInfo ] = useState({});
	const { name, type, dimension } = info;
	const [ results, setResults ] = useState([]);
	let api = `https://rickandmortyapi.com/api/location/${id}`;
	useEffect(
		() => {
			fetch(api).then((res) => res.json()).then(async (data) => {
				setInfo(data);
				let a = await Promise.all(data.residents.map((x) => fetch(x).then((res) => res.json())));
				setResults(a);
			});
		},
		[ api ]
	);
	return (
		<div className="container">
			<div className="row mb-4">
				<h1 className="text-center mb-4">
					Location :<span className="text-primary"> {name === '' ? 'Unknown' : name} </span>
				</h1>
				<h5 className="text-center">Dimension: {dimension === '' ? 'Unknown' : dimension}</h5>
				<h6 className="text-center">Type: {type === '' ? 'Unknown' : type}</h6>
			</div>
			<div className="row">
				<div className="col-lg-3 col-12">
					<h4 className="text-center mb-4 ">Pick Location</h4>
					<InputGroup setId={setId} total={126} name="Location" />
				</div>
				<div className="col-lg-8 col-12">
					<div className="row">
						<Cards page="/locations/" results={results} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;

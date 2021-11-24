import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
	const [ id, setId ] = useState(1);
	const [ info, setInfo ] = useState({});
	const { air_date, name } = info;
	const [ results, setResults ] = useState([]);
	let api = `https://rickandmortyapi.com/api/episode/${id}`;
	useEffect(
		() => {
			fetch(api).then((res) => res.json()).then(async (data) => {
				setInfo(data);
				let a = await Promise.all(data.characters.map((x) => fetch(x).then((res) => res.json())));
				setResults(a);
			});
		},
		[ api ]
	);
	return (
		<div className="container">
			<div className="row mb-4">
				<h1 className="text-center mb-4">
					Episode :<span className="text-primary"> {name === '' ? 'Unknown' : name} </span>
				</h1>
				<h5 className="text-center">Air Date {air_date === '' ? 'Unknown' : air_date}</h5>
			</div>
			<div className="row">
				<div className="col-lg-3 col-12">
					<h4 className="text-center mb-4 ">Pick Episode</h4>
					<InputGroup name="Episode" setId={setId} total={51} />
				</div>
				<div className="col-lg-8 col-12">
					<div className="row">
						<Cards page="/episodes/" results={results} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Episodes;

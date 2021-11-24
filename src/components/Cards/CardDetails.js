import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const CardDetails = () => {
	const { id } = useParams();
	const [ fetchedData, setFetchedData ] = useState([]);
	let { name, image, location, origin, gender, species, status} = fetchedData;
	let api = `https://rickandmortyapi.com/api/character/${id}`;
	useEffect(
		() => {
			fetch(api).then((res) => res.json()).then((data) => setFetchedData(data));
		},
		[ api ]
	);
	return (
		<div className="container d-flex justify-content-center">
			<div className="d-flex flex-column gap-3">
				<h1 className="text-center">{name}</h1>
				<img src={image} alt={name} className="img-fluid" />

				{status === 'Alive' ? (
					<div className="badge bg-success fs-5">{status} </div>
				) : status === 'Dead' ? (
					<div className="badge bg-danger fs-5">{status} </div>
				) : (
					<div className="badge bg-secondary fs-5">{status} </div>
				)}

				<div className="content">
					<div>
						<span className="fw-bold">Gender: </span>
						{gender}
					</div>
					<div>
						<span className="fw-bold">Species: </span>
						{species}
					</div>
					<div>
						<span className="fw-bold">Location: </span>
						{location?.name}
					</div>
					<div>
						<span className="fw-bold">Origin: </span>
						{origin?.name}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDetails;

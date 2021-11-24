import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
const Filters = (props) => {
	const clear = () => {
		props.setStatus('');
		props.setGender('');
		props.setSpecies('');
		props.setPageNumber(1);
		// refresh the page
		window.location.reload(false);
	};
	return (
		<div className="col-lg-3 col-12 mb-5">
			<div className="text-center fw-bold fs-4 mb-4">Filter</div>
			<div
				style={{ cursor: 'pointer' }}
				className="text-center text-primary text-decoration-underline mb-4"
				onClick={clear}
			>
				Clear Filters
			</div>
			<div className="accordion">
				<Status setStatus={props.setStatus} setPageNumber={props.setPageNumber} />
				<Species setSpecies={props.setSpecies} setPageNumber={props.setPageNumber} />
				<Gender setGender={props.setGender} setPageNumber={props.setPageNumber} />
			</div>
		</div>
	);
};

export default Filters;

import React from 'react';

const FilterBTN = (props) => {
	const radioChangeHandler = () => {
		props.setPageNumber(1);
		props.task(props.item);
	};
	return (
		<div>
			<style jsx>{`
				.form-check-input:checked + label {
					background-color: #0b5ed7;
					text: #fff;
				}
				input[type="radio"] {
					display: none;
				}
			`}</style>
			<div className="form-check">
				<input
					onChange={radioChangeHandler}
					className="form-check-input"
					type="radio"
					name={props.name}
					id={`${props.name}-${props.item}`}
				/>
				<label class="btn btn-outline-primary" for={`${props.name}-${props.item}`}>
					{props.item}
				</label>
			</div>
		</div>
	);
};

export default FilterBTN;

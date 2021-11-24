import React from 'react';

const InputGroup = (props) => {
	const selectChangeHandler = (e) => {
		props.setId(e.target.value);
	};
	return (
		<div className="input-group mb-3">
			<select className="form-select" onChange={selectChangeHandler}>
				<option value="1" selected>
					Choose...
				</option>
				{[ ...Array(props.total).keys() ].map((i) => (
					<option key={i} value={i + 1}>
						{props.name}- {i + 1}
					</option>
				))}
			</select>
		</div>
	);
};

export default InputGroup;

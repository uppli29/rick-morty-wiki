import React from 'react';
import styles from './Search.module.css';
const Search = (props) => {
	const nameSearchHandler = (event) => {
		props.setSearch(event.target.value);
		props.setPageNumber(1);
	};
	return (
		<form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
			<input
				className={styles.input}
				placeholder="Search for character"
				type="text"
				onChange={nameSearchHandler}
			/>
			<button onClick={(e) => e.preventDefault()} className={`${styles.btn} btn btn-primary fs-5`}>
				Search
			</button>
		</form>
	);
};

export default Search;

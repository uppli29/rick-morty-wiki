import React from 'react';
import styles from './Cards.module.css';
import { Link } from 'react-router-dom';
const Cards = (props) => {
	let display;
	if (props.results) {
		display = props.results.map((result, i) => {
			return (
				<Link
					style={{ textDecoration: 'none' }}
					to={`${props.page}${result.id}`}
					className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
					key={result.id}
				>
					<div className={`${styles.cards} d-flex justify-content-center flex-column`}>
						<img src={result.image} alt={result.name} className={`${styles.img} img-fluid`} />
						<div className="content" style={{ padding: '10px' }}>
							<div className="fs-4 fw-bold mb-4">{result.name.substring(0, 16)}</div>
							<div>
								<div className="fs-6">Last Location</div>
								<div className="fs-5">{result.location.name.substring(0, 16) + '....'}</div>
							</div>
						</div>
					</div>
					{result.status === 'Dead' ? (
						<div className={`${styles.badge} badge bg-danger position-absolute`}>{result.status}</div>
					) : result.status === 'Alive' ? (
						<div className={`${styles.badge} badge bg-success position-absolute`}>{result.status}</div>
					) : (
						<div className={`${styles.badge} badge bg-secondary position-absolute`}>{result.status}</div>
					)}
				</Link>
			);
		});
	} else {
		display = 'Nothing to show';
	}
	return <React.Fragment>{display}</React.Fragment>;
};

export default Cards;

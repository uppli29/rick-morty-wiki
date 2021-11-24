import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetails from './components/Cards/CardDetails';

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<CardDetails />} />

				<Route path="/episodes" element={<Episodes />} />
				<Route path="/episodes/:id" element={<CardDetails />} />

				<Route path="/locations" element={<Location />} />
				<Route path="/locations/:id" element={<CardDetails />} />
			</Routes>
		</Router>
	);
}

const Home = () => {
	const [ pageNumber, setPageNumber ] = useState(1);
	const [ fetchedData, setFetchedData ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ status, setStatus ] = useState('');
	const [ gender, setGender ] = useState('');
	const [ species, setSpecies ] = useState('');

	const { info, results } = fetchedData;
	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
	useEffect(
		() => {
			fetch(api).then((res) => res.json()).then((data) => setFetchedData(data));
		},
		[ api ]
	);
	return (
		<div className="App">
			<h1 className="text-center mb-3">Characters</h1>
			<Search setSearch={setSearch} setPageNumber={setPageNumber} />
			<div className="container">
				<div className="row">
					<Filters
						setGender={setGender}
						setStatus={setStatus}
						setPageNumber={setPageNumber}
						setSpecies={setSpecies}
					/>

					<div className="col-lg-8 col-12">
						<div className="row">
							<Cards page="/" results={results} />
						</div>
					</div>
				</div>
			</div>
			<Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
		</div>
	);
};

export default App;

import React,{useState,useEffect} from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
	const[width,setWidth]=useState(window.innerWidth);
	const updateDimensions=()=>{
		setWidth(window.innerWidth);
	}
	useEffect(()=>{
		window.addEventListener('resize',updateDimensions);
		return ()=>{
			window.removeEventListener('resize',updateDimensions);
		}
	},[])
	return (
		<>
		<style jsx>
			{`
			.next,.prev{
			color:inherit
			}
			@media(max-width:768px){
				.next,.prev{
					display:none
				}
				.pagination{
					font-size:	14px;
				}
			`}
		</style>
		<ReactPaginate className="pagination justify-content-center gap-4 my-4" pageCount={props.info?.pages}
		previousLabel="Prev"
		nextLabel="Next"
		previousClassName=" text-white prev"
		nextClassName="btn btn-primary text-white next"
		pageClassName="page-item"
		pageLinkClassName="page-link"
		activeClassName="active"
		onPageChange={(data)=>props.setPageNumber(data.selected+1)}
		forcePage={props.pageNumber===1?0:props.pageNumber-1}
		></ReactPaginate>
		</>
	);
};

export default Pagination;

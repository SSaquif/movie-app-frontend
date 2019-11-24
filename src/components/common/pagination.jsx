import React, { Component } from 'react';
import PropTypes from 'prop-types'; //used for type checking

//IF we want we can make this into a SFC (Stateless functional component)
class Pagination extends Component {
	//::NOOB_ERROR::CANNOT DECLARE VARAIBLE INSIDE class AND OUTSIDE a function in JS
	//const { itemCount, pageSize } = this.props;

	//NOTE::LEARNED A LOT ABOUT CONSTRUCTORS FROM THIS ERROR
	//TAKEAWAY::CONSTRUCTOR ARE FIRED ONLY ONCE
	//THE CURRENT PAGE WOULD NOT UPDATE THIS WAY
	//****************************//
	// constructor(props) {
	// 	super(props);
	// 	console.log('Props receved by Pagination Comp::', this.props);
	// 	//NOTE::This can be done via lodash VIDEO::2:55
	// 	this.itemCount = this.props.itemCount;
	// 	this.pageSize = this.props.pageSize;
	// 	this.currentPage = this.props.currentPage;
	// 	console.log(this.currentPage);
	// 	this.onPageChange = this.props.onPageChange;
	// 	this.noOfPages = Math.ceil(this.itemCount / this.pageSize);
	// 	this.pagesArray = [];
	// 	for (let i = 1; i <= this.noOfPages; i++) {
	// 		this.pagesArray.push(i);
	// 	}
	// 	console.log('pagesArray::', this.pagesArray);
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log(nextState.currentPage);
	// 	return true;
	// }

	render() {
		//NOTE::This can be done via lodash VIDEO::2:55
		this.itemCount = this.props.itemCount;
		this.pageSize = this.props.pageSize;
		this.currentPage = this.props.currentPage;
		this.onPageChange = this.props.onPageChange;
		this.noOfPages = Math.ceil(this.itemCount / this.pageSize);
		this.pagesArray = [];
		for (let i = 1; i <= this.noOfPages; i++) {
			this.pagesArray.push(i);
		}
		console.log('this from Pagination render()::', this);

		return (
			<React.Fragment>
				<nav style={{ cursor: 'pointer' }}>
					<ul className="pagination justify-content-center">
						<li
							key={0}
							onClick={() => {
								this.props.onPageChangePrev(this.currentPage);
							}}
							className="page-item"
						>
							<a className="page-link">Prev</a>
						</li>
						{this.pagesArray.map((pageNo) => (
							<li
								key={pageNo}
								onClick={() => {
									this.onPageChange(pageNo);
								}}
								className={
									//conditional statement to set css highlighting on or off

									pageNo === this.currentPage ? 'page-item active' : 'page-item'
								}
							>
								<a className="page-link">{pageNo}</a>
							</li>
						))}
						<li
							key={this.noOfPages + 1}
							onClick={() => {
								this.props.onPageChangeNext(this.currentPage);
							}}
							className="page-item"
						>
							<a className="page-link">Next</a>
						</li>
					</ul>
				</nav>
			</React.Fragment>
		);
	}
}

//Validation of props needed by the components, this will help throw error in the conseol if prop is missing
Pagination.propTypes = {
	itemCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired
};

export default Pagination;

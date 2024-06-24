import React from "react";

const Filters = ({ style }) => {
	return (
		<div className="filters">
			<h1 className="section-title">
				<span>/</span>
				{style || "HATS"}
			</h1>

			<h4>SORT BY:</h4>
			<div className="select-wrapper">
				<select name="relevance" id="relevance" className="first">
					<option value="relevance">RELEVANCE</option>
				</select>
			</div>

			<h4>FILTERS:</h4>
			<div className="select-wrapper">
				<select name="relevance" id="relevance">
					<option value="relevance">PRICE</option>
				</select>
			</div>

			<div className="select-wrapper">
				<select name="relevance" id="relevance">
					<option value="relevance">SHAPE</option>
				</select>
			</div>

			<div className="select-wrapper">
				<select name="relevance" id="relevance">
					<option value="relevance">COLOR</option>
				</select>
			</div>

			<div className="select-wrapper">
				<select name="relevance" id="relevance">
					<option value="relevance">SIZE</option>
				</select>
			</div>

			<div className="select-wrapper">
				<select name="relevance" id="relevance">
					<option value="relevance">FABRIC</option>
				</select>
			</div>
		</div>
	);
};

export default Filters;

import React, { Component } from "react"

class Counter extends Component {
	render() {
		return (
			<div>
				<span style={this.style} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-small m-2"
				>
					Increase
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-small"
				>
					Delete
				</button>
			</div>
		);
	};

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	};

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	};
}

export default Counter;

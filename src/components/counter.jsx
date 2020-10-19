import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<div className='row'>
				<div className='col-1'>
					<span className={this.renderBadgeClasses()}>
						{this.formatCounterText()}
					</span>
				</div>
				<div className='col'>
					<button
						onClick={() => this.props.onDecrement(this.props.counter)}
						className='btn btn-secondary btn-sm'
						disabled={this.props.counter.value === 0 ? true : false}>
						-
					</button>
					<button
						onClick={() => this.props.onIncrement(this.props.counter)}
						className='btn btn-secondary m-2 btn-sm'
						disabled={false}>
						+
					</button>
					<button
						className='btn-danger btn-sm'
						onClick={() => this.props.onDelete(this.props.counter.id)}
						disabled={false}>
						Delete
					</button>
				</div>
			</div>
		);
	}

	renderBadgeClasses() {
		let badgeColor = "badge m-2 badge-";
		badgeColor += this.props.counter.value === 0 ? "warning" : "primary";

		return badgeColor;
	}

	formatCounterText() {
		const { value } = this.props.counter;
		return value === 0 ? "zero" : value;
	}
}

export default Counter;

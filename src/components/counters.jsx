import React, { Component } from "react";

import Counter from "./counter.jsx";

class Counters extends Component {
	render() {
		console.log("App - Counters");
		const { onReset, onIncrement, onDecrement, onDelete, counter } = this.props;
		return (
			<div>
				<button className='btn-primary btn-sm m-2' onClick={onReset}>
					Reset button
				</button>
				{counter.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;

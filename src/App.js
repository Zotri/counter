import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	handleDelete = (counterId) => {
		console.log("handle delete is called");
		const countersAfterDelete = this.state.counters.filter(
			(e) => e.id !== counterId
		);
		this.setState({ counters: countersAfterDelete });
	};
	handleReset = () => {
		const countersToReset = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ countersToReset });
	};
	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value++;
		this.setState({ counters });
	};
	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value--;
		this.setState({ counters });
	};

	render() {
		console.log("App - Rendered");
		return (
			<React.Fragment>
				<NavBar
					totalCounters={this.state.counters.filter((c) => c.value > 0).length}
				/>
				<main className='container'>
					<Counters
						counter={this.state.counters}
						onReset={this.handleReset}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;

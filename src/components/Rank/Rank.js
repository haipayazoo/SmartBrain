import React from 'react';

class Rank extends React.Component {
	constructor() {
		super();
		this.state = {
			style: '',
		};
	}

	componentDidMount() {
		this.generateStyle(this.props.entries);
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.entries === this.props.entries &&
			prevProps.name === this.props.name
		)
			return null;

		this.generateStyle(this.props.entries);
	}

	generateStyle = (entries) => {
		fetch(
			`https://jgv0of8fgb.execute-api.us-east-1.amazonaws.com/dev/rank?rank=${entries}`
		)
			.then((response) => response.json())
			.then((data) => this.setState({ style: data.input }))
			.catch(console.log);
	};

	render() {
		return (
			<div>
				<div className="white f3">
					{`${this.props.name}, your current entry count is...`}
				</div>
				<div className="white f1">{this.props.entries}</div>
				<div className="white f3">{`Rank Badge: ${this.state.style}`}</div>
			</div>
		);
	}
}

export default Rank;

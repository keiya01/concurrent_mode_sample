import React from "react";

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(err, errInfo) {
		console.log(err, errInfo);
	}

	render() {
		if (this.state.hasError) {
			return <p style={{ color: "#fff", padding: 10 }}>Something went wrong</p>;
		}
		return this.props.children;
	}
}

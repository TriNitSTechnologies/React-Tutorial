import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    console.log("ErrorBoundary render");
    if (this.state.hasError) {
      return <h1>Error occurred. please try again.!!</h1>;
    }

    return this.props.children; //containment
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service.
    console.error(error, info);
  }
}

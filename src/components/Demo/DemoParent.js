import { Component } from "react";
import DemoChild from "./DemoChild";

export default class DemoParent extends Component {

  constructor(props){
    super(props);
    console.log("DemoParent constructor");
    this.state = {
      text: "Trinits technology"
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("DemoParent getDerivedStateFromProps");
    return {
      ...state,
      name: props.name  
    }
  }

  render() {
    console.log("DemoParent render");
    return (
      <div>
        <DemoChild />
      </div>
    )
  }

  componentDidMount() {
    console.log("DemoParent componentDidMount");
    setTimeout(() => {
      console.log("componentDidMount 1");
      this.setState({
        ...this.state,
        salary: 300000,
      });
    }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("DemoParent shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log(
      "getSnapshotBeforeUpdate prev value:" + state.salary + " current value" + this.state.salary
    );
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate" + this.state.salary);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
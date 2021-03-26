import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 10,
    };
    console.log("const");
  }

  componentDidMount() {
    console.log("mount");
    this.setState({
        a:20
    })
  }

  componentDidUpdate(prevProps, prevState) {
        console.log('update');
    
  }
  shouldComponentUpdate(){
    console.log('shoulddddddddddddd ');
    return false; 
  }
  

  render() {
    console.log("render");
    console.log("----------------");

    return <div>
    Test Component

    </div>;
  }
}

export default Test;

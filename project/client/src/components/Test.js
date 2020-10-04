import React from 'react';
import axios from 'axios';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import { connect } from 'react-redux';


export class Test extends React.Component {

  componentDidMount() {
    axios.get('/api')
      .then(res => {
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <p>Testing</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
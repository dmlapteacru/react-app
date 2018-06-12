import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
	ping() {
		// axios.get("http://localhost:8080/ping").then(res => {
		//     alert(res);
		//   }, err => {
		//     alert("Server rejected response with: " + err);
		// });

	}
	// componentDidMount(){
	// 	this.setState({isLoading: true});

	// 	  fetch('http://localhost:8080/ping')
	// 	    .then(response => {
	// 	    	// alert(response.text())
	// 	    	console.log(response.json());
	// 	    })
	// 	    .then(data => this.setState({beers: data, isLoading: false}));
	// }
 //  render() {
 //    return (
 //      <div>
 //      	<button onClick={this.ping}>ping</button>
 //      </div>
 //    );
 //  }

 state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/ping`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}


export default App;

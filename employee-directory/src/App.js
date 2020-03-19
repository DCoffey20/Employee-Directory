import React, { Component } from 'react';
import Header from "./components/Header";
import Card from "./components/Card/Card";
import SearchForm from "./components/SearchForm";
import Employee from "./components/Employee";
import './App.css';
import API from "./util/API";


class App extends Component {
  employeeAPI = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.employeeAPI();
  }

  render() {
    return (
      <div>
        <Header />
        <SearchForm />
        <Card />

      </div>
    );
  }
}

export default App;

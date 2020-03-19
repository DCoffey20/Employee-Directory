import React, { Component } from 'react';
import Header from "./components/Header";
import Card from "./components/Card/Card";
import SearchForm from "./components/SearchForm";
// import Employee from "./components/Employee";
import './App.css';
import API from "./util/API";


class App extends Component {
  state = {
    employeeData:[]
  }

  employeeAPI = () => {
    API.search()
      .then(res => {
        this.setState({ employeeData: res.data.results });
        console.log(this.state.employeeData);
      })
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
        <div className="d-flex flex-wrap">
          {this.state.employeeData.map( (employee) => (
            <Card
            key = {employee.email}
            userName = {employee.login.username}
            image = {employee.picture.medium}
            gender = {employee.gender}
            firstName = {employee.name.first}
            lastName = {employee.name.last}
            email = {employee.email}

            />
          )) }
        </div>

      </div>
    );
  }
}

export default App;

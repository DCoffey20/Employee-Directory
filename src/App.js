import React, { Component } from 'react';
import Header from "./components/Header";
import Card from "./components/Card/Card";
import SearchForm from "./components/SearchForm";
// import Employee from "./components/Employee";
import './App.css';
import API from "./util/API";


class App extends Component {
  state = {
    employeeData: [],
    employeeDataFiltered: []
  }

  employeeAPI = () => {
    API.search()
      .then(res => {
        this.setState({ employeeData: res.data.results, employeeDataFiltered: res.data.results});
        console.log(this.state.employeeData);
      })
      .catch(err => console.log(err));
  }

  nameSearch = e => {
    const userInput = e.target.value.toLowerCase();
    // console.log(userInput);
    // (()||())
    const filteredArray = this.state.employeeData.filter( employee => ((employee.name.first.toLowerCase().includes(userInput))||(employee.name.last.toLowerCase().includes(userInput))));
    this.setState({employeeDataFiltered: filteredArray})
    // console.log(filteredArray);
  }

  componentDidMount = () => this.employeeAPI();

  render() {
    return (
      <div>
        <Header />
        <SearchForm 
        nameSearch = {this.nameSearch}
        />
        <div className="d-flex flex-wrap">
          {this.state.employeeDataFiltered.map((employee) => (
            <Card
              key={employee.email}
              userName={employee.login.username}
              image={employee.picture.medium}
              gender={employee.gender}
              firstName={employee.name.first}
              lastName={employee.name.last}
              email={employee.email}

            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;

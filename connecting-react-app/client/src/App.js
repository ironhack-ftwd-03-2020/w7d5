import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
// import countries from './countries.json';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import axios from 'axios';

class App extends React.Component {

  state = {
    countries: []
  }

  componentDidMount() {
    axios.get('/countries')
      .then(response => {
        // console.log(response);
        this.setState({
          countries: response.data
        })
      })
  }

  render() {
    return (
      <div className='App' >
        <Navbar />
        <div className='container'>
          <div className='row'>
            <CountryList countries={this.state.countries} />
            <Route exact path='/:id' component={CountryDetail} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

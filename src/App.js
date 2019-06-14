import React, { Component } from 'react'
import RestaurantList from './components/RestaurantList'

const API = 'http://opentable.herokuapp.com/api/restaurants?city=';
const DEFAULT_QUERY = 'Toronto';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      error: null,
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    fetch(API + DEFAULT_QUERY)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong...')
        }
      })
      .then(data => this.setState({
        restaurants: data.restaurants,
        isLoading: false
      }
      ))
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render() {
    const { restaurants, isLoading, error } = this.state

    if (error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div className='container'>
        <h1>Toronto</h1>
        <RestaurantList results={restaurants} />
      </div>
    );
  }
}

export default App 
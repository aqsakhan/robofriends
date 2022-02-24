import React, { Component } from "react";
import './App.css';
import CardList from "../Components/CardList";
import Search from "../Components/Search.js";
import Scroll from "../Components/Scroll.js";
import ErrorBoundry from "../Components/ErrorBoundry";
// import { robots } from './robots.js'; // if not fetching from the url use this file


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())              // return the response in one-line else write return
        .then(users => this.setState({robots : users}) );
    }

    onSearchChange = (event) => {
        this.setState( {searchfield : event.target.value} );
    }

    render() {
        // multiple usage of this.state can be avoided by 
        // const {robots, searchfield} = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        // here ternary operator can also be used
        if(this.state.robots.length === 0) {
            return <h1 className="f1 tc">Loading...</h1>
        } else {
            return (
            <div className="tc">
                <h1 className="f1 ttu">RoboFriends</h1>
                <Search searchChange={ this.onSearchChange }/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={ filteredRobots }/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
        }
    }
}

export default App;
import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props); // we are currently not using this.props
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, info) {
        this.setState( {hasError : true} );
    }

    render() {
        if(this.state.hasError) {
            return <h1>Oops. Something is not right.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;

// the use of error boundries is that during production we can get errors and while fixing them
// we dont wanna show the errors to the user so error boundries will display the user a message
// that is "Something went wrong" currently but will show us the exact error/issue we are facing
// Hence, this is useful during production
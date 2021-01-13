import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    
   state = {lat : null, err : null}
   componentDidMount(){
    
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({lat : position.coords.latitude}) ,
            error => this.setState({err : error.message})
        )
   }

    render(){
        return(
            <div>
                 <SeasonDisplay lat={this.state.lat} />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
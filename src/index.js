import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    
   state = {lat : null, err : null}
   componentDidMount(){
    
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({lat : position.coords.latitude}) ,
            error => this.setState({err : error.message})
        )
   }

   renderContent(){
    return(
        <div>
            { 
                this.state.lat && !this.state.err ?
                <SeasonDisplay lat={this.state.lat} /> :
                null
            }
            { 
                !this.state.lat && this.state.err ?
                <div>{this.state.err}</div> :
                null
            }
            { 
                !this.state.lat && !this.state.err ?
                <Spinner message="Please Allow Location"/> :
                null
            }
        </div>
    )
}
    render(){
        return(
            <div>
              {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
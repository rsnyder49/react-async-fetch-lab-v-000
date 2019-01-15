import React from 'react'

export default class App extends React.Component {
  state = {
    spacePeople: []
  }


  render(){
    return(
      <div>
        { this.state.spacePeople.map( people => {return <h2>{people.name}</h2>})}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(({people}) => this.setState({spacePeople: people}))
  }
} 

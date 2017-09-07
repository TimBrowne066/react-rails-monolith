import React from 'react';
import CerealTile from '../components/CerealTile';

class CerealsIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cereals: []
    }
  }
componentDidMount() {
  fetch('/api/v1/cereals')
  .then(response => response.json())
  .then(body => {
    this.setState({ cereals: body})
  })
}
  render() {
    let cereals = this.state.cereals.map(cereal => {
      return(
        <CerealTile
        key={cereal.id}
        id={cereal.id}
        name={cereal.name}
        />
      )
    })

    return (
      <div>
      <h1>Cereals</h1>
        <ul>
          {cereals}
        </ul>
      </div>
    );
  }
}

export default CerealsIndexContainer;

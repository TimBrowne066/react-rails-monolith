import React from 'react';
import CerealInfo from '../components/CerealInfo'

class CerealShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      cerealInfo: {}
    }
  }

  componentDidMount() {
    let cerealId = this.props.params.id
    fetch(`/api/v1/cereals/${cerealId}`)
    .then(response => response.json())
    .then(body => {
      this.setState({ cerealInfo: body})
    })
  }

  render() {

    return (
      <div className="CerealShowContainer">
       <CerealInfo
        id={this.state.cerealInfo.id}
        name={this.state.cerealInfo.name}
        description={this.state.cerealInfo.description}
       />
      </div>
    );
  }
}

export default CerealShowContainer;

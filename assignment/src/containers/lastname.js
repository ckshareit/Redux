import React from 'react'
import { bindActionCreators } from 'redux';
import broadcastLastNameClicked from '../actions/broadcastLastNameClicked';
import { connect } from 'react-redux';


  class LastName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastname: ''
        }
    }


    getLastName = (event) => {
        this.setState({ lastname: event.target.value })
    }
  
  render() {
    return <div>

<input type="text" name="lastname"  onChange={this.getLastName}></input>
<button onClick={() => this.props.lastnameClicked(this.state.lastname)}>Add</button>
</div>
  }

}

function convertEventToPropsAndDispatch(dispatch) {
    return bindActionCreators({
        lastnameClicked: broadcastLastNameClicked
    }, dispatch)
}
export default connect(null, convertEventToPropsAndDispatch)(LastName);
import React from 'react'
import { bindActionCreators } from 'redux';
import broadcastFirstNameClicked from '../actions/broadcastFirstNameClicked';
import { connect } from 'react-redux';


  class FirstName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: ''
        }
    }


    getFirstName = (event) => {
        this.setState({ firstname: event.target.value })
    }
  
  render() {
    return <div>

<input type="text" name="firstname"  onChange={this.getFirstName}></input>
<button onClick={() => this.props.firstnameClicked(this.state.firstname)}>Add</button>
</div>
  }

}

function convertEventToPropsAndDispatch(dispatch) {
    return bindActionCreators({
        firstnameClicked: broadcastFirstNameClicked
    }, dispatch)
}
export default connect(null, convertEventToPropsAndDispatch)(FirstName);
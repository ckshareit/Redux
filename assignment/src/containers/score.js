import React from 'react'
import { bindActionCreators } from 'redux';
import broadcastScoreClicked from '../actions/broadcastScoreClicked';
import { connect } from 'react-redux';


  class Score extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: ''
        }
    }


    getScore = (event) => {
        this.setState({ score: event.target.value })
    }
  
  render() {
    return <div>

<input type="text" name="score"  onChange={this.getScore}></input>
<button onClick={() => this.props.scoreClicked(this.state.score)}>Add</button>
</div>
  }

}

function convertEventToPropsAndDispatch(dispatch) {
    return bindActionCreators({
        scoreClicked: broadcastScoreClicked
    }, dispatch)
}
export default connect(null, convertEventToPropsAndDispatch)(Score);
import React from 'react'
import DisplayDetail from './displaydetail';
import FirstName from './firstname';
import LastName from './lastname';
import Score from './score';


class Details extends React.Component {
    render() {
        return <div>
            <FirstName></FirstName>
            <LastName></LastName>
            <Score></Score>
            <DisplayDetail></DisplayDetail>

            </div>
    }

}

export default Details;
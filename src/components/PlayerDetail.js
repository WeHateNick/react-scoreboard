import React from 'react';
import PropTypes from 'prop-types';

const PlayerDetail = props => {
	const selectedPlayer = props.index > -1 ? props.players[props.index] : false;
  if( selectedPlayer ){
    return (
      <div>
        <h3>{ selectedPlayer.name }</h3>
        <ul>
          <li>
            <span>Score: </span> 
            { selectedPlayer.score }
          </li>
          <li>
            <span>Created: </span> 
            { selectedPlayer.created }
          </li>
          <li>
            <span>Updated: </span> 
            { selectedPlayer.created }
          </li>        
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
};
PlayerDetail.propTypes = {
  players: PropTypes.array.isRequired
  index: PropTypes.number.isRequired
};


export default PlayerDetail;

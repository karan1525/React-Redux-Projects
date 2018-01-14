import React from 'react';

const Action = props => (
  <div>
    <button
      className="big-buton"
      onClick={props.handlePick}
      disable={!props.hasOptions}>
      What should I do?
    </button>
  </div>
);

export default Action;

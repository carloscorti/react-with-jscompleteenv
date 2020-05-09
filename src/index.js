import React from 'react';
import ReactDOM from 'react-dom';

import StarMatch from './components/StarMatch';

ReactDOM.hydrate(
  <StarMatch starsInit={window.__R_DATA.initialData}/>,
  document.getElementById('mountNode'),
);

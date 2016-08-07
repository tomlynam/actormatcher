import React from 'react';

const App = ({ children }) => (
  <div>

    <nav>
	    <div className="nav-wrapper">
	      <a href="#" className="brand-logo">Actor Matcher</a>
	      <ul id="nav-mobile" className="right hide-on-med-and-down">
	      </ul>
	    </div>
	  </nav>

	  <div className="container">

    { children }

    </div>

  </div>
)

export default App;

import React from 'react';
import Tweet from './Tweet';

function App(){

  return(
    <div className="app">
      <Tweet name="marco" message="dit is de echte marco" />
      <Tweet name="marco2" message="dit is de tweede marco" />
      <Tweet name="marco3" message="ik ben niet eens marco" />
      <Tweet name="marco4" message="hoezo ben ik dan 4"  />
    </div>
  )
}

export default App;
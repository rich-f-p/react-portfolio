import React from 'react';
import Main from './components/Main';
const background = {
  bg:{
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat", backgroundSize: "cover",
  backgroundImage: `url("https://i.chzbgr.com/full/8490991872/hD7AFC2D1/make-it-rain")`,
  }
}

function App() {
  return (
    <div style={background.bg}>
      <Main />
    </div>
  );
}

export default App;
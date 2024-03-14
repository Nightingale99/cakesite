import NavBar from '../NavBar/NavBar';
import CakePopularMenu from '../CakePopularMenu/CakePopularMenu';
import React from 'react';
import { useSelector } from 'react-redux';
function App() {
  const cakeList = useSelector(state => state.cakeList)

  return (
    <div className="cake-app">
      <NavBar/>
      <CakePopularMenu cakeList={cakeList}/>
    </div>
  );
}

export default App;

import React from 'react';
import './compenents/style.css';
import Contact from './compenents/Contact';
function App() {
  return (
    <div className="App">
       
     <Contact name="Rhonda Kim" avatar="https://randomuser.me/api/portraits/women/64.jpg" alt="Rhonda Kim" online/>
     <Contact name="Richard Jackson" avatar="https://randomuser.me/api/portraits/men/83.jpg" alt="Richard Jackson"/>
     <Contact name="Sally Simpson" avatar="https://randomuser.me/api/portraits/women/74.jpg" alt="Sally Simpson" online/>
     <Contact name="Dwayne West" avatar="https://randomuser.me/api/portraits/men/32.jpg" alt="Dwayne West"/>
    </div>
  );
}

export default App;

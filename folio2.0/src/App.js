import React from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/footer'

// import libraries
import './assets/libraries/bootstrap.css';

// import app.css
import './App.css';



// import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
        <Footer></Footer>
      </div>  
    </>    
  );
}

export default App;

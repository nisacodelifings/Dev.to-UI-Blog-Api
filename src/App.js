import React from 'react';
import './App.css';
import { Link, BrowserRouter, Route } from 'react-router-dom'

import HomeScreen from './screens/homeScreen'
import ArticleScreen from './screens/articleScreen';

function App() {
  return (
    <BrowserRouter>
    
    <div className="grid-container">

    <header>
      <h1 class="white">Nisa's Blog ❤</h1>
      <a href="https://nisacodelifings.netlify.com" target="_blank">
        Website
      </a>
    </header>


    <main className="main">
      <div className="content">
        <Route path ='/' exact={true} component={HomeScreen}/>
        <Route path='/api/articles/:id' component={ArticleScreen} />
      </div>
    </main>

    <footer className="footer">
     <div className="footer-main">  Designed By Hemant; </div> 
    </footer>





    </div>
    
    </BrowserRouter>
  )
}

export default App;

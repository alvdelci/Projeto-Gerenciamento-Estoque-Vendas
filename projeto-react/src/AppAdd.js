import React from 'react';
import Headers from './components/actions/add/Headers';
import Article from './components/actions/add/Article';
import Footer from './components/actions/add/Footer';
import './App.css';


function AppAdd (props) {
  return (
    <div>
        <Headers />
        <Article />
        <Footer />
    </div>
  );
};

export default AppAdd;

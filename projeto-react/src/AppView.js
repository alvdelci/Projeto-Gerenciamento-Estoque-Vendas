import React from 'react';
import Headers from './components/actions/view/Headers';
import Article from './components/actions/view/Article';
import Footer from './components/actions/view/Footer';
import './App.css';

function AppView(props) {
  return (
    <div>
      <Headers />
      <Article />
      <Footer />
    </div>
  );
};

export default AppView;

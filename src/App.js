import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./quizcomponents/Header";
import Multiplier from './quizcomponents/Multiplier';
import EvenClicks from './quizcomponents/EvenClicks';
import CountBy from './quizcomponents/CountBy';
import HideMe from './quizcomponents/HideMe';

const App = () => (

    <Router>
        <>

            <Header />

            <Route exact path="/components" render={ () => ( 
                <Multiplier 
                    x={ 5 } 
                    y={ 7 }
                />
            ) } />
            <Route exact path="/components" component= { EvenClicks } />
            <Route exact path="/components" render={ () => ( 
                <CountBy 
                    step={ 5 } 
                />
            ) } />
            <Route exact path="/components" render={ () => ( 
                <HideMe 
                    content="Cows can sleep standing up, but they can only dream lying down." 
                />
            ) } />

        </>
    </Router>

);

export default App;

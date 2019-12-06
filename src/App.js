import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./quizcomponents/Header";
import Multiplier from './quizcomponents/Multiplier';
import EvenClicks from './quizcomponents/EvenClicks';
import CountBy from './quizcomponents/CountBy';

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

        </>
    </Router>

);

export default App;

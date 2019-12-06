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
import MinimumLength from './quizcomponents/MinimumLength';

const App = () => (

    <Router>
        <>

            <Header />

            <Route path="/multiplier/:x/:y" render={ ({ match }) => ( 
                <Multiplier 
                    x={ match.params.x } 
                    y={ match.params.y }
                />
            ) } />
            <Route exact path="/even-clicks" component= { EvenClicks } />
            <Route path="/count-by/:step" render={ ({ match }) => ( 
                <CountBy step={ match.params.step } />
            ) } />
            <Route exact path="/hide-me" render={ () => ( 
                <HideMe 
                    content="Cows can sleep standing up, but they can only dream lying down." 
                />
            ) } />
            <Route path="/minimum/:length" render={ ({ match }) => (
                <MinimumLength length={ match.params.length }/> 
            ) } />

        </>
    </Router>

);

export default App;

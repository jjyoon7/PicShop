import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import contextProvider from "./Context"
import App from './App';

ReactDOM.render(<contextProvider>
                    <Router>
                        <App />
                    </Router>
                </contextProvider>
, document.getElementById('root'));



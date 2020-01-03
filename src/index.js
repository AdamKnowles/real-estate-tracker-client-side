import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import RealEstate from './RealEstate';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<Router><RealEstate /></Router>, document.getElementById('root'));


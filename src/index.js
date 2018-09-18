import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { store } from "./store/actionCreators"

import './index.css';
import PopoverExampleMulti from './components/App/App';

ReactDOM.render(<Provider store={store}><PopoverExampleMulti /></Provider>, document.getElementById('root'));
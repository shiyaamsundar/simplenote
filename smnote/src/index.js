import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import allReducers from './reducers';


const middleware=[thunk]



const mystore=createStore(allReducers,
  composeWithDevTools(applyMiddleware(...middleware))
)


ReactDOM.render(
  <Provider store={mystore}> 


    <App />


  </Provider>,  
  document.getElementById('root')

);


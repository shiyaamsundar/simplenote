import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import allReducers from './reducers';
import toggleReducer from './reducers/toggler';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';


 
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


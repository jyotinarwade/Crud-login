import React from 'react';
import { configureStore} from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { userReducer } from './component/userReducer';
import userReducer   from './component/UserReducer';
//import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';


const store = configureStore({
  reducer: {
    users: userReducer

  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
    
    {/* <Dashboard/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './redux/store';
import { Provider } from 'react-redux';

// console.log(store.getState())

// const inc = () => {
//   store.dispatch(incremented());
// }

// store.subscribe( () => {
//   console.log('изменился', store.getState())
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <button onClick={inc}>+1</button> */}
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



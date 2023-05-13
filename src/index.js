import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Reducers/cartSlice';
// import cartUiSlice from './Reducers/cartUiSlice';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

export default store;
reportWebVitals();


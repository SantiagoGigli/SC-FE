import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './routes/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Wallet from './routes/Wallet/Wallet';
import { Provider } from 'react-redux';
import { store } from './store/store';
import WalletEdit from './routes/WalletEdit/WalletEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/wallet',
    element: <Wallet />,
  },
  {
    path: '/wallet/edit',
    element: <WalletEdit />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

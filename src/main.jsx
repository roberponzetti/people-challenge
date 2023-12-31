import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="errorBoundaryContainer">
    <h2>¡Hubo un error en la aplicación!</h2>
    <h3 className="errorMessage">Error: {error.message}</h3>
    <button className="resetBoundaryButton" onClick={resetErrorBoundary}>
      Recargar la aplicación
    </button>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
)
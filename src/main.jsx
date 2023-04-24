import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase-config';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando a la app...'}>
    <App />
    </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>
)

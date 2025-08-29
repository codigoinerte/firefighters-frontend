import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import '/public/css/main.css';
import { APIProvider } from '@vis.gl/react-google-maps';

const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <APIProvider apiKey={key} libraries={['marker']} version='beta'>    
      <App />
    </APIProvider>
  </React.StrictMode>,
)

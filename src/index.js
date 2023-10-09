import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthCtxProvider } from './context/AuthCtx';
import { ChatCtxProvider } from './context/ChatCtx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthCtxProvider>
    <ChatCtxProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatCtxProvider>
  </AuthCtxProvider>
);

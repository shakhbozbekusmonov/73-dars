import QueryProvider from '@/components/QueryProvider.tsx';
import { RootProvider } from '@/context/index.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryProvider>
            <RootProvider>
                <App />
            </RootProvider>
        </QueryProvider>
    </React.StrictMode>,
);

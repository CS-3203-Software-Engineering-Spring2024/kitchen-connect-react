import React from 'react';
import ReactDOM from 'react-dom/client';
import WelcomePage from './WelcomePage';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <WelcomePage />
        </React.StrictMode>
    );
}

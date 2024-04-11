import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/joy/styles';
import App from './App';

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <App
                onSignInSuccess={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />
        </StyledEngineProvider>
    </React.StrictMode>
);

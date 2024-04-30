import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';

const navigate = useNavigate();

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <App
                onSignInSuccess={function (): void {
                    navigate('/feed');
                }}
            />
        </StyledEngineProvider>
    </React.StrictMode>
);

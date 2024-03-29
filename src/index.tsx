import React from "react";
import { createRoot } from 'react-dom/client';

import './styles/common.css';
import { App } from './components/App/App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

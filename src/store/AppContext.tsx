import React from 'react';
import { State } from './types';

const AppContext = React.createContext<State | null>(null);

export default AppContext;

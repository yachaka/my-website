import { createContext } from 'react';

const context = createContext('en');
context.displayName = 'LangContext';

export default context;

import { AccountProvider } from '@/context/account.provider';
import { CounterProvider } from '@/context/counter.provider';
import React, { createContext } from 'react';

const Context = createContext(null);

const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Context.Provider value={null}>
            <CounterProvider>
                <AccountProvider>{children}</AccountProvider>
            </CounterProvider>
        </Context.Provider>
    );
};

export { Context, RootProvider };

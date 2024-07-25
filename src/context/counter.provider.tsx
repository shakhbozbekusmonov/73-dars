import React, { createContext } from 'react';

interface CounterContext {
    count: number;
    incrementNumber: () => void;
    decrementNumber: () => void;
}

const Context = createContext<CounterContext>({} as CounterContext);

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = React.useState(0);

    const incrementNumber = () => {
        setCount(count + 1);
    };

    const decrementNumber = () => {
        setCount(count - 1);
    };

    return (
        <Context.Provider value={{ count, incrementNumber, decrementNumber }}>
            {children}
        </Context.Provider>
    );
};

export { Context, CounterProvider };

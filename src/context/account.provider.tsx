import React, { createContext, useState } from 'react';

interface AccountContext {
	isRegister: boolean;
	changeRegister: () => void;
}

const Context = createContext<AccountContext>({} as AccountContext);

const AccountProvider = ({ children }: { children: React.ReactNode }) => {
    const [isRegister, setRegister] = useState(false);

    const changeRegister = () => {
        setRegister(!isRegister);
    };

    return (
        <Context.Provider value={{ isRegister, changeRegister }}>
            {children}
        </Context.Provider>
    );
};

export { AccountProvider, Context };

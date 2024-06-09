import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AppContextProps {
    firstFile: File | null;
    setFirstFile: Dispatch<SetStateAction<File | null>>;
    secondFile: File | null;
    setSecondFile: Dispatch<SetStateAction<File | null>>;
    firstInputValue: string;
    setFirstInputValue: Dispatch<SetStateAction<string>>;
    secondInputValue: string;
    setSecondInputValue: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [firstFile, setFirstFile] = useState<File | null>(null);
    const [secondFile, setSecondFile] = useState<File | null>(null);
    const [firstInputValue, setFirstInputValue] = useState<string>('');
    const [secondInputValue, setSecondInputValue] = useState<string>('');

    return (
        <AppContext.Provider value={{ firstFile, setFirstFile, secondFile, setSecondFile, firstInputValue, setFirstInputValue, secondInputValue, setSecondInputValue }}>
            {children}
        </AppContext.Provider>
    );
};

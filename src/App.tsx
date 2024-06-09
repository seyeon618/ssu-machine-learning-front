import React from 'react';
import { AppProvider } from './Context';
import Header from "./common/Header";
import Content from "./common/Content";
import Footer from "./common/Footer";

function App() {
    return (
        <AppProvider>
            <div className="App">
                <Header />
                <Content />
                <Footer />
            </div>
        </AppProvider>
    );
}

export default App;

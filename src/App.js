import React from "react";

import Router from "./Router"
import HeaderLayout from "./layout/components/Header";
import MainMenuLayout from "./layout/components/MainMenu";
import FooterLayout from "./layout/components/Footer";


function App() {
    return (
        <>
            <HeaderLayout></HeaderLayout>
            <MainMenuLayout></MainMenuLayout>

            <Router />

            <FooterLayout></FooterLayout>
        </>
    )
}

export default App;

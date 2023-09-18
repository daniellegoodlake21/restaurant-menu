import Menu, { MenuInterface } from "./Menu";
import * as React from "react";
import MealComponent from "./MealComponent";
import "./scss/styles.scss"
import { context } from "./context";
import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { initialState, reducer } from "./reducer";
import MealInfo from "./pages/MealInfo";
function App(): JSX.Element
{
    const [state, dispatch] = React.useReducer(reducer, initialState)
    
    return (
        <context.Provider value={state}>
        <div className="App">
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/restaurant-menu" element={<Home/>}/>
                        <Route path="/restaurant-menu/:id" element={<MealInfo/>}/>
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
        </context.Provider>
    );
}

export default App;
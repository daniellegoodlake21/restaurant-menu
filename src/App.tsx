import * as React from "react";
import "./scss/styles.scss"
import { context } from "./context";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { initialState, reducer } from "./reducer";
import MealInfo from "./pages/MealInfo";
import Layout from "./layout";
import Basket from "./pages/Basket";
function App(): JSX.Element
{
    const [state, dispatch] = React.useReducer(reducer, initialState)
    
    return (
        <context.Provider value={state}>
        <div className="App">
            <main>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/restaurant-menu" element={<Home/>}/>
                            <Route path="/restaurant-menu/:id" element={<MealInfo dispatch={dispatch}/>}/>
                            <Route path="/restaurant-menu/basket" element={<Basket/>}/>
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </main>
        </div>
        </context.Provider>
    );
}

export default App;
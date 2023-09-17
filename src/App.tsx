import Menu, { MenuInterface } from "./Menu";
import * as React from "react";
import MealComponent from "./MealComponent";
import "./scss/styles.scss"
import { context } from "./context";
import { useState } from "react";
function App(): JSX.Element
{
    const [state, setState] = useState<MenuInterface>({meals: []})
    
    return (
        <context.Provider value={state}>
        <div className="App">
            <h1 className="custom-navbar">Welcome to Restaurant Menu Browser</h1>
            <div className="container text-center">
                <div className="row">
                {Menu.meals.map(meal => <MealComponent key={meal.props.key} title={meal.props.title} description={meal.props.description} price={meal.props.price} dietaryPreference={meal.props.dietaryPreference} imagePath={meal.props.imagePath}/>)}
                </div>
            </div>
        </div>
        </context.Provider>
    );
}

export default App;
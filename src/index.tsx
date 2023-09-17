import * as React from "react";
import * as ReactDOM from "react-dom";
import MealComponent from "./MealComponent";
import "./scss/styles.scss"
import { createRoot } from 'react-dom/client';
import Menu from "./Menu";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<div>
<h1 className="custom-navbar">Welcome to Restaurant Menu Browser</h1>
<div className="container text-center">
    <div className="row">
    {Menu.map(meal => <MealComponent key={meal.props.key} title={meal.props.title} description={meal.props.description} price={meal.props.price} dietaryPreference={meal.props.dietaryPreference}/>)}
    </div>
</div>
</div>
);
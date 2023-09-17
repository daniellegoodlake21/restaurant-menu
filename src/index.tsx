import * as React from "react";
import * as ReactDOM from "react-dom";
import MealComponent from "./MealComponent";
import "./scss/styles.scss"
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<div>
<h1 className="custom-navbar">Welcome to Restaurant Menu Browser</h1>
<div className="container text-center">
    <div className="row">
        <MealComponent title="Macaroni Cheese" description="Cheesy macaroni pasta with herbs, breadcrumbs and a side salad." price={7.99} dietaryPreference='Vegetarian'/>
        <MealComponent title="Chips" description="Chunky chips served with ketchup, salt and vinegar" price={3.99} dietaryPreference='Vegan'/>
        <MealComponent title="Lasagna" description="A classic pasta dish served with garlic bread and a side salad." price={11.99} dietaryPreference='Contains Meat'/>
    </div>
</div>
</div>
);
import * as React from "react";
import { context } from "../../context";
import { MenuInterface } from "../../Menu";
import { Fragment } from "react";
import MealComponent from "../../MealComponent";

const Basket: React.FC = () : JSX.Element =>
{
    const state = React.useContext(context) as MenuInterface;
    return (<Fragment>{state.mealsInBasket.length ? (<Fragment>
        {state.mealsInBasket.map(meal => <MealComponent id={meal.id} key={meal.id} title={meal.title} description={meal.description} price={meal.price} dietaryPreference={meal.dietaryPreference} imagePath={meal.imagePath}/>)}</Fragment>) : <h2>Basket is empty</h2>}
    </Fragment>);   
};

export default Basket;
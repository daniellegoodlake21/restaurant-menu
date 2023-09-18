import { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../context";
import MealInterface from "../../../MealInterface";
import MealComponent from "../../MealComponent";
import * as React from "react";
const MealInfo: React.FC = (): JSX.Element => 
{
    
    const state = useContext(context);
    const {id} = useParams();
    console.log(state.meals.length);
    const meal: MealInterface = state?.meals[(id as unknown as number)-1] as MealInterface;
    return (<div>    <h1 className="custom-navbar">Welcome to Restaurant Menu Browser</h1><MealComponent key={meal.id} id={meal.id} title={meal.title} description={meal.description} price={meal.price} dietaryPreference={meal.dietaryPreference} imagePath={meal.imagePath}/></div>);
}
export default MealInfo;
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../context";
import MealInterface from "../../../MealInterface";
import MealComponent from "../../MealComponent";
import ActionInterface from "../../Actions";
import * as React from "react";

interface MealInfoProps {
    dispatch: React.Dispatch<ActionInterface>
}

const MealInfo: React.FC<MealInfoProps> = ({dispatch}): JSX.Element => 
{
    const state = useContext(context);
    const {id} = useParams();
    
    const meal: MealInterface = state?.meals[(id as unknown as number)-1] as MealInterface;
    
    const handleClick = () => {
        dispatch({actionType: "ADD_MEAL_TO_BASKET", payload: meal})
    }

 return (<div><MealComponent key={meal.id + 1} id={meal.id + 1} title={meal.title} description={meal.description} price={meal.price} dietaryPreference={meal.dietaryPreference} imagePath={meal.imagePath}/><button className="btn btn-dark btn-lg" onClick={handleClick}>Add to Basket</button></div>);
};

export default MealInfo;
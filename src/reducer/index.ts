import { useReducer } from "react";
import { MenuInterface } from "../Menu";
import ActionInterface from "../Actions";
import Meal from "../../MealInterface";

export const initialState: MenuInterface = {
    meals: []
}


// change the state of the basket, by adding or removing an item
export const reducer = (state: MenuInterface, action: ActionInterface): MenuInterface =>
{
    const {actionType, payload} = action;
    switch (actionType)
    {
        case "ADD_MEAL_TO_BASKET": return {...state, meals: payload as Meal[]}
        default: return state;
    }
}
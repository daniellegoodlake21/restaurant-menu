import MealInterface from "../MealInterface";
import MealComponent from "./MealComponent";

const macaroniCheese: MealInterface = {
    key: 1,
    title: "Macaroni Cheese",
    description: "Cheesy macaroni pasta with herbs, breadcrumbs and a side salad.",
    price: 7.99,
    dietaryPreference: "Vegetarian"
}

const chips: MealInterface = {
    key: 2,
    title: "Chips",
    description: "Chunky chips served with ketchup, salt and vinegar",
    price: 2.99,
    dietaryPreference: "Vegan"
}

const lasagne: MealInterface = {
    key: 3,
    title: "Lasagne",
    description: "A classic pasta dish served with garlic bread and a side salad.",
    price: 10.99,
    dietaryPreference: "Contains Meat"
}

let menu: MealComponent[] = [];

menu.push(new MealComponent(macaroniCheese));
menu.push(new MealComponent(chips));
menu.push(new MealComponent(lasagne));

export default menu;
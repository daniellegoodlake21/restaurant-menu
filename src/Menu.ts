import MealInterface from "../MealInterface";
import MealComponent from "./MealComponent";

const macaroniCheese: MealInterface = {
    id: 1,
    title: "Macaroni Cheese",
    description: "Cheesy macaroni pasta with herbs, breadcrumbs and a side salad.",
    price: 7.99,
    dietaryPreference: "Vegetarian",
    imagePath: "/restaurant-menu/images/macaroni-cheese.jpg"
}

const chips: MealInterface = {
    id: 2,
    title: "Chips",
    description: "Chunky chips served with ketchup, salt and vinegar",
    price: 2.99,
    dietaryPreference: "Vegan",
    imagePath: "/restaurant-menu/images/chips.jpg"
}

const lasagne: MealInterface = {
    id: 3,
    title: "Lasagne",
    description: "A classic pasta dish served with garlic bread and a side salad.",
    price: 10.99,
    dietaryPreference: "Contains Meat",
    imagePath: "/restaurant-menu/images/lasagne.jpg"
}

export interface MenuInterface {
    meals: MealInterface[]
}

const menu = [macaroniCheese, chips, lasagne];
export default menu;
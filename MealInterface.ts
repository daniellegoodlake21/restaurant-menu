import DietaryPreference from "./src/DietaryPreference";

export default interface Meal{
    id: number;
    title: string;
    description: string;
    price: number;
    dietaryPreference: DietaryPreference;
    imagePath: string;
    
  }


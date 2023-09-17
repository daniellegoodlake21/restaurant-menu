import DietaryPreferences from "./src/DietaryPreferences";

export default interface Meal{
    title: string;
    description: string;
    price: number;
    dietaryPreference: DietaryPreferences
  }
import DietaryPreferences from "./src/DietaryPreferences";

export default interface Meal{
    key: number;
    title: string;
    description: string;
    price: number;
    dietaryPreference: DietaryPreferences
  }


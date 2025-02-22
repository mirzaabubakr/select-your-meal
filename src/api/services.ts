import { mealItemsData } from "@/constants/select-your-meal/data";
export const MealsService = {
  getMeals: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          mealsData: mealItemsData,
        });
      }, 3000);
    });
  },
};

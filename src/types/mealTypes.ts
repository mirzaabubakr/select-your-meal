import { RefObject } from "react";

export interface MealItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  mealImages: string[];
}
export interface MealItemCategory {
  category: string;
  items: MealItem[];
}

export interface MealItemsListProps {
  data: MealItemCategory[];
  categoryRefs: RefObject<{ [key: string]: HTMLDivElement | null }>;
}

export interface MealItemsListDetailProps {
  mealItem: MealItemCategory;
  categoryRefs: RefObject<{ [key: string]: HTMLDivElement | null }>;
}

export interface MealItemDetailCardProps {
  meal: MealItem;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  image: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  category: string;
}

export interface SelectedItemsCardProps {
  restaurant: Restaurant;
}

export interface SelectedItemDetailCardProps {
  item: MealItem;
  handleRemoveCartItem: (name: string) => void;
}

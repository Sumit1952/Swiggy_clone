import FoodCard from "./FoodCard";
import { imageGridCards } from "./Utilss/FoodData";

export default function FoodOption() {
  return (
    <>
      <div className="w-[95%] sm:w-[90%] md:w-[80%] container mx-auto flex flex-wrap mt-8 md:mt-11 gap-2 sm:gap-3">
        {imageGridCards.map((foodData) => (
          <FoodCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </>
  );
}
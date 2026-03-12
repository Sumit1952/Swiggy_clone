import { GrocerGridCard } from "./Utilss/Grocery"
import Grocerycard from "./Grocerycard"


export default function GroceryOption(){
    return(
        <div className="mt-10 md:mt-20 w-[95%] sm:w-[90%] md:w-[80%] container mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-2xl font-bold">
                Shop Groceries in Instamart
            </h1>

            <div className="w-full md:w-[80%] container mx-auto flex flex-nowrap overflow-x-auto mt-4 md:mt-5 gap-2 sm:gap-3">
                {GrocerGridCard.map((foodData) => (
                  <Grocerycard key={foodData.id} foodData={foodData} />
                ))}
            </div>
        </div>
    )
}
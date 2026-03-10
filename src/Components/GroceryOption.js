import { GrocerGridCard } from "./Utilss/Grocery"
import Grocerycard from "./Grocerycard"


export default function GroceryOption(){
    return(
        <div className="mt-11 w-[80%] container mx-auto mt-20   ">
            <h1 className="text-2xl font-bold">Shop Groceries in Instamart</h1>
              <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
                {GrocerGridCard .map((foodData) => (
                  <Grocerycard key={foodData.id} foodData={foodData} />
                ))}
              </div>
            </div>
    )
}
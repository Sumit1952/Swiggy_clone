import { useSelector } from "react-redux"

export default function Checkout(){

    const items = useSelector(state => state.cartslice.items);

    const totalPrice = items.reduce(
        (total, item) => total + item.price * item.quantity, 
        0
    );

    return(
        <div className="w-[95%] md:w-[80%] mx-auto mt-6 md:mt-10">

            <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
                Your Cart
            </h1>

            <div className="space-y-5">

                {items.map((value,index)=>(
                    <div 
                        key={index}
                        className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-gray-100 p-4 md:p-6 rounded-xl shadow"
                    >

                        <div>
                            <h2 className="text-lg md:text-2xl font-semibold">
                                {value.name}
                            </h2>

                            <p className="text-gray-600 text-sm md:text-base">
                                ₹{value.price/100} each
                            </p>
                        </div>


                        <div className="flex items-center gap-4">

                            <button className="bg-gray-300 px-3 py-1 rounded text-lg md:text-xl">
                                -
                            </button>

                            <span className="text-lg md:text-xl font-bold">
                                {value.quantity}
                            </span>

                            <button className="bg-gray-300 px-3 py-1 rounded text-lg md:text-xl">
                                +
                            </button>

                        </div>


                        <p className="text-lg md:text-xl font-bold text-green-600">
                            ₹{value.price/100 * value.quantity}
                        </p>

                    </div>
                ))}

            </div>


            <div className="flex justify-between mt-8 md:mt-10 text-xl md:text-2xl font-bold border-t pt-5">
                <p>Total</p>
                <p>₹{totalPrice/100}</p>
            </div>


            <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-xl font-semibold py-3 md:py-4 rounded-xl">
                Place Order • ₹{totalPrice/100}
            </button>

        </div>
    )
}
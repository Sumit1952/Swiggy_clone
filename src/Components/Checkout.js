import { useSelector } from "react-redux"

export default function Checkout(){

    const items = useSelector(state => state.cartslice.items);

    const totalPrice = items.reduce(
        (total, item) => total + item.price * item.quantity, 
        0
    );

    return(
        <div className="w-[80%] mx-auto mt-10">

            <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

            <div className="space-y-5">

                {items.map((value,index)=>(
                    <div 
                        key={index}
                        className="flex justify-between items-center bg-gray-100 p-6 rounded-xl shadow"
                    >

                        <div>
                            <h2 className="text-2xl font-semibold">
                                {value.name}
                            </h2>

                            <p className="text-gray-600">
                                ₹{value.price/100} each
                            </p>
                        </div>


                        {/* Quantity UI */}

                        <div className="flex items-center gap-4">

                            <button className="bg-gray-300 px-3 py-1 rounded text-xl">
                                -
                            </button>

                            <span className="text-xl font-bold">
                                {value.quantity}
                            </span>

                            <button className="bg-gray-300 px-3 py-1 rounded text-xl">
                                +
                            </button>

                        </div>


                        {/* Price */}

                        <p className="text-xl font-bold text-green-600">
                            ₹{value.price/100 * value.quantity}
                        </p>

                    </div>
                ))}

            </div>

            {/* Total */}

            <div className="flex justify-between mt-10 text-2xl font-bold border-t pt-5">
                <p>Total</p>
                <p>₹{totalPrice/100}</p>
            </div>

            {/* Order Button */}

            <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-4 rounded-xl">
                Place Order • ₹{totalPrice/100}
            </button>

        </div>
    )
}